import StockCSS from './Stock.module.css'

function ListPopup() {

    return (
        <div className={StockCSS.listbox}>
            <div className={StockCSS.contentsbox}>
                <h1>조회목록</h1>
                <input type="text" placeholder="검색어를 입력하세요"/>
                    <button>조회</button>
                    <table style={{marginTop: "5%"}}>
                        <tr>
                            <th>NO</th>
                            <th>카테고리명</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>식품</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>소모품</td>
                        </tr>
                    </table>
            </div>
        </div>
    )
}
export default ListPopup;
