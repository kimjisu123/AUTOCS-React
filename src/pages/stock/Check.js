import StockCSS from './Stock.module.css'

function Check() {

    return (
        <div>
            <div className={StockCSS.headLine}>재고조회</div>
            <div className={StockCSS.contentsHeader}>
                <div className={StockCSS.datebox}>
                    <div>조회기간</div>
                    <input className={StockCSS.dateSelectbox} type="date"/>
                    <div>~</div>
                    <input className={StockCSS.dateSelectbox} type="date"/>
                </div>

                <div className={StockCSS.contentsHeader}>
                    <div>품목명</div>
                    <input className={StockCSS.searchbox} type="text" placeholder="품목명을 조회하세요"/>
                        <button>조회</button>
                </div>

            </div>

            <div>
                <table>
                    <tr>
                        <th>CODE</th>
                        <th>카테고리</th>
                        <th>품목명</th>
                        <th>규격</th>
                        <th>단위</th>
                        <th>적정<br/>재고</th>
                        <th className={StockCSS.mainline}>현재<br/>재고</th>
                        <th>기간<br/>입고</th>
                        <th>기간<br/>출고</th>
                        <th>기간<br/>폐기</th>
                        <th>단가</th>
                        <th>비고</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>식품</td>
                        <td>밀가루</td>
                        <td>10kg</td>
                        <td>EA</td>
                        <td>100</td>
                        <td className={StockCSS.mainline}>70</td>
                        <td>50</td>
                        <td>30</td>
                        <td>-</td>
                        <td>12,000</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>식품</td>
                        <td>밀가루</td>
                        <td>10kg</td>
                        <td>EA</td>
                        <td>100</td>
                        <td className={StockCSS.mainline}>70</td>
                        <td>50</td>
                        <td>30</td>
                        <td>-</td>
                        <td>12,000</td>
                        <td>-</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Check;
