import StockCSS from './Stock.module.css'

function ReciptPopup() {

    return (
        <>
            <div className={StockCSS.listbox}>
                <div className={StockCSS.reciptbox}>
                <h1>거래명세서</h1>
                    <div>
                        <table className={StockCSS.reciptTable}>
                            <tr style={{color: "limegreen"}}>
                                <td colSpan={6}>거래일자</td>
                                <td colSpan={26} rowSpan={2}>거래명세표 (공급받는자용)</td>
                            </tr>
                            <tr>
                                <td colSpan={6}>2023-08-01</td>
                            </tr>
                            <tr>

                                <td rowSpan={4} style={{color: "limegreen"}}>공<br/>급<br/>받<br/>는<br/>자</td>
                                <td colSpan={3} style={{color: "limegreen"}}>상호<br/>(법인명)</td>
                                <td colSpan={10}>법인이름</td>
                                <td colSpan={2} style={{color: "limegreen"}}>귀하</td>
                                <td rowSpan={4} style={{color: "limegreen"}}>공<br/>급<br/>자</td>
                                <td colSpan={3} style={{color: "limegreen"}}>등록번호</td>
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
                                <td colSpan={3} style={{color: "limegreen"}}>사업장<br/>주 소</td>
                                <td colSpan={12}>ㅇㅇ시 ㅇㅇ구 ㅇㅇ로 ㅇㅇㅇ</td>
                                <td colSpan={3} style={{color: "limegreen"}}>상호<br/>(법인명)</td>
                                <td colSpan={6}>법인이름</td>
                                <td style={{color: "limegreen"}}>성<br/>명</td>
                                <td colSpan={5}>대표자명</td>
                            </tr>
                            <tr>
                                <td colSpan={3} style={{color: "limegreen"}}>전화번호</td>
                                <td colSpan={12}>전화번호</td>
                                <td colSpan={3} style={{color: "limegreen"}}>사업장<br/>주 소</td>
                                <td colSpan={12}>ㅇㅇ시 ㅇㅇ구 ㅇㅇ로 ㅇㅇㅇ</td>
                            </tr>
                            <tr>
                                <td colSpan={3} style={{color: "limegreen"}}>합계금액</td>
                                <td colSpan={12}>12,000원</td>
                                <td colSpan={3} style={{color: "limegreen"}}>전화</td>
                                <td colSpan={6}>전화번호</td>
                                <td style={{color: "limegreen"}}>팩스</td>
                                <td colSpan={5}>팩스번호</td>
                            </tr>
                            <tr style={{color: "limegreen"}}>
                                <td>월</td>
                                <td>일</td>
                                <td colSpan={12}>품목</td>
                                <td colSpan={2}>규격</td>
                                <td colSpan={2}>수량</td>
                                <td colSpan={6}>단가</td>
                                <td colSpan={6}>금액</td>
                                <td colSpan={2}>비고</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td colSpan={12}>밀가루</td>
                                <td colSpan={2}>10kg</td>
                                <td colSpan={2}>1</td>
                                <td colSpan={6}>12,000</td>
                                <td colSpan={6}>12,000</td>
                                <td colSpan={2}></td>
                            </tr>
                            <tr>
                                <td style={{color: "limegreen"}} colSpan={2}>인수자</td>
                                <td colSpan={3}>담당자</td>
                                <td style={{color: "limegreen"}} colSpan={2}>납품자</td>
                                <td colSpan={3}>담당자</td>
                                <td style={{color: "limegreen"}} colSpan={2}>월결</td>
                                <td style={{color: "limegreen"}} colSpan={2}>현금</td>
                                <td style={{color: "limegreen"}} colSpan={2}>신용</td>
                                <td style={{color: "limegreen"}} colSpan={2}>미수</td>
                                <td style={{color: "limegreen"}} colSpan={2}>소계</td>
                                <td colSpan={12}>12,000원</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ReciptPopup;
