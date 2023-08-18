import StockCSS from './Stock.module.css'

function showPopup() { window.open('/ListPopup', "a", "width=400, height=600, left=100, top=50"); }

function StockIo() {

    const onClickRegistHadler= () => {
        alert('등록하시겠습니까?');
    }

    const onClickUseHadler= () => {
        alert('사용 등록하시겠습니까?');
    }

    const onClickUnuseHadler= () => {
        alert('미사용 등록하시겠습니까?');
    }

    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <div>조회기간</div>
                    <input className={StockCSS.dateSelectbox} type="date"/>
                    <div>~</div>
                    <input className={StockCSS.dateSelectbox} type="date"/>
                </div>

                <div>
                    <div>영업점</div>
                    <input type="text" placeholder="영업점을 조회하세요"/>
                    <button>조회</button>
                </div>

                <div>
                    <div>상태</div>
                    <select>
                        <option value="wait">대기</option>
                        <option value="cancel">취소</option>
                        <option value="reject">반려</option>
                        <option value="permit">승인</option>
                        <option value="complete">완료</option>
                    </select>
                </div>
            </div>
            <div>
                <button onClick={ onClickUseHadler }>사용</button>
                <button onClick={ onClickUnuseHadler }>미사용</button>
            </div>

            <div style={{marginTop: "5%"}}>
                <table >
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
            </div>
        </div>
    )
}

export default StockIo;
