import StockCSS from './Stock.module.css'

function Category() {

    const onClickRegistHandler= () => {
        alert('등록하시겠습니까?');
    }

    const onClickUseHandler= () => {
        alert('사용 등록하시겠습니까?');
    }

    const onClickUnuseHandler= () => {
        alert('미사용 등록하시겠습니까?');
    }
    return(
        <div>
            <div className={StockCSS.headLine}>카테고리 관리</div>
            <table className={StockCSS.stockTable}>
                <tr>
                    <td>
                        카테고리명
                    </td>
                    <td>
                        <input type="text" placeholder="카테고리명을 입력하세요"/>
                    </td>
                    <td>
                        <button onClick={ onClickRegistHandler }>등록</button>
                    </td>
                </tr>
            </table>
            <div style={{marginTop: "5%"}}>
                <div className={StockCSS.middleLine}>
                    카테고리 목록
                    <div>
                        <button style={{marginRight: "10px"}} onClick={ onClickUseHandler }>사용</button>
                        <button onClick={ onClickUnuseHandler }>미사용</button>
                    </div>
                </div>
                <table className={StockCSS.stockTable}>
                    <tr>
                        <th>NO</th>
                        <th>카테고리명</th>
                        <th>사용여부</th>
                        <th>상태변경</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>식품</td>
                        <td>사용</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>소모품</td>
                        <td>사용</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                </table>
            </div>
        </div>

    )
}

export default Category;