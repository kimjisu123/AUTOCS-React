import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
    callOrderListAPI,
    callOrderRegistAPI,
    callLastOrderAPI,
} from '../../apis/StockAPICalls'
import {decodeJwt} from "../../util/tokenUtils";

function showPopup()
{ window.open('/ListPopup', "a", "width=420, height=800, left=100, top=50");
    document.getElementById( "parentCodeValue" ).value = '';
    document.getElementById( "parentNameValue" ).value = '';
    document.getElementById( "parentStandardValue" ).value = '';
    document.getElementById( "parentUnitValue" ).value = '';
    document.getElementById( "parentPriceValue" ).value = '';
    document.getElementById( "orderQuantity" ).value = '';
}

    function Order() {

    /********************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;

    // 주문번호 등록
    const [form, setForm] = useState({
        storeInfoNo: decodedToken.StoreNo
    });

    // 페이지 로드되면 자동으로 주문번호 생성
    useEffect(() => {
        dispatch(callOrderRegistAPI({}))
        dispatch(callLastOrderAPI());
    },[]);

    /* 마지막 주문번호 조회 함수 */
    const lastOrderNo = useSelector(state => state.orderReducer);
    console.log(lastOrderNo);



    /* 물품 등록 */
    const onClickRegistHandler = async () => {
        const confirmed = window.confirm('등록하시겠습니까?');
        if (confirmed) {

            // const formData = new FormData();
            // formData.append("storeInfoNo", decodedToken.StoreNo);
            // dispatch(callOrderRegistAPI({
            //     form: formData
            // }));


            // 마지막 주문번호 조회
            // dispatch(callLastOrderAPI());
            // const lastOrderNo = useSelector(state => state.orderReducer);

            alert('등록되었습니다. 마지막 주문번호: ' + lastOrderNo);
            // navigate('/stock/productregist', {replace: true});
            // window.location.reload();
        }
    }

    /* 주문물품 추가 핸들러 */
    const onClickAddHandler = () => {
        const parentCodeValue = document.getElementById("parentCodeValue").value;
        const parentNameValue = document.getElementById("parentNameValue").value;
        const parentPriceValue = document.getElementById("parentPriceValue").value;
        const orderQuantity = document.getElementById("orderQuantity").value;
        const button =  document.createElement("button");
        button.textContent="삭제";
        button.onclick=onClickRemoveHandler;

        const newRow = document.createElement("tr");
        const codeCell = document.createElement("td");
        const nameCell = document.createElement("td");
        const priceCell = document.createElement("td");
        const quantityCell = document.createElement("td");
        const deleteButton = document.createElement("td");

        codeCell.textContent = parentCodeValue;
        nameCell.textContent = parentNameValue;
        priceCell.textContent = parentPriceValue;
        quantityCell.textContent = orderQuantity;
        deleteButton.appendChild(button);

        newRow.appendChild(codeCell);
        newRow.appendChild(nameCell);
        newRow.appendChild(priceCell);
        newRow.appendChild(quantityCell);
        newRow.appendChild(deleteButton);

        document.getElementById("orderTable").appendChild(newRow);
    }

    /* 행삭제 핸들러*/
    const onClickRemoveHandler = (e) => {
        const trElement = e.target.closest("tr");

        if (trElement) {
            trElement.parentNode.removeChild(trElement);
        }
    }

    /********************************************************************/

    return(
        <div>
            <div className={StockCSS.headLine}>발주 신청</div>
            <div style={{display: "flex"}}>
                <div>
                    <table className={StockCSS.stockTable}>
                        <tr>
                            <td>
                                품목명
                            </td>
                            <td>
                                <input className={StockCSS.readOnlybox}
                                       type="text"
                                       id="parentNameValue"
                                       placeholder="품목명을 조회하세요"
                                       readOnly/>
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
                                <input className={StockCSS.readOnlybox}
                                       type="text"
                                       id="parentCodeValue"
                                       readOnly/>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                규격
                            </td>
                            <td>
                                <input className={StockCSS.readOnlybox}
                                       type="text"
                                       id="parentStandardValue"
                                       readOnly/>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                단위
                            </td>
                            <td>
                                <input className={StockCSS.readOnlybox}
                                       type="text"
                                       id="parentUnitValue"
                                       readOnly/>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                가격
                            </td>
                            <td>
                                <input className={StockCSS.readOnlybox}
                                       type="text"
                                       id="parentPriceValue"
                                       readOnly/>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                수량입력
                            </td>
                            <td>
                                <input type="text"
                                id="orderQuantity"/>
                            </td>
                            <td>
                            </td>
                        </tr>

                    </table>
                    <div style={{visibility: "none"}}>
                        <input style={{display: "none"}} type="text" id="parentStockValue"/>
                        <input style={{display: "none"}} type="text" id="parentPriceValue"/>
                    </div>
                    <button onClick={onClickAddHandler}>추가</button>
                </div>
                <div style={{width: "400px", marginLeft: "10%"}}>
                    <table className={StockCSS.stockTable} id="orderTable">
                        <th>CODE</th>
                        <th>품목</th>
                        <th>가격</th>
                        <th>수량</th>
                        <th>삭제</th>
                    </table>
                    <button style={{marginTop: "5%"}} onClick={ onClickRegistHandler }>신청</button>
                </div>
            </div>
        </div>
    )
}

export default Order;