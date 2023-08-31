import styles from './Mail.module.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { callGetMailAPI, callDELETEMailAPI, callPutMailAPI, callGetMailBookmarkAPI } from '../../apis/MailAPICalls';
import { useDispatch, useSelector } from 'react-redux';
import { decodeJwt } from '../../util/tokenUtils';

function MailBookmarkContent(){

    const dispatch = useDispatch();
    const mailData = useSelector(state => state.bookmarkReducer);

    const onClickMailDelete = async () =>{
        dispatch( callDELETEMailAPI() );
        window.location.reload();
        alert('성공적으로 삭제가 되었습니다!')
    }

    useEffect(
        () =>  {
            dispatch( callGetMailBookmarkAPI() );
        }
        ,[]
    );

    return(
        <div className={styles.content}>
            <div className={styles.mainHeader}>
                <div className={styles.contentHeader}>
                    즐겨찾기
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
                    <BookmarkItem key={mail.mailNo} mail={mail} />
                ))}

                { console.log(mailData.data)}
            </div>
        </div>
    )
}

function BookmarkItem({ mail }) {

    const [bookmark, setBookmark] = useState(mail.status);

    const dispatch = useDispatch();
    const mailData = useSelector(state => state.bookmarkReducer);

    const onClickbookmark = () => {
        dispatch( callPutMailAPI(mail) );
        setBookmark( (bookmark == 'Y') ? 'N' : 'Y' );
        window.location.reload();
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
                        {mail.receiver}
                    </div>
                </div>
            </div>
            <div className={styles.deleteButton}>
                x
            </div>
        </div>
    );
}
export default  MailBookmarkContent