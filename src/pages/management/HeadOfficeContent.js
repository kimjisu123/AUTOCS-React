import styles from './HeadOffice.module.css'

const currentDate = new Date();
const year = currentDate.getFullYear();    // 현재 년 (2023)
const month = currentDate.getMonth() + 1;  // 현재 월
const day = currentDate.getDate();         // 현재 날짜(일)

const toDayDate ="<"+ year + "년 " + month + "월 " + day+"일" + ">";

function HeadOfficeContent(){
    return(
        <div className={styles.content}>
            <div className={styles.contentsbox}>
                <div>
                    <div>
                        <div className={styles.contentHeader}>
                            본사 근태 현황
                        </div>
                        <div className={styles.today}>
                            {toDayDate}
                        </div>
                    </div>
                    <div>
                        <div className={styles.weekStatus} style={{marginTop: "30px"}}>
                            <form style={{display:"flex", justifyContent:"flex-start"}}>
                                <div className={styles.type}> 부서원</div>
                                <input type="text" className={styles.inputText} />
                                <input type="submit" value="검색" className={styles.inputButton} />
                            </form>
                        </div>
                        <div className={styles.infoHeader}>
                            <div className={styles.statusInfoBox1}>
                                이름
                            </div>
                            <div className={styles.statusInfoBox2}>
                                누적 근무 시간
                            </div>
                            <div className={styles.statusInfoBox3}>
                                14(월)
                            </div>
                            <div className={styles.statusInfoBox4}>
                                15(화)
                            </div>
                            <div className={styles.statusInfoBox5}>
                                16(수)
                            </div>
                            <div className={styles.statusInfoBox6}>
                                17(목)
                            </div>
                            <div className={styles.statusInfoBox7}>
                                18(금)
                            </div>
                            <div className={styles.statusInfoBox8}>
                                19(토)
                            </div>
                            <div className={styles.statusInfoBox9}>
                                20(일)
                            </div>
                        </div>
                        <div className={styles.infoContent}>

                            <div className={styles.statusInfoBox1}>
                                <div>
                                    김지수
                                </div>
                                <div>
                                    인사팀 (대리)
                                </div>
                            </div>
                            <div className={styles.statusInfoBox2}>
                                <div className={styles.cumulativeTime}>
                                    10h 23m 21s
                                </div>
                                <div className={styles.hoursDuty}>
                                    <div>
                                        기본 : 2h 00m 00s
                                    </div>
                                    <div>
                                        연장 : 0h 00m 00s
                                    </div>
                                </div>
                            </div>
                            <div className={styles.statusInfoBox3}>
                                <div className={styles.cumulativeTime}>
                                    2h 00m 00s
                                </div>
                                <div className={styles.hoursDuty}>
                                    <div>
                                        기본 : 2h 00m 00s
                                    </div>
                                    <div>
                                        연장 : 0h 00m 00s
                                    </div>
                                </div>
                            </div>
                            <div className={styles.statusInfoBox4}>
                                <div className={styles.cumulativeTime}>
                                    2h 00m 00s
                                </div>
                                <div className={styles.hoursDuty}>
                                    <div>
                                        기본 : 2h 00m 00s
                                    </div>
                                    <div>
                                        연장 : 0h 00m 00s
                                    </div>
                                </div>
                            </div>
                            <div className={styles.statusInfoBox5}>
                                <div className={styles.cumulativeTime}>
                                    2h 00m 00s
                                </div>
                                <div className={styles.hoursDuty}>
                                    <div>
                                        기본 : 2h 00m 00s
                                    </div>
                                    <div>
                                        연장 : 0h 00m 00s
                                    </div>
                                </div>
                            </div>
                            <div className={styles.statusInfoBox6}>
                                <div className={styles.cumulativeTime}>
                                    2h 00m 00s
                                </div>
                                <div className={styles.hoursDuty}>
                                    <div>
                                        기본 : 2h 00m 00s
                                    </div>
                                    <div>
                                        연장 : 0h 00m 00s
                                    </div>
                                </div>
                            </div>
                            <div className={styles.statusInfoBox7}>
                                <div className={styles.cumulativeTime}>
                                    2h 00m 00s
                                </div>
                                <div className={styles.hoursDuty}>
                                    <div>
                                        기본 : 2h 00m 00s
                                    </div>
                                    <div>
                                        연장 : 0h 00m 00s
                                    </div>
                                </div>
                            </div>
                            <div className={styles.statusInfoBox8}>
                                <div className={styles.cumulativeTime}>
                                    2h 00m 00s
                                </div>
                                <div className={styles.hoursDuty}>
                                    <div>
                                        기본 : 2h 00m 00s
                                    </div>
                                    <div>
                                        연장 : 0h 00m 00s
                                    </div>
                                </div>
                            </div>
                            <div className={styles.statusInfoBox9}>
                                <div className={styles.cumulativeTime}>
                                    2h 00m 00s
                                </div>
                                <div className={styles.hoursDuty}>
                                    <div>
                                        기본 : 2h 00m 00s
                                    </div>
                                    <div>
                                        연장 : 0h 00m 00s
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadOfficeContent;