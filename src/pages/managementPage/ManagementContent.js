import styles from "./Management.module.css";
import React,{useState} from 'react';

function ManagementContent (){

    const [isOpen1, setIsOpen1] = useState(true); 
    const [isOpen2, setIsOpen2] = useState(true); 
    const [isOpen3, setIsOpen3] = useState(true); 
    const [isOpen4, setIsOpen4] = useState(true); 

    const toggleMenu1 = () => {
        setIsOpen1(isOpen1 => !isOpen1); 
    }
    const toggleMenu2 = () => {
        setIsOpen2(isOpen2 => !isOpen2); 
    }
    const toggleMenu3 = () => {
        setIsOpen3(isOpen3 => !isOpen3); 
    }
    const toggleMenu4 = () => {
        setIsOpen4(isOpen4 => !isOpen4); 
    }

    return (
        <>
            <div className={styles.content}>
                <div>
                    <div>
                        <div className={styles.contentHeader}>
                            근태 현황
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
                        <div onClick={toggleMenu1} className={styles.weekStatus} style={{marginTop: '30px'}}>
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
                        <div className={styles.infoContent} style={isOpen1?{}:{display:"none"}}>
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
                        <div onClick={toggleMenu2} className={styles.weekStatus} style={{marginTop: '15px'}}>
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
                        <div className={styles.infoContent} style={isOpen2?{display:"none"}:{}}>
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
                        <div onClick={toggleMenu3} className={styles.weekStatus}>
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
                        <div className={styles.infoContent} style={isOpen3?{display:"none"}:{}}>
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
                        <div onClick={toggleMenu4} className={styles.weekStatus} style={{marginTop: '15px'}}>
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
                        <div className={styles.infoContent} style={isOpen4?{display:"none"}:{}}>
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