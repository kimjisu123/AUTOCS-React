import styles from './Mail.module.css';

function Mailmenu(){
    return (
        <div className={styles.menubar}>
            <div className={styles.newApp}>쪽지쓰기</div>
            <div className={styles.documentForm}>
                쪽지함
            </div>
            <div className={styles.receivedMail}>받은 편지</div>
            <div className={styles.sentMail}>보낸 편지</div>
            <div className={styles.bookmark}>즐겨찾기</div>
        </div>
    )
}
export default Mailmenu;