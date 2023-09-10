import { NavLink } from 'react-router-dom';
import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
    callMyOrderListAPI,
} from '../../apis/StockAPICalls'
import {decodeJwt} from "../../util/tokenUtils";

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

function MyOrderList() {

    /********************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const storeNo = parseInt(decodedToken.StoreNo, 10)
    const storeName = decodedToken.Name


    // 조회
    const order = useSelector(state => state.myOrderReducer);
    const orderList = order.data;

    const pageInfo = order.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd ; i++){
            pageNumber.push(i);
        }
    }

    // 주문 조회
    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            dispatch(callMyOrderListAPI({
                currentPage: currentPage,
                store: storeNo,
                startDate: getFirstDayOfMonth(),
                endDate: getCurrentDatePlusOneDay()
            }));
        }
        ,[currentPage]
    );

    // 주문 조회
    const [form, setForm] = useState({
        store: storeNo,
        startDate: '',
        endDate: ''
    });

    // form 데이터 세팅
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log(e.target.value)
    };

    /* 주문 조회 핸들러 */
    const onClickSearchHandler = (e) => {

        const formData = new FormData();

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

        formData.append("store", storeNo);
        formData.append("startDate", selectedStartDate);
        formData.append("endDate", selectedEndDate);

        console.log('sdafdad',selectedEndDate)

        dispatch(callMyOrderListAPI({
            store: storeNo,
            startDate: selectedStartDate,
            endDate: selectedEndDate,
            currentPage: 1
        }));
    }

    // 주문번호 클릭 핸들러
    const onOrderNoClick = (orderNo) => {
        // 클릭한 주문의 상세 페이지로 이동합니다.
        navigate(`/stock/myorderlist/detail/${orderNo}`);
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
                    <button onClick={onClickSearchHandler}>조회</button>
                </div>


                <div className={StockCSS.contentsHeader}>
                    <div>{storeName}</div>
                </div>
            </div>

            <div style={{marginTop: "1%"}}>
                <table className={StockCSS.stockTable}>
                    <tr>
                        <th>NO</th>
                        <th>거래번호</th>
                        <th>발주일</th>
                        <th>발주상태</th>
                        <th>세금계산서발행</th>
                    </tr>
                    {
                        Array.isArray(orderList) && orderList.map((order, index) => (
                            <tr >
                                <td>{index+1}</td>
                                {/*<td><NavLink to="/stock/myorderlist/detail">{ order.orderNo}</NavLink></td>*/}
                                <td
                                    style={{ cursor: 'pointer' }} // 클릭 가능한 스타일로 변경
                                    onClick={() => onOrderNoClick(order.orderNo)} // 클릭 시 이벤트 핸들러 호출
                                >
                                    {order.orderNo}
                                </td>
                                <td>{ order.registDate}</td>
                                <td>{ order.status}</td>
                                <td><button>발행</button></td>
                            </tr>
                        ))
                    }

                </table>
                <div style={{ listStyleType: "none", display: "flex", justifyContent: "center", marginTop:"2%"}}>
                    { Array.isArray(orderList) &&
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
                    { Array.isArray(orderList) &&
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

export default MyOrderList;
