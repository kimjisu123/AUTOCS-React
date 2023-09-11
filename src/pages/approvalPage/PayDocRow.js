import pay from "./PayContent.module.css";

function PayAddRow ({payData}) {



    return (
        <>
            <tr key={payData.billingCode} className={pay.tr1}>
                <td className={pay.td}>{payData.day}</td>
                <td className={pay.td}>{payData.business}</td>
                <td className={pay.td}>{payData.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</td>
            </tr>
        </>
    )
}

export default PayAddRow;