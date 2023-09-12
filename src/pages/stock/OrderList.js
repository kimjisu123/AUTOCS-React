import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
    callIOListWithGroupingAPI,
    callOrderProductListAPI,
    callOrderProductUpdateAPI,
} from '../../apis/StockAPICalls'
import orderProductReducer from "../../modules/OrderProductModule";

// 이번달 첫째일
function getFirstDayOfMonth() {
    const now = new Date();
    console.log(now)
    return new Date(now.getFullYear(), now.getMonth(), 2).toISOString().split('T')[0];
}

// 오늘 날짜를 가져오는 함수
function getCurrentDate() {
    const now = new Date();
    return now.toISOString().split('T')[0];
}

function getCurrentDatePlusOneDay() {
    const now = new Date();
    // 현재 날짜에 1을 더해 하루를 더합니다.
    now.setDate(now.getDate() + 1);
    return now.toISOString().split('T')[0];
}

function showPopup() { window.open('/ListPopup', "a", "width=400, height=600, left=100, top=50"); }

function OrderList() {

    /********************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 수정
    const [modifyMode, setModifyMode] = useState(false);
    const [selectedOrders, setSelectedOrders] = useState([]); // 배열로 선택된 주문물품 저장

    // 조회
    const orderProduct = useSelector(state => state.orderProductReducer);
    const orderProductList = orderProduct.data;

    const pageInfo = orderProduct.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd ; i++){
            pageNumber.push(i);
        }
    }

    // 주문물품 조회
    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            dispatch(callOrderProductListAPI({
                currentPage: currentPage,
                stat: 'WAITING',
                search: '',
                startDate: getFirstDayOfMonth(),
                endDate: getCurrentDatePlusOneDay()
            }));
        }
        ,[currentPage]
    );

    // 주문물품 조회
    const [form, setForm] = useState({
        search: '',
        stat:'',
        startDate: '',
        endDate: ''
    });

    // form 데이터 세팅
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e?.target.name]: e?.target.value
        });
    };

    /* 주문물품 조회 핸들러 */
    const onClickSearchHandler = (e) => {

        // 상태 변경시 orderProductList 초기화
        dispatch({ type: 'CLEAR_ORDER_PRODUCT_LIST' }); // 또는 적절한 액션을 사용


        const formData = new FormData();

        const selectedStat = e?.target.value;

        setForm({
            ...form,
            stat: selectedStat,
        });

        let selectedStartDate = '';
        let selectedEndDate = '';

        if(form.startDate === ''){
            selectedStartDate = getFirstDayOfMonth();
        }
        else {
            selectedStartDate= form.startDate;
        }

        if(form.endDate === ''){
            selectedEndDate =getCurrentDatePlusOneDay();
        } else if(form.endDate === getCurrentDate()){
            selectedStartDate = getCurrentDatePlusOneDay();
        }else {
            selectedEndDate= form.endDate;
        }

        formData.append("search", form.search);
        formData.append("stat", selectedStat);
        formData.append("startDate", selectedStartDate);
        formData.append("endDate", selectedEndDate);

        dispatch(callOrderProductListAPI({
            search: form.search,
            stat: selectedStat,
            startDate: selectedStartDate,
            endDate: selectedEndDate,
            currentPage: 1
        }));
        console.log(form.startDate)
        console.log(form.endDate)
        console.log(form.search)
    }

    // 수정
    const [modifyForm, setModifyForm] = useState({
        orderProductNo: '',
        status: '',
    });

    // 수정
    const onClickModifyModeHandler = (e) => {    // 수정모드
        setModifyMode(true);
        let inputValue = { orderProductNo: e?.target.value };
        setSelectedOrders(prevSelectedOrders => [...prevSelectedOrders, inputValue]);
    }

    console.log(selectedOrders)

    /* 승인 핸들러 */
    const onClickPermitHandler = () => {
        const confirmed = window.confirm('승인하시겠습니까?');
        if (confirmed) {
            selectedOrders.forEach(form => {
                const formData = new FormData();
                formData.append("orderProductNo", form.orderProductNo);
                formData.append("status", 'PERMIT');

                dispatch(callOrderProductUpdateAPI({
                    form: formData
                }));
            });

            setModifyMode(false);
            setSelectedOrders([]); // 선택된 카테고리 초기화

            alert('승인되었습니다.');
            navigate('/stock/orderlist', { replace: true });
            window.location.reload();
        }        else {
            alert('취소되었습니다.');
        }
    }

    /* 반려 핸들러 */
    const onClickRejectHandler = () => {
        const confirmed = window.confirm('반려하시겠습니까?');
        if (confirmed) {
            selectedOrders.forEach(form => {
                const formData = new FormData();
                formData.append("orderProductNo", form.orderProductNo);
                formData.append("status", 'REJECT');

                dispatch(callOrderProductUpdateAPI({
                    form: formData
                }));
            });

            setModifyMode(false);
            setSelectedOrders([]); // 선택된 카테고리 초기화

            alert('반려되었습니다.');
            navigate('/stock/orderlist', { replace: true });
            window.location.reload();
        }        else {
            alert('취소되었습니다.');
        }
    }

    const onEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClickSearchHandler();
        }
    };

    return (
        <div>
            <div className={StockCSS.headLine}>신청내역관리</div>
            <div className={StockCSS.contentsHeader}>
                <div className={StockCSS.datebox}>
                    <div>조회기간</div>
                    <input name='startDate'
                           className={StockCSS.dateSelectbox}
                           type="date"
                           defaultValue={getFirstDayOfMonth()}
                           onChange={ onChangeHandler }
                    />
                    <div>~</div>
                    <input name='endDate'
                           className={StockCSS.dateSelectbox}
                           type="date"
                           defaultValue={getCurrentDate()}
                           onChange={ onChangeHandler }
                    />
                </div>

                <div className={StockCSS.contentsHeader}>
                    <div>영업점</div>
                    <input className={StockCSS.searchbox}
                           name='search'
                           type="text"
                           placeholder="영업점을 조회하세요"
                           onChange={ onChangeHandler }
                           onKeyPress={onEnterKeyPress}
                    />
                    <button onClick={onClickSearchHandler}>조회</button>
                </div>
                <div className={StockCSS.contentsHeader}>
                    <div>상태</div>
                    <select name='stat' onChange={ onClickSearchHandler }>
                        <option value="WAITING">대기</option>
                        <option value="CANCEL">취소</option>
                        <option value="REJECT">반려</option>
                        <option value="PERMIT">승인</option>
                        <option value="COMPLETE">완료</option>
                        <option value="REFUND">환불</option>
                    </select>
                </div>
            </div>

            <div style={{marginTop: "1%"}}>
                <table className={StockCSS.stockTable}>
                    <tr>
                        <th>거래<br/>번호</th>
                        <th>영업점</th>
                        <th>품목<br/>코드</th>
                        <th>품목명</th>
                        <th>규격</th>
                        <th>단위</th>
                        <th>단가</th>
                        <th>신청<br/>수량</th>
                        <th>비고</th>
                        <th>신청일</th>
                        <th>상태</th>
                        <th>상태<br/>변경</th>
                    </tr>
                    {
                        Array.isArray(orderProductList) && orderProductList.map((orderProduct) => (
                            <tr >
                                <td>{ orderProduct.orderNo}</td>
                                <td>{ orderProduct.storeInfoName}</td>
                                <td>{ orderProduct.categoryName}</td>
                                <td>{ orderProduct.productName}</td>
                                <td>{ orderProduct.unitName}</td>
                                <td>{ orderProduct.standardName}</td>
                                <td>{ orderProduct.price.toLocaleString()}</td>
                                <td>{ orderProduct.quantity.toLocaleString()}</td>
                                <td>{ orderProduct.etc}</td>
                                <td>{ orderProduct.registDate}</td>
                                <td>{ orderProduct.status}</td>
                                <td>{orderProduct.status === 'WAITING' ? (
                                    <input
                                           type="checkbox"
                                           value={orderProduct.orderProductNo}
                                           onClick={onClickModifyModeHandler}/>
                                ) : null}
                                </td>
                            </tr>
                        ))
                    }
                </table>
                <div style={{display: "flex", justifyContent: "flex-end", marginTop: "1%"}}>
                    <button style={{marginRight: "10px"}} onClick={ onClickPermitHandler }>승인</button>
                    <button onClick={ onClickRejectHandler }>반려</button>
                </div>
                <div style={{ listStyleType: "none", display: "flex", justifyContent: "center", marginTop:"2%"}}>
                    { Array.isArray(orderProductList) &&
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            &lt;
                        </button>
                    }
                    {pageNumber.map((num) => (
                        <li key={num} onClick={() => setCurrentPage(num)}>
                            <button
                                style={ currentPage === num ? {backgroundColor : '#ecead8' } : null}
                            >
                                {num}
                            </button>
                        </li>
                    ))}
                    { Array.isArray(orderProductList) &&
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === pageInfo.pageEnd  || pageInfo.total == 0}
                        >
                            &gt;
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default OrderList;
