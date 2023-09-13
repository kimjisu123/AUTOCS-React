import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
    callOrderRegistAPI,
    callLastOrderAPI,
    callOrderUpdateAPI,
    callOrderProductRegistAPI,
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
        // storeInfoNo: decodedToken.StoreNo
    });

    // 페이지 로드되면 자동으로 주문번호 생성
    useEffect(() => {
        dispatch(callOrderRegistAPI({}))
        dispatch(callLastOrderAPI());
    },[]);

    /* 마지막 주문번호 조회 함수 */
    const lastOrderNo = useSelector(state => state.orderNumberReducer);
    const storeNo = parseInt(decodedToken.StoreNo, 10)
    console.log(lastOrderNo);
    console.log('정보',parseInt(decodedToken.StoreNo, 10))

    const [orderItems, setOrderItems] = useState([]); // 주문된 물품들을 저장하는 배열


    /* 주문물품 등록 및 주문상태 업데이트 */
    const onClickRegistHandler = async () => {
        const confirmed = window.confirm('신청하시겠습니까?');
        if (confirmed) {

            // 주문상태 업데이트
            const formData = new FormData();
            formData.append("orderNo", lastOrderNo);
            formData.append("storeInfoNo", storeNo);
            formData.append("status", "Y");

            dispatch(callOrderUpdateAPI({
                form: formData
            }));

            // 테이블에서 첫 번째와 네 번째 td 요소를 배열에 담기
            const table = document.getElementById("orderTable");
            const trElements = table.querySelectorAll("tr");
            const tdArray = [];

            trElements.forEach((tr) => {
                const tdElements = tr.querySelectorAll("td");
                if (tdElements.length >= 4) {
                    const refProductNo = tdElements[0].textContent;
                    const quantity = tdElements[3].textContent;
                    tdArray.push({ refProductNo, quantity });
                }
            });


            // 주문된 물품 업데이트
            for (const item of tdArray) {
                const itemFormData = new FormData();
                itemFormData.append('refOrderNo', lastOrderNo);
                itemFormData.append('refProductNo', item.refProductNo); // 물품 코드 또는 ID
                itemFormData.append('quantity', item.quantity);

                dispatch(
                    callOrderProductRegistAPI({
                        form: itemFormData,
                    })
                );

                alert('신청되었습니다. 주문번호: ' + lastOrderNo);
                navigate('/stock/order', {replace: true});
                window.location.reload();
            }


        }        else {
            alert('취소되었습니다.');
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
        button.onclick= onClickRemoveHandler;

        const newRow = document.createElement("tr");
        const codeCell = document.createElement("td");
        const nameCell = document.createElement("td");
        const priceCell = document.createElement("td");
        const quantityCell = document.createElement("td");
        const deleteButton = document.createElement("td");

        codeCell.textContent = parentCodeValue;
        nameCell.textContent = parentNameValue;
        priceCell.textContent = parentPriceValue.toLocaleString();
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
    const onClickRemoveHandler = (e, index) => {
        const trElement = e.target.closest("tr");

        if (trElement) {
            trElement.parentNode.removeChild(trElement);
        }

    };


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