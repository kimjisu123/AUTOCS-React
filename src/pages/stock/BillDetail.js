import { NavLink } from 'react-router-dom';
import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
    callBillAPI,
    callMyOrderProductListForBillAPI,
} from '../../apis/StockAPICalls'
import orderForBillReducer from "../../modules/OrderListForBillModule";

// function showPopup() { window.open('/ReciptPopup/', "a", "width=1020, height=600, left=100, top=50"); }

function Bill() {


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


    const onReciptClick = (orderNo) =>{
        window.open(`/ReciptPopup/${orderNo}`, "a", "width=1020, height=600, left=100, top=50");
  }



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

    console.log('fsdadasdda',orderList)


    const onClickReciptHandler= () => {
        alert('거래명세표를 출력 하시겠습니까?');
    }

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
        <div>
            <div className={StockCSS.headLine}>세금계산서</div>
            <div className={StockCSS.contentsHeader}>
                <div>{bill.refStoreInfoNo?.name}</div>
                <button
                    onClick={() => onReciptClick(bill.refOrderNo.orderNo)}>거래명세표 출력</button>
            </div>

            <div style={{marginTop: "1%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className={StockCSS.reciptbox}>
                    <table className={StockCSS.billTable}>
                        <tr style={{color: "blue"}}>
                            <td colSpan={22} rowSpan={2}>세금계산서 (공급받는자 보관용)</td>
                            <td colSpan={4}>책번호</td>
                            <td colSpan={3}>권</td>
                            <td colSpan={3}>호</td>
                        </tr>
                        <tr>
                            <td colSpan={4} style={{color: "blue"}}>일련번호</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={4} style={{color: "blue"}}>공<br/>급<br/>자</td>
                            <td colSpan={3} style={{color: "blue"}}>등록번호</td>
                            <td colSpan={12}>{bill.refCompanyNo?.licenseNo}</td>
                            <td rowSpan={4} style={{color: "blue"}}>공<br/>급<br/>받<br/>는<br/>자</td>
                            <td colSpan={3} style={{color: "blue"}}>등록번호</td>
                            <td colSpan={12}>{bill.refStoreInfoNo?.license}</td>
                        </tr>
                        <tr>
                            <td colSpan={3} style={{color: "blue"}}>상호<br/>(법인명)</td>
                            <td colSpan={6}>{bill.refCompanyNo?.name}</td>
                            <td style={{color: "blue"}}>성<br/>명</td>
                            <td colSpan={5}>{bill.refCompanyNo?.boss} (인)</td>
                            <td colSpan={3} style={{color: "blue"}}>상호<br/>(법인명)</td>
                            <td colSpan={6}>{bill.refStoreInfoNo?.name}</td>
                            <td style={{color: "blue"}}>성<br/>명</td>
                            <td colSpan={5}>{bill.refStoreInfoNo?.name} (인)</td>
                        </tr>
                        <tr>
                            <td colSpan={3} style={{color: "blue"}}>사업장<br/>주 소</td>
                            <td colSpan={12}>{bill.refCompanyNo?.address}</td>
                            <td colSpan={3} style={{color: "blue"}}>사업장<br/>주 소</td>
                            <td colSpan={12}>{bill.refStoreInfoNo?.address}</td>
                        </tr>
                        <tr>
                            <td colSpan={3} style={{color: "blue"}}>업태</td>
                            <td colSpan={6}>{bill.refCompanyNo?.businessCondition}</td>
                            <td style={{color: "blue"}}>종<br/>목</td>
                            <td colSpan={5}></td>
                            <td colSpan={3} style={{color: "blue"}}>업태</td>
                            <td colSpan={6}></td>
                            <td style={{color: "blue"}}>종<br/>목</td>
                            <td colSpan={5}></td>
                        </tr>
                        <tr style={{color: "blue"}}>
                            <td colSpan={4}>작성</td>
                            <td colSpan={13}>공급가액</td>
                            <td colSpan={10}>세액</td>
                            <td colSpan={5}>비고</td>
                        </tr>
                        <tr style={{color: "blue"}}>
                            <td colSpan={2}>년</td>
                            <td>월</td>
                            <td>일</td>
                            <td colSpan={2}>공란수</td>
                            <td>백</td>
                            <td>십</td>
                            <td>억</td>
                            <td>천</td>
                            <td>백</td>
                            <td>십</td>
                            <td>만</td>
                            <td>천</td>
                            <td>백</td>
                            <td>십</td>
                            <td>일</td>
                            <td>십</td>
                            <td>억</td>
                            <td>천</td>
                            <td>백</td>
                            <td>십</td>
                            <td>만</td>
                            <td>천</td>
                            <td>백</td>
                            <td>십</td>
                            <td>일</td>
                            <td colSpan={5}></td>
                        </tr>
                        <tr>
                            <td colSpan={4}>{bill.registDate}</td>
                            <td colSpan={2}></td>
                            <td>{arrayone[0]}</td>
                            <td>{arrayone[1]}</td>
                            <td>{arrayone[2]}</td>
                            <td>{arrayone[3]}</td>
                            <td>{arrayone[4]}</td>
                            <td>{arrayone[5]}</td>
                            <td>{arrayone[6]}</td>
                            <td>{arrayone[7]}</td>
                            <td>{arrayone[8]}</td>
                            <td>{arrayone[9]}</td>
                            <td>{arrayone[10]}</td>
                            <td>{arraytwo[0]}</td>
                            <td>{arraytwo[1]}</td>
                            <td>{arraytwo[2]}</td>
                            <td>{arraytwo[3]}</td>
                            <td>{arraytwo[4]}</td>
                            <td>{arraytwo[5]}</td>
                            <td>{arraytwo[6]}</td>
                            <td>{arraytwo[7]}</td>
                            <td>{arraytwo[8]}</td>
                            <td>{arraytwo[9]}</td>
                            <td colSpan={5}></td>
                        </tr>
                        <tr style={{color: "blue"}}>
                            <td>월</td>
                            <td>일</td>
                            <td colSpan={6}>품목</td>
                            <td colSpan={3}>규격</td>
                            <td colSpan={3}>수량</td>
                            <td colSpan={5}>단가</td>
                            <td colSpan={6}>공급가액</td>
                            <td colSpan={5}>세액</td>
                            <td colSpan={2}>비고</td>
                        </tr>
                        {
                            Array.isArray(orderList) && orderList.map((order) => {
                            if (order.status === 'COMPLETE' || order.status === 'REFUND') {
                            return (
                                <tr >
                                    <td colSpan={2}>{ order.registDate}</td>
                                    <td colSpan={6}>{ order.productName}</td>
                                    <td colSpan={3}>{ order.standardName}</td>
                                    <td colSpan={3}>{ order.quantity.toLocaleString()}</td>
                                    <td colSpan={5}>{ order.price.toLocaleString()}</td>
                                    <td colSpan={6}>{ Math.floor((order.quantity * order.price) - ((order.quantity * order.price) * 0.1)).toLocaleString() }</td>
                                    <td colSpan={5}>{ Math.floor((order.quantity * order.price) * 0.1).toLocaleString() }</td>
                                    <td colSpan={2}></td>
                                </tr>
                            );
                            }
                                return null; // Return null for other statuses, effectively skipping them
                            })
                        }
                        <tr style={{color: "blue"}}>
                            <td colSpan={5}>합계금액</td>
                            <td colSpan={5}>현금</td>
                            <td colSpan={5}>수표</td>
                            <td colSpan={5}>어음</td>
                            <td colSpan={5}>외상미수금</td>
                            <td colSpan={7} rowSpan={2}>이 금액을 영수함</td>
                        </tr>
                        <tr>
                            <td colSpan={5}>{totalAmount.toLocaleString()}</td>
                            <td colSpan={5}></td>
                            <td colSpan={5}></td>
                            <td colSpan={5}></td>
                            <td colSpan={5}></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Bill;
