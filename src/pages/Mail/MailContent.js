import styles from './Mail.module.css';
function MailContent(){
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

            <div class="modal">

                <div class="xbtn">
                    <div class="x">X</div>
                </div>
                <div class="modalContent">
                    <h1>공지사항 제목</h1>
                    <div class="reportTitle">
                        <div class="reportitle"></div>
                    </div>
                    <h3>공지사항 내용</h3>
                    <div class="inputText">
                        <div class="reportReason"></div>
                    </div>
                        <div class="modalbot">
                    </div>
                </div>
                
            </div>

        </div>
    )
}
export default  MailContent;