import styles from './Mail.module.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { callGetMailAPI, callDELETEMailAPI, callPutMailAPI } from '../../apis/MailAPICalls';
import { useDispatch, useSelector } from 'react-redux';

function MailContent(){

    const dispatch = useDispatch();
    const mailData = useSelector(state => state.mailReducer);

    const onClickMailDelete = async () =>{
        dispatch( callDELETEMailAPI() );
        window.location.reload();
        alert('성공적으로 삭제가 되었습니다!')
    }

    useEffect(
        () =>  {
            dispatch( callGetMailAPI() );
        }
        ,[]
    );

    return(
        <div className={styles.content}>
            <div className={styles.mainHeader}>
                <div className={styles.contentHeader}>
                    받은 쪽지
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

            <div>
                {mailData.data && mailData.data.map(mail => (
                    <MailItem key={mail.id} mail={mail} />
                ))}
            </div>
        </div>
    )
}

function MailItem({ mail }) {

    const [bookmark, setBookmark] = useState(mail.status);

    const dispatch = useDispatch();
    const mailData = useSelector(state => state.mailReducer);

    const onClickbookmark = async () => {
        await dispatch( callPutMailAPI(mail) );
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
export default  MailContent;