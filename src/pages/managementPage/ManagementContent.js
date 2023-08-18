import styles from "./Management.module.css";
function ManagementContent (){

    return (
        <>
            <div className={styles.content}>
                <div>
                    <div>
                        <div className={styles.contentHeader}>
                            근태 현황
                        </div>
                        <div className={styles.today}>
                             오늘 일자
                        </div>
                    </div>

                    <div className={styles.download} style={{display: "flex"}}>
                        <div>
                            목록 다운로드
                        </div>
                        <div style={{margin:"0px 40px"}}>
                            인쇄
                        </div>
                    </div>
                    <div className={styles.statusContainer}>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                이번주 누적 근로 시간
                            </div>
                            <div className={styles.statusTime}>
                                시간~
                            </div>
                        </div>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                이번주 연장 근로 시간
                            </div>
                            <div className={styles.statusTime}>
                                시간~
                            </div>
                        </div>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                이번주 잔여 시간
                            </div>
                            <div className={styles.statusTime}>
                                시간~
                            </div>
                        </div>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                이번주 누적 근로 시간
                            </div>
                            <div className={styles.statusTime}>
                                시간~
                            </div>
                        </div>
                        <div className={styles.statusBox}>
                            <div className={styles.statusContent}>
                                이번달 연장 근로 시간
                            </div>
                            <div className={styles.statusTime}>
                                시간~
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.weekStatus} style={{marginTop: '30px'}}>
                            <div className={styles.weeks}>
                                1주차
                            </div>
                            <div className={styles.totalTime}>
                                <div>
                                    누적 근로시간
                                </div>
                                <div>
                                    (누적 근로 시간)
                                </div>
                            </div>
                        </div>
                        <div className={styles.infoHeader}>
                            <div className={styles.statusInfoBox1}>
                                일자
                            </div>
                            <div className={styles.statusInfoBox2}>
                                업무 시작
                            </div>
                            <div className={styles.statusInfoBox3}>
                                업무 종료
                            </div>
                            <div className={styles.statusInfoBox4}>
                                총 근무 시간
                            </div>
                            <div className={styles.statusInfoBox5}>
                                근무 시간 상세
                            </div>
                        </div>
                        <div className={styles.infoContent}>
                            <div className={styles.statusInfoBox1}>
                                31(월)
                            </div>
                            <div className={styles.statusInfoBox2}>
                                09:32:42
                            </div>
                            <div className={styles.statusInfoBox3}>
                                17:54:58
                            </div>
                            <div className={styles.statusInfoBox4}>
                                30 1h 11m 16s
                            </div>
                            <div className={styles.statusInfoBox5}>
                                기본 30h 11m 16s / 연장 0h 0m 0s
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.weekStatus} style={{marginTop: '15px'}}>
                            <div className={styles.weeks}>
                                2주차
                            </div>
                            <div className={styles.totalTime}>
                                <div>
                                    누적 근로시간
                                </div>
                                <div>
                                    (누적 근로 시간)
                                </div>
                            </div>
                        </div>
                        <div className={styles.infoHeader}>
                            <div className={styles.statusInfoBox1}>
                                일자
                            </div>
                            <div className={styles.statusInfoBox2}>
                                업무 시작
                            </div>
                            <div className={styles.statusInfoBox3}>
                                업무 종료
                            </div>
                            <div className={styles.statusInfoBox4}>
                                총 근무 시간
                            </div>
                            <div className={styles.statusInfoBox5}>
                                근무 시간 상세
                            </div>
                        </div>
                        <div className={styles.infoContent}>
                            <div className={styles.statusInfoBox1}>
                                31(월)
                            </div>
                            <div className={styles.statusInfoBox2}>
                                09:32:42
                            </div>
                            <div className={styles.statusInfoBox3}>
                                17:54:58
                            </div>
                            <div className={styles.statusInfoBox4}>
                                30 1h 11m 16s
                            </div>
                            <div className={styles.statusInfoBox5}>
                                기본 30h 11m 16s / 연장 0h 0m 0s
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.weekStatus}>
                            <div className={styles.weeks}>
                                3주차
                            </div>
                            <div className={styles.totalTime}>
                                <div>
                                    누적 근로시간
                                </div>
                                <div>
                                    (누적 근로 시간)
                                </div>
                            </div>
                        </div>
                        <div className={styles.infoHeader}>
                            <div className={styles.statusInfoBox1}>
                                일자
                            </div>
                            <div className={styles.statusInfoBox2}>
                                업무 시작
                            </div>
                            <div className={styles.statusInfoBox3}>
                                업무 종료
                            </div>
                            <div className={styles.statusInfoBox4}>
                                총 근무 시간
                            </div>
                            <div className={styles.statusInfoBox5}>
                                근무 시간 상세
                            </div>
                        </div>
                        <div className={styles.infoContent}>
                            <div className={styles.statusInfoBox1}>
                                31(월)
                            </div>
                            <div className={styles.statusInfoBox2}>
                                09:32:42
                            </div>
                            <div className={styles.statusInfoBox3}>
                                17:54:58
                            </div>
                            <div className={styles.statusInfoBox4}>
                                30 1h 11m 16s
                            </div>
                            <div className={styles.statusInfoBox5}>
                                기본 30h 11m 16s / 연장 0h 0m 0s
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.weekStatus} style={{marginTop: '15px'}}>
                            <div className={styles.weeks}>
                                4주차
                            </div>
                            <div className={styles.totalTime}>
                                <div>
                                    누적 근로시간
                                </div>
                                <div>
                                    (누적 근로 시간)
                                </div>
                            </div>
                        </div>
                        <div className={styles.infoHeader}>
                            <div className={styles.statusInfoBox1}>
                                일자
                            </div>
                            <div className={styles.statusInfoBox2}>
                                업무 시작
                            </div>
                            <div className={styles.statusInfoBox3}>
                                업무 종료
                            </div>
                            <div className={styles.statusInfoBox4}>
                                총 근무 시간
                            </div>
                            <div className={styles.statusInfoBox5}>
                                근무 시간 상세
                            </div>
                        </div>
                        <div className={styles.infoContent}>
                            <div className={styles.statusInfoBox1}>
                                31(월)
                            </div>
                            <div className={styles.statusInfoBox2}>
                                09:32:42
                            </div>
                            <div className={styles.statusInfoBox3}>
                                17:54:58
                            </div>
                            <div className={styles.statusInfoBox4}>
                                30 1h 11m 16s
                            </div>
                            <div className={styles.statusInfoBox5}>
                                기본 30h 11m 16s / 연장 0h 0m 0s
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManagementContent;