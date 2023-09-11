import styles from './approval.module.css'

function AddRow ({purchase}) {



    return (
        <>
            <tr key={purchase.purchaseRequestCode} className={styles.inputRow}>
                <td className={styles.td3}>{purchase.productName}</td>
                <td className={styles.td3}>{purchase.standard}</td>
                <td className={styles.td3}>{purchase.amount}</td>
                <td className={styles.td3}>{purchase.unitPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</td>
                <td className={styles.td3}>{(purchase.amount * purchase.unitPrice).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</td>
                <td className={styles.td3}>{purchase.remarks}</td>
            </tr>
        </>
    )
}

export default AddRow;