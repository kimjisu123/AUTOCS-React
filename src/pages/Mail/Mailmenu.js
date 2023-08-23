import styles from './Mail.module.css';
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import MailSend from './MailSend'

function Mailmenu({children}){  
    const [modal, setModal] = useState(false);

    
    const onClickModal = () => {
        setModal(!modal);
    }

    return (
        <div className={styles.menubar}>
            <div onClick={ onClickModal } className={styles.newApp}>쪽지쓰기</div>
            <div className={styles.documentForm}>
                쪽지함
            </div>
            <div className={styles.receivedMail}>받은 편지</div>
            <div className={styles.sentMail}>보낸 편지</div>
            <div className={styles.mailBookMark}>즐겨찾기</div>
            <div style={ modal ? {display:"inline"} : {display: "none"} }>
                <MailSend setModal = { setModal } />
            </div>
        </div>
    )
}
export default Mailmenu;