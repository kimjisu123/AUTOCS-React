import styles from './approval.module.css'
import pay from "./PayContent.module.css";

function PayAddRow ({index, value, onChangeInput}) {



    return (
        <>
            <tr key={index} className={pay.tr1}>
                <td className={pay.td}><input type="date" name="payDate" id={pay.payDate}/></td>
                <td className={pay.td}><input type="text" name="payReason" id={pay.payReason}/></td>
                <td className={pay.td}><input type="number" name="payPrice" id={pay.payPrice}  onChange={e => onChangeInput('payPrice', e.target.value)}/></td>
            </tr>
        </>
    )
}

export default PayAddRow;