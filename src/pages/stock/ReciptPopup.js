import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
    callBillAPI,
    callMyOrderProductListForBillAPI,
} from '../../apis/StockAPICalls'
import orderForBillReducer from "../../modules/OrderListForBillModule";



function ReciptPopup() {

    /********************************************************************/

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 파라미터에서 주문번호 받음
    const { orderNo } = useParams();
    console.log(orderNo)


    // 조회
    const [billInfo, setBillInfo] = useState({});
    const [orderInfo, setOrderInfo] = useState({});
    const bill = useSelector(state => state.billDetailReducer);
    const orderList = useSelector(state => state.orderForBillReducer);
    // const orderList = order.data;

    // 주문물품 조회
    useEffect(
        () => {
            dispatch(callBillAPI({
                orderNo: orderNo
            }));
            setBillInfo(bill);
            dispatch(callMyOrderProductListForBillAPI({
                myOrderNo: orderNo
            }))
            setOrderInfo(orderList);
        }
        ,[]
    );

    const totalAmount = orderList.reduce((total, order) => {
        const orderAmount = order.quantity * order.price;
        return total + orderAmount;
    }, 0); // 초기값 0으로 시작

    const priceOne = Math.floor(totalAmount-(totalAmount * 0.1)).toString();
    const priceTwo = Math.floor(totalAmount * 0.1).toString();
    // const totalAmountStr = totalAmount.toString(); // totalAmount를 문자열로 변환

// totalAmountStr을 11자리 문자열로 만들고 빈 값은 공백으로 채우기
    const arrayone = priceOne.padStart(11, ' ');
    const arraytwo = priceTwo.padStart(10, ' ');

    console.log(arrayone); // 배열에 저장된 한 글자씩 값 출력


    return (
        <>
            <div className={StockCSS.listbox2}>
                <div className={StockCSS.reciptbox}>
                <h1>거래명세표</h1>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <table className={StockCSS.reciptTable}>
                            <tr style={{color: "limegreen"}}>
                                <td colSpan={6}>거래일자</td>
                                <td colSpan={26} rowSpan={2}>거래명세표 (공급받는자용)</td>
                            </tr>
                            <tr>
                                <td colSpan={6}>{bill?.registDate}</td>
                            </tr>
                            <tr>

                                <td rowSpan={4} style={{color: "limegreen"}}>공<br/>급<br/>받<br/>는<br/>자</td>
                                <td colSpan={3} style={{color: "limegreen"}}>상호<br/>(법인명)</td>
                                <td colSpan={10}>{bill.refStoreInfoNo?.name}</td>
                                <td colSpan={2} style={{color: "limegreen"}}>귀하</td>
                                <td rowSpan={4} style={{color: "limegreen"}}>공<br/>급<br/>자</td>
                                <td colSpan={3} style={{color: "limegreen"}}>등록번호</td>
                                <td colSpan={12}>{bill.refCompanyNo?.licenseNo}</td>
                            </tr>
                            <tr>
                                <td colSpan={3} style={{color: "limegreen"}}>사업장<br/>주 소</td>
                                <td colSpan={12}>{bill.refStoreInfoNo?.address}</td>
                                <td colSpan={3} style={{color: "limegreen"}}>상호<br/>(법인명)</td>
                                <td colSpan={6}>{bill.refCompanyNo?.name}</td>
                                <td style={{color: "limegreen"}}>성<br/>명</td>
                                <td colSpan={5}>{bill.refCompanyNo?.boss}</td>
                            </tr>
                            <tr>
                                <td colSpan={3} style={{color: "limegreen"}}>전화번호</td>
                                <td colSpan={12}>{bill.refStoreInfoNo?.phone}</td>
                                <td colSpan={3} style={{color: "limegreen"}}>사업장<br/>주 소</td>
                                <td colSpan={12}>{bill.refCompanyNo?.address}</td>
                            </tr>
                            <tr>
                                <td colSpan={3} style={{color: "limegreen"}}>합계금액</td>
                                <td colSpan={12}>{totalAmount.toLocaleString()}</td>
                                <td colSpan={3} style={{color: "limegreen"}}>전화</td>
                                <td colSpan={6}></td>
                                <td style={{color: "limegreen"}}>팩스</td>
                                <td colSpan={5}></td>
                            </tr>
                            <tr style={{color: "limegreen"}}>
                                <td colSpan={2}>년월일</td>
                                {/*<td>일</td>*/}
                                <td colSpan={12}>품목</td>
                                <td colSpan={2}>규격</td>
                                <td colSpan={2}>수량</td>
                                <td colSpan={6}>단가</td>
                                <td colSpan={6}>금액</td>
                                <td colSpan={2}>비고</td>
                            </tr>
                            {
                                Array.isArray(orderList) && orderList.map((order) => {
                                    if (order.status === 'COMPLETE' || order.status === 'REFUND') {
                                        return (
                                    <tr >
                                        <td colSpan={2}>{ order.registDate}</td>
                                        <td colSpan={12}>{ order.productName}</td>
                                        <td colSpan={2}>{ order.standardName}</td>
                                        <td colSpan={2}>{ order.quantity.toLocaleString()}</td>
                                        <td colSpan={6}>{ order.price.toLocaleString()}</td>
                                        <td colSpan={6}>{ Math.floor((order.quantity * order.price) - ((order.quantity * order.price) * 0.1)).toLocaleString() }</td>
                                        <td colSpan={2}></td>
                                    </tr>
                                        );
                                    }
                                    return null; // Return null for other statuses, effectively skipping them
                                })
                            }
                            <tr>
                                <td style={{color: "limegreen"}} colSpan={2}>인수자</td>
                                <td colSpan={3}>{bill.refStoreInfoNo?.name}</td>
                                <td style={{color: "limegreen"}} colSpan={2}>납품자</td>
                                <td colSpan={3}>{bill.refCompanyNo?.boss}</td>
                                <td style={{color: "limegreen"}} colSpan={2}>월결</td>
                                <td style={{color: "limegreen"}} colSpan={2}>현금</td>
                                <td style={{color: "limegreen"}} colSpan={2}>신용</td>
                                <td style={{color: "limegreen"}} colSpan={2}>미수</td>
                                <td style={{color: "limegreen"}} colSpan={2}>소계</td>
                                <td colSpan={12}>{totalAmount.toLocaleString()}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ReciptPopup;
