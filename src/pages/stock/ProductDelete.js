import StockCSS from './Stock.module.css'

function showPopup() { window.open('/ListPopup', "a", "width=400, height=600, left=100, top=50"); }

function ProductDelete() {

    const onClickRegistHandler= () => {
        alert('등록하시겠습니까?');
    }
    
    return(
        <div>
            <div className={StockCSS.headLine}>물품 불용등록</div>
            <table>
                <tr>
                    <td>
                        물품명
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox} type="text" placeholder="물품명을 조회하세요" readOnly/>
                    </td>
                    <td>
                        <button onClick={()=> showPopup()}>조회</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        불용시작일
                    </td>
                    <td>
                        <input type="date"/>
                    </td>
                    <td>
                        <button onClick={ onClickRegistHandler }>등록</button>
                    </td>
                </tr>
            </table>
            <div style={{marginTop: "5%"}}>
                <div className={StockCSS.middleLine}>
                    물품 목록
                </div>
                <table>
                    <tr>
                        <th>NO</th>
                        <th>카테고리명</th>
                        <th>품목명</th>
                        <th>규격</th>
                        <th>단위</th>
                        <th>적정재고</th>
                        <th>단가</th>
                        <th>비고</th>
                        <th>불용일</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>식품</td>
                        <td>밀가루</td>
                        <td>10kg</td>
                        <td>EA</td>
                        <td>100</td>
                        <td>12,000</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>식품</td>
                        <td>밀가루</td>
                        <td>10kg</td>
                        <td>EA</td>
                        <td>100</td>
                        <td>12,000</td>
                        <td>-</td>
                        <td>2023-01-01</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ProductDelete;