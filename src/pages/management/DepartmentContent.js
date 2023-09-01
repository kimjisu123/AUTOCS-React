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
                </div>
            </div>
        </div>
    )
}
export default DepartmentContent;