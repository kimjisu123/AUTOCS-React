import styles from './Mail.module.css';
import { useState, useEffect } from 'react'
import { callGetMailAPI, callDELETEMailAPI, callPutMailAPI, callGetMailBookmarkAPI, callGetMailSentAPI } from '../../apis/MailAPICalls';
import { useDispatch, useSelector } from 'react-redux';
import { decodeJwt } from '../../util/tokenUtils';

function MailkSentContent(){

    const dispatch = useDispatch();
    const mailData = useSelector(state => state.mailSentReducer);

    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;


    const onClickMailDelete = async () =>{
        dispatch( callDELETEMailAPI() );
        // window.location.reload();
        alert('성공적으로 삭제가 되었습니다!')
        console.log(decodedToken.EmployeeNo);
    }

    useEffect(
        () =>  {
            dispatch( callGetMailSentAPI({employeeNo: decodedToken.EmployeeNo}) );
        }
        ,[]
    );

    return(
        <div className={styles.content}>
            <div className={styles.mainHeader}>
                <div className={styles.contentHeader}>
                    보낸 쪽지
                </div>
                <div onClick={onClickMailDelete} className={styles.allDelete}>
                    전체 삭제
                </div>
                <form style={{display: "flex", justifyContent:"flex-start"}}>
                    <div className={styles.type}> 제목</div>
                    <input type="text" className={styles.inputText}/>
                    <input type="submit" value="검색" className={styles.inputButton}/>
                </form>
            </div>

            {/*<div>*/}
            {/*    {mailData.data && mailData.data.map(mail => (*/}
            {/*        <MailSentItem key={mail.mailNo} mail={mail} />*/}
            {/*    ))}*/}
            {/*    { console.log(mailData.data)}*/}
            {/*</div>*/}
        </div>
    )
}

function MailSentItem({ mail }) {

    const [bookmark, setBookmark] = useState(mail.status);

    const dispatch = useDispatch();

    const onClickbookmark = () => {
        dispatch( callPutMailAPI(mail) );
        setBookmark( (bookmark == 'Y') ? 'N' : 'Y' );
    };

    return (
        <div className={styles.receivedNote}>
            <div className={styles.bookmark} onClick={onClickbookmark}>
                {( bookmark == 'Y')  ? '★' : '☆'}
            </div>
            <div className={styles.noteHeader}>
                <div style={{ marginBottom: "5px" }}>
                    {mail.title}
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ color: "gray" }}>
                        {mail.goDate}
                    </div>
                    <div style={{ marginLeft: "15px" }}>
                        {mail.send}
                    </div>
                </div>
            </div>
            <div className={styles.deleteButton}>
                x
            </div>
        </div>
    );
}
export default  MailkSentContent