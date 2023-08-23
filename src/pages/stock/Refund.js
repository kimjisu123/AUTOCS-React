import StockCSS from './Stock.module.css'

function showPopup() { window.open('/ListPopup', "a", "width=400, height=600, left=100, top=50"); }

function Refund() {

    const onClickOrderHandler= () => {
        alert('신청하시겠습니까?');
    }

    return(
        <div>
            <div className={StockCSS.headLine}>반품신청</div>
            <table className={StockCSS.stockTable}>
                <tr>
                    <td>
                        거래번호
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}  type="text" readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>
                        품목명
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}  type="text" readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>
                        규격
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}  type="text" readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>
                        단위
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}  type="text" readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>
                        기존수량
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}  type="text" readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>
                        반품수량
                    </td>
                    <td>
                        <input type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        사유
                    </td>
                    <td>
                        <select>
                            <option value="1">품질불량</option>
                            <option value="2">배송상태불량</option>
                            <option value="3">오배송</option>
                        </select>
                    </td>
                </tr>
            </table>
            <button style={{marginTop: "5%"}} onClick={ onClickOrderHandler }>신청</button>
        </div>
    )
}

export default Refund;