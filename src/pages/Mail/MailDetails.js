import styles from "../Mail/MailDetails.module.css";
import { useState } from 'react';

function MailDetails( { setModal, mail } ){
    const onClickClose = () =>{
        setModal(false)
    }

    return (
        <div className={styles.modalTitle}>
            <div className={styles.modalContent}>
                <h1 className={styles.title}>
                    {mail.title}
                </h1>
                <h1 onClick={onClickClose} className={styles.close}>
                    x
                </h1>
            </div>
            <div className={styles.content}>
                {mail.context}
            </div>
        </div>
           
    )
}
export default MailDetails;