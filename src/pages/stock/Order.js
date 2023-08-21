import StockCSS from './Stock.module.css'

function showPopup() { window.open('/ListPopup', "a", "width=400, height=600, left=100, top=50"); }

function Order() {

    const onClickOrderHandler= () => {
        alert('신청하시겠습니까?');
    }

    return(
        <div>
            <div className={StockCSS.headLine}>발주 신청</div>
            <div style={{display: "flex"}}>
                <div>
                    <table>
                        <tr>
                            <td>
                                품목명
                            </td>
                            <td>
                                <input type="text" placeholder="품목명을 조회하세요" readOnly/>
                            </td>
                            <td>
                                <button onClick={()=> showPopup()}>조회</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                CODE
                            </td>
                            <td>
                                <input className={StockCSS.readOnlybox}  type="text" readOnly/>
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
                                수량입력
                            </td>
                            <td>
                                <input type="text"/>
                            </td>
                            <td>
                            </td>
                        </tr>
                    </table>
                    <button style={{marginTop: "5%"}}>추가</button>
                </div>
                <div style={{width: "400px", marginLeft: "10%"}}>
                    <table>
                        <th>품목</th>
                        <th>수량</th>
                        <th>삭제</th>

                        <tr>
                            <td>밀가루</td>
                            <td>5</td>
                            <td><button>삭제</button></td>
                        </tr>
                    </table>
                    <button style={{marginTop: "5%"}} onClick={ onClickOrderHandler }>신청</button>
                </div>
            </div>
        </div>
    )
}

export default Order;