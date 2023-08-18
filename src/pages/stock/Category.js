import StockCSS from './Stock.module.css'

function Category() {

    return(
        <div>
            <div className={StockCSS.headLine}>카테고리 신규등록</div>
            <table>
                <tr>
                    <td>
                        카테고리명
                    </td>
                    <td>
                        <input type="text" placeholder="카테고리명을 입력하세요"/>
                    </td>
                    <td>
                        <button onClick="alert('등록하시겠습니까?')">등록</button>
                    </td>
                </tr>
            </table>
            <div style={{marginTop: "10%"}}>
                <h2>카테고리 목록</h2>
                <table style={{border: "solid 1px" }}>
                    <tr>
                        <th>NO</th>
                        <th>카테고리명</th>
                        <th>등록일</th>
                        <th>불용일</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>식품</td>
                        <td>2023-07-01</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>소모품</td>
                        <td>2023-08-01</td>
                        <td>2023-08-04</td>
                    </tr>
                </table>
            </div>
        </div>

    )
}

export default Category;