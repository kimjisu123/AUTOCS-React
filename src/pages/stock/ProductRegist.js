import StockCSS from './Stock.module.css'

function showPopup() { window.open('/ListPopup', "a", "width=400, height=600, left=100, top=50"); }

function ProductRegist() {

    const onClickRegistHandler= () => {
        alert('등록하시겠습니까?');
    }

    return(
        <div>
            <div className={StockCSS.headLine}>물품 신규등록</div>
            <table>
                <tr>
                    <td>
                        카테고리
                    </td>
                    <td>
                        <select></select>
                    </td>
                </tr>
                <tr>
                    <td>
                        품목명
                    </td>
                    <td>
                        <input type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        규격
                    </td>
                    <td>
                        <select>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        단위
                    </td>
                    <td>
                        <select></select>
                    </td>
                </tr>
                <tr>
                    <td>
                        적정재고
                    </td>
                    <td>
                        <input type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        단가
                    </td>
                    <td>
                        <input type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        비고
                    </td>
                    <td>
                        <input type="text"/>
                    </td>
                </tr>
            </table>
            <button style={{marginTop: "5%"}} onClick={ onClickRegistHandler }>등록</button>
        </div>
    )
}

export default ProductRegist;