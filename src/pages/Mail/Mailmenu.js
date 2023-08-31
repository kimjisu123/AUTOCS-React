import styles from './Mail.module.css';
import { Link , Outlet, Navigate } from "react-router-dom";
import { useState } from 'react';
import MailSend from './MailSend'
import { decodeJwt } from '../../util/tokenUtils';

const accessToken = window.localStorage.getItem('accessToken');
const decodedToken = accessToken ? decodeJwt(accessToken) : null;


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
            <Link to="/mail"> <div className={styles.receivedMail}>받은 편지</div> </Link>
            <Link to={`/mailSent/${decodedToken.EmployeeNo}`}><div className={styles.sentMail}>보낸 편지</div></Link>
            <Link to="/mailBookmark" > <div className={styles.mailBookMark}>즐겨찾기</div></Link>
            <div style={ modal ? {display:"inline"} : {display: "none"} }>
                <MailSend setModal = { setModal } />
            </div>
        </div>
    )
}
export default Mailmenu;