import { NavLink } from 'react-router-dom';
import StockCSS from './Stock.module.css'

function showPopup() { window.open('/ListPopup', "a", "width=400, height=600, left=100, top=50"); }

function MyOrderListDetail() {

    const onClickCancelHandler= () => {
        alert('취소하시겠습니까?');
    }

    const onClickRefundHandler= () => {
        alert('반품하시겠습니까?');
    }

    const onClickCompleteHandler= () => {
        alert('완료하시겠습니까?');
    }

    return (
        <div>
            <div className={StockCSS.headLine}>신청내역관리</div>
            <div className={StockCSS.contentsHeader}>
                <div className={StockCSS.datebox}>
                    <div>조회기간</div>
                    <input className={StockCSS.dateSelectbox} type="date"/>
                    <div>~</div>
                    <input className={StockCSS.dateSelectbox} type="date"/>
                </div>

                <div className={StockCSS.contentsHeader}>
                    <div>상태</div>
                    <select className={StockCSS.selectbox}>
                        <option value="wait">대기</option>
                        <option value="cancel">취소</option>
                        <option value="reject">반려</option>
                        <option value="permit">승인</option>
                        <option value="complete">완료</option>
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
                    <tr>
                        <td>20201234</td>
                        <td>종로점</td>
                        <td>1</td>
                        <td>밀가루</td>
                        <td>10kg</td>
                        <td>EA</td>
                        <td>12,000</td>
                        <td>5</td>
                        <td>-</td>
                        <td>2023-08-01</td>
                        <td>대기</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                    <tr>
                        <td>20201234</td>
                        <td>종로점</td>
                        <td>1</td>
                        <td>밀가루</td>
                        <td>10kg</td>
                        <td>EA</td>
                        <td>12,000</td>
                        <td>5</td>
                        <td>-</td>
                        <td>2023-08-01</td>
                        <td>대기</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                </table>
                <div style={{display: "flex", justifyContent: "flex-end", marginTop: "1%"}}>
                    <button style={{marginRight: "10px"}} onClick={ onClickCancelHandler }>취소</button>
                    <button style={{marginRight: "10px"}}><NavLink to="/main/stock/refund">반품</NavLink></button>
                    <button onClick={ onClickCompleteHandler }>완료</button>
                </div>
            </div>
        </div>
    )
}

export default MyOrderListDetail;
