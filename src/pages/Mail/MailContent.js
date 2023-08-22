import styles from './Mail.module.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
function MailContent(){

    const { result, setResult } = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/mail')
            .then(response => {
                setResult(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },[])


    return(
        <div className={styles.content}>
            <div className={styles.mainHeader}>
                <div className={styles.contentHeader}>
                    받은 쪽지
                </div>
                <div className={styles.allDelete}>
                    전체 삭제
                </div>
                <form style={{display: "flex", justifyContent:"flex-start"}}>
                    <div className={styles.type}> 제목</div>
                    <input type="text" className={styles.inputText}/>
                    <input type="submit" value="검색" className={styles.inputButton}/>
                </form>
            </div>

            <div className={styles.receivedNote}>
                <div className={styles.bookmark}>
                    ☆
                </div>
                <div className={styles.noteHeader}>
                    <div style={{marginBottom: "5px"}}>
                        [알림] '마장웅 상무'이(가) 작성한 '합의 테스트'이(가) 완료되었습니다. (쪽지 제목)
                    </div>
                    <div style={{display: "flex"}}>
                        <div style={{color: "gray"}}>
                            08-09 17:11
                        </div>
                        <div style={{marginLeft: "15px"}}>
                            보낸 사람
                        </div>
                    </div>
                </div>
                <div className={styles.deleteButton}>
                    x
                </div>
            </div>

        </div>
    )
}
export default  MailContent;