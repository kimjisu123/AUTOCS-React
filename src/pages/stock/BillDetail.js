import { NavLink } from 'react-router-dom';
import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
    callBillAPI, callMyOrderProductListAPI,
} from '../../apis/StockAPICalls'


function showPopup() { window.open('/ReciptPopup', "a", "width=1020, height=600, left=100, top=50"); }

function Bill() {

    /********************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // 파라미터에서 주문번호 받음
    const { orderNo } = useParams();
    console.log(orderNo)

    // 주문물품 조회
    // useEffect(
    //     () => {
    //         const paramOrderNo = orderNo;
    //         console.log('ddddddddd',paramOrderNo)
    //         dispatch(callBillAPI(paramOrderNo));
    //     }
    //     ,[]
    // );

    useEffect(async () => {
        await dispatch(callBillAPI(orderNo)); // API 호출이 완료될 때까지 대기
    }, []);

    // 조회
    const bill = useSelector(state => state.billDetailReducer);
    console.log('sssss',bill)



    const onClickReciptHandler= () => {
        alert('거래명세표를 출력 하시겠습니까?');
    }

    return (
        <div>
            <div className={StockCSS.headLine}>세금계산서</div>
            <div className={StockCSS.contentsHeader}>
                <div>종로점</div>
                <button onClick={showPopup}>거래명세표 출력</button>
            </div>

            <div style={{marginTop: "1%"}}>
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
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td rowSpan={4} style={{color: "blue"}}>공<br/>급<br/>받<br/>는<br/>자</td>
                            <td colSpan={3} style={{color: "blue"}}>등록번호</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colSpan={3} style={{color: "blue"}}>상호<br/>(법인명)</td>
                            <td colSpan={6}>법인이름</td>
                            <td style={{color: "blue"}}>성<br/>명</td>
                            <td colSpan={5}>대표자명 (인)</td>
                            <td colSpan={3} style={{color: "blue"}}>상호<br/>(법인명)</td>
                            <td colSpan={6}>법인이름</td>
                            <td style={{color: "blue"}}>성<br/>명</td>
                            <td colSpan={5}>대표자명 (인)</td>
                        </tr>
                        <tr>
                            <td colSpan={3} style={{color: "blue"}}>사업장<br/>주 소</td>
                            <td colSpan={12}>ㅇㅇ시 ㅇㅇ구 ㅇㅇ로 ㅇㅇㅇ</td>
                            <td colSpan={3} style={{color: "blue"}}>사업장<br/>주 소</td>
                            <td colSpan={12}>ㅇㅇ시 ㅇㅇ구 ㅇㅇ로 ㅇㅇㅇ</td>
                        </tr>
                        <tr>
                            <td colSpan={3} style={{color: "blue"}}>업태</td>
                            <td colSpan={6}>업태명</td>
                            <td style={{color: "blue"}}>종<br/>목</td>
                            <td colSpan={5}>종목명</td>
                            <td colSpan={3} style={{color: "blue"}}>업태</td>
                            <td colSpan={6}>업태명</td>
                            <td style={{color: "blue"}}>종<br/>목</td>
                            <td colSpan={5}>종목명</td>
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
                            <td colSpan={2}>2023</td>
                            <td></td>
                            <td></td>
                            <td colSpan={2}></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
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
                        <tr>
                            <td>11</td>
                            <td>1</td>
                            <td colSpan={6}>밀가루</td>
                            <td colSpan={3}>10kg</td>
                            <td colSpan={3}>1</td>
                            <td colSpan={5}>12,000</td>
                            <td colSpan={6}>10,909 </td>
                            <td colSpan={5}>1,091</td>
                            <td colSpan={2}></td>
                        </tr>
                        <tr style={{color: "blue"}}>
                            <td colSpan={5}>합계금액</td>
                            <td colSpan={5}>현금</td>
                            <td colSpan={5}>수표</td>
                            <td colSpan={5}>어음</td>
                            <td colSpan={5}>외상미수금</td>
                            <td colSpan={7} rowSpan={2}>이 금액을 영수함</td>
                        </tr>
                        <tr>
                            <td colSpan={5}>12,000</td>
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
