import StockCSS from './Stock.module.css'

function showPopup() { window.open('/ListPopup', "a", "width=400, height=600, left=100, top=50"); }

function StockIo() {

    const onClickRegistHandler= () => {
        alert('등록하시겠습니까?');
    }

    return (
        <div>
            <div className={StockCSS.headLine}>입고 폐기 등록</div>
            <table>
                <tr>
                    <td>
                        CODE
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox} type="text" placeholder="품목명을 조회하세요" readOnly/>
                    </td>
                    <td>
                        <button onClick={()=> showPopup()}>조회</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        품목명
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox} type="text" readOnly/>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                        규격
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox} type="text" readOnly/>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                        단위
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox} type="text" readOnly/>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                        적정재고
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox} type="text" readOnly/>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                        단가
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox} type="text" readOnly/>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                        입고/폐기 선택
                    </td>
                    <td>
                        <input type="radio" name="option" value="input"/> 입고
                        <input type="radio" name="option" value="output"/> 폐기
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                        수량
                    </td>
                    <td>
                        <input type="text"/>
                    </td>
                    <td>
                    </td>
                </tr>
            </table>
            <button style={{marginTop: "5%"}} onClick={ onClickRegistHandler }>등록</button>
        </div>
    )
}

export default StockIo;
