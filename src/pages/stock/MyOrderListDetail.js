import { NavLink } from 'react-router-dom';
import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';


import {
    callMyOrderProductListAPI, callOrderProductListAPI, callOrderProductUpdateAPI
} from '../../apis/StockAPICalls'

function showPopup() { window.open('/ListPopup', "a", "width=400, height=600, left=100, top=50"); }

function MyOrderListDetail() {

    /********************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 수정
    const [modifyMode, setModifyMode] = useState(false);
    // const [selectedOrders, setSelectedOrders] = useState([]); // 배열로 선택된 주문물품 저장


    // 조회
    const orderProduct = useSelector(state => state.myOrderProductReducer);
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

    // 파라미터에서 주문번호 받음
    const { myOrderNo } = useParams();

    // 주문물품 조회
    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            dispatch(callMyOrderProductListAPI({
                currentPage: currentPage,
                myOrderNo: myOrderNo,
            }));
        }
        ,[currentPage, myOrderNo]
    );

    // 수정
    const [modifyForm, setModifyForm] = useState({
        orderProductNo: '',
        status: '',
    });

    // 수정
    // const onClickModifyModeHandler = (e) => {    // 수정모드
    //     setModifyMode(true);
    //     let inputValue = { orderProductNo: e.target.value };
    //     setSelectedOrders(prevSelectedOrders => [...prevSelectedOrders, inputValue]);
    // }


    /* 취소 핸들러 */
    const onClickCancelHandler= (e) => {
        const confirmed = window.confirm('취소하시겠습니까?');
        if (confirmed) {
            // selectedOrders.forEach(form => {
                const formData = new FormData();
                formData.append("orderProductNo", e.target.value);
                formData.append("status", 'CANCEL');

                dispatch(callOrderProductUpdateAPI({
                    form: formData
                }));
            // });

            // setModifyMode(false);
            // setSelectedOrders([]); // 선택된 카테고리 초기화

            alert('취소되었습니다.');
            // navigate('/stock/orderlist', { replace: true });
            window.location.reload();
        }
        else {
            alert('취소되었습니다.');
        }
    }

    const onClickRefundHandler= (orderProduct) => {
        const confirmed = window.confirm('반품하시겠습니까?');
        if (confirmed) {
            navigate(`/stock/refund/${orderProduct}`);
        }        else {
            alert('취소되었습니다.');
        }
    }

    const onClickCompleteHandler= (e) => {
        const confirmed = window.confirm('완료하시겠습니까?');
        if (confirmed) {
            // selectedOrders.forEach(form => {
                const formData = new FormData();
                formData.append("orderProductNo", e.target.value);
                formData.append("status", 'COMPLETE');

                dispatch(callOrderProductUpdateAPI({
                    form: formData
                }));
            // });

            // setModifyMode(false);
            // setSelectedOrders([]); // 선택된 카테고리 초기화

            alert('완료되었습니다.');
            // navigate('/stock/orderlist', { replace: true });
            window.location.reload();
        }        else {
            alert('취소되었습니다.');
        }
    }

    return (
        <div>
            <div className={StockCSS.headLine}>신청내역관리</div>

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
                        <th>반품</th>
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
                                {/*<td><input*/}
                                {/*    type="checkbox"*/}
                                {/*    value={orderProduct.orderProductNo}*/}
                                {/*    onClick={onClickModifyModeHandler}/>*/}
                                {/*</td>*/}
                                <td>
                                    {orderProduct.status === 'WAITING' ? (
                                        <button onClick={onClickCancelHandler} value={orderProduct.orderProductNo}>취소</button>
                                    ) : orderProduct.status === 'PERMIT' ? (
                                        <button onClick={onClickCompleteHandler} value={orderProduct.orderProductNo}>완료</button>
                                    ) : null}
                                </td>
                                <td>
                                    {/*<button onClick={() => onClickRefundHandler(orderProduct.orderProductNo)}>반품</button>*/}
                                    {orderProduct.status === 'PERMIT' &&  orderProduct.quantity >0 ? (
                                        <button onClick={() => onClickRefundHandler(orderProduct.orderProductNo)}>
                                            반품
                                        </button>
                                    ) : null}
                                </td>
                            </tr>
                        ))
                    }
                </table>
                {/*<div style={{display: "flex", justifyContent: "flex-end", marginTop: "1%"}}>*/}
                {/*    <button style={{marginRight: "10px"}} onClick={ onClickCancelHandler }>취소</button>*/}

                {/*    <button onClick={ onClickCompleteHandler }>완료</button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default MyOrderListDetail;
