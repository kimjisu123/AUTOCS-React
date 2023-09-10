import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
    callMyOrderProductForRefundAPI,
} from '../../apis/StockAPICalls'
import refundReducer from "../../modules/RefundModule";

function Refund() {

    /********************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // 파라미터에서 주문번호 받음
    const { myOrderProductNo } = useParams();

    console.log(myOrderProductNo)


    // 주문물품 조회
    // useEffect(
    //     () => {
            dispatch(callMyOrderProductForRefundAPI({
                    myOrderProductNo: myOrderProductNo
            }
            ));
    //     }
    //     ,[myOrderProductNo]
    // );

    // 조회
    const orderProduct= useSelector(state => state.refundReducer);

    console.log(orderProduct)


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
                        <input className={StockCSS.readOnlybox}
                               type="text"
                               // value={orderProduct.refOrderNo.orderNo}
                               readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>
                        품목명
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}
                               type="text"
                               // value={orderProduct.refProductNo.name}
                               readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>
                        규격
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}
                               type="text"
                               // value={orderProduct.refProductNo.standard.name}
                               readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>
                        단위
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}
                               type="text"
                               // value={orderProduct.refProductNo.unit.name}
                               readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>
                        기존수량
                    </td>
                    <td>
                        <input className={StockCSS.readOnlybox}
                               type="text"
                               // value={orderProduct.quantity}
                               readOnly/>
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