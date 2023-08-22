import styles from './Department.module.css';
function DepartmentContent (){
    return (
        <div className={styles.content}>
            <div className={styles.contentsbox}>
                <div>
                    <div>
                        <div className={styles.contentHeader}>
                            부서 근태 통계
                        </div>
                        <div className={styles.today}>
                        {'<'} 2023-08-20 {'>'}
                        </div>
                    </div>

                    <div className={styles.downloadHeader} style={{display: "flex"}}>
                        <div className={styles.download}>
                            목록 다운로드
                        </div>
                        <div className={styles.print} style={{margin:"0px 40px"}}>
                            인쇄
                        </div>
                    </div>

                    <div className={styles.statusContainer}>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                출근 미체크
                            </div>
                            <div className={styles.statusValue}>
                                50
                            </div>
                        </div>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                늦은 출근
                            </div>
                            <div className={styles.statusValue}>
                                3
                            </div>
                        </div>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                결근
                            </div>
                            <div className={styles.statusValue}>
                                50
                            </div>
                        </div>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                휴가
                            </div>
                            <div className={styles.statusValue}>
                                2
                            </div>
                        </div>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                퇴근 미체크
                            </div>
                            <div className={styles.statusValue}>
                                53
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.weekStatus} style={{marginTop: "30px"}}>
                            <form style={{display: "flex", justifyContent:"flex-start"}}>
                                <div className={styles.type}> 부서원</div>
                                <input type="text" className={styles.inputText} />
                                <input type="submit" value="검색" className={styles.inputButton} />
                            </form>
                            <select className={styles.selectBox} name="10">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="40">40</option>
                                <option value="60">60</option>
                            </select>
                        </div>
                        <div className={styles.infoHeader} style={{marginTop:"30px"}}>
                            <div className={styles.statusInfoBox1}>
                                부서원
                            </div>
                            <div className={styles.statusInfoBox2}>
                                부서명
                            </div>
                            <div className={styles.statusInfoBox3}>
                                날짜
                            </div>
                            <div className={styles.statusInfoBox4}>
                                출근
                            </div>
                            <div className={styles.statusInfoBox5}>
                                퇴근
                            </div>
                            <div className={styles.statusInfoBox6}>
                                결근
                            </div>
                            <div className={styles.statusInfoBox7}>
                                휴가
                            </div>
                        </div>
                        <div className={styles.infoContent}>
                            <div className={styles.statusInfoBox1}>
                                김지수
                            </div>
                            <div className={styles.statusInfoBox2}>
                                인사부
                            </div>
                            <div className={styles.statusInfoBox3}>
                                2023-07-23
                            </div>
                            <div className={styles.statusInfoBox4}>
                                08:31:23
                            </div>
                            <div className={styles.statusInfoBox5}>
                                미등록
                            </div>
                        </div>
                        <div className={styles.infoContent}>
                            <div className={styles.statusInfoBox1}>
                                김지수
                            </div>
                            <div className={styles.statusInfoBox2}>
                                영업부1
                            </div>
                            <div className={styles.statusInfoBox3}>
                                2023-07-23
                            </div>
                            <div className={styles.statusInfoBox4}>
                                08:11:49
                            </div>
                            <div className={styles.statusInfoBox5}>
                                미등록
                            </div>
                            <div className={styles.statusInfoBox6}>

                            </div>
                            <div className={styles.statusInfoBox7}>
                                Y
                            </div>
                        </div>
                        <div className={styles.infoContent}>
                            <div className={styles.statusInfoBox1}>
                                김지수
                            </div>
                            <div className={styles.statusInfoBox2}>
                                영업부2
                            </div>
                            <div className={styles.statusInfoBox3}>
                                2023-07-23
                            </div>
                            <div className={styles.statusInfoBox4}>
                                07:53:21
                            </div>
                            <div className={styles.statusInfoBox5}>
                                미등록
                            </div>
                            <div className={styles.statusInfoBox6}>
                                Y
                            </div>
                            <div className={styles.statusInfoBox7}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DepartmentContent;