import styles from "../Mail/MailDetails.module.css";


function CalendarModal({setModal}){

    const onClickClose = () =>{
        setModal(false)
    }

    return (
        <div className={styles.modalTitle}>
            <div className={styles.modalContent}>
                <h1 className={styles.title}>
                    hi
                </h1>
                <h1 onClick={onClickClose} className={styles.close}>
                    x
                </h1>
            </div>
            <div className={styles.content}>
                hi
            </div>
        </div>

    )

}

export default CalendarModal;