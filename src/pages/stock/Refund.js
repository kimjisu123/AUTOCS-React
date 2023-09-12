import StockCSS from './Stock.module.css'
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
    callMyOrderProductForRefundAPI,
    callOrderProductRegistAPI, callOrderProductUpdateAPI,
} from '../../apis/StockAPICalls'
import refundReducer from "../../modules/RefundModule";

function Refund() {

    /********************************************************************/
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // 파라미터에서 주문번호 받음
    const { myOrderProductNo } = useParams();

    // 조회
    const [orderProductInfo, setOrderProductInfo] = useState({});
    const orderProduct= useSelector(state => state.refundReducer);


    // 주문물품 조회
    useEffect(
        () => {
            dispatch(callMyOrderProductForRefundAPI({
                    myOrderProductNo: myOrderProductNo
            }
            ));
            setOrderProductInfo(orderProduct);
        }
        ,[]
    );


    console.log(orderProduct)

    // 등록
    const [form, setForm] = useState({
        refOrderNo: '',
        refProductNo: '',
        quantity: '',
        status: '',
        etc: '품질불량',
    });

    // form 데이터 세팅
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    /* 반품물품 등록 */
    const onClickRegistHandler = async () => {
        const confirmed = window.confirm('신청하시겠습니까?');
        if (confirmed) {

            const formData = new FormData();
            formData.append("refOrderNo", orderProduct.refOrderNo?.orderNo);
            formData.append("refProductNo", orderProduct.refProductNo.productNo);
            formData.append("quantity", (form.quantity)* (-1));
            formData.append("etc", form.etc);

            dispatch(callOrderProductRegistAPI({
                form: formData
            }));

            const ModifyFormData = new FormData();
            ModifyFormData.append("orderProductNo", orderProduct.orderProductNo);
            ModifyFormData.append("status", 'REFUND');

            dispatch(callOrderProductUpdateAPI({
                form: ModifyFormData
            }));


            alert('신청되었습니다.');
            // navigate('/stock/order', {replace: true});
            window.location.reload();
            }
            else {
            alert('취소되었습니다.');
        }
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
                               value={orderProduct.refOrderNo?.orderNo}
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
                               value={orderProduct.refProductNo?.name}
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
                               value={orderProduct.refProductNo?.standard?.name}
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
                               value={orderProduct.refProductNo?.unit?.name}
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
                               value={orderProduct?.quantity}
                               readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>
                        반품수량
                    </td>
                    <td>
                        <input type="text"
                        name="quantity"
                        onChange={onChangeHandler}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        사유
                    </td>
                    <td>
                        <select name="etc" onChange={onChangeHandler}>
                            <option value="품질불량">품질불량</option>
                            <option value="배송상태불량">배송상태불량</option>
                            <option value="오배송">오배송</option>
                        </select>
                    </td>
                </tr>
            </table>
            <button style={{marginTop: "5%"}} onClick={ onClickRegistHandler }>신청</button>
        </div>
    )
}

export default Refund;