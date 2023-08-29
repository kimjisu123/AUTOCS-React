import styles from './approval.module.css';
import business from './Business.module.css';
import Tiny from './Tiny'
import Modal from './Modal'
import {useState} from "react";

function BusinessContent() {

    const [addPeople, setAddPeople] = useState(false);

    const showPeople = () => {
        setAddPeople(true);
    }

    return(
        <div className={styles.content}>
            <div className={styles.modify} onClick={showPeople}>
                결재선 추가
            </div>
            <div className={styles.area1}>업 무 보 고</div>
            <br/><br/>
            <div className={styles.area2}>
                <div className={styles.area3}>
                    <table className={styles.table3}>
                        <tbody>
                        <tr>
                            <td className={styles.td2}>작 성 자</td>
                            <td className={styles.td1}>박지호</td>
                        </tr>
                        <tr>
                            <td className={styles.td2}>소 속 부 서</td>
                            <td className={styles.td1}>영업 1부</td>
                        </tr>
                        <tr>
                            <td className={styles.td2}>작 성 날 짜</td>
                            <td className={styles.td1}>2023-08-15</td>
                        </tr>
                        <tr>
                            <td className={styles.td2}>문 서 번 호</td>
                            <td className={styles.td1}></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{display: "flex"}}>
                    <div className={styles.approve}>
                        <span className={styles.area4}>요청</span>
                        <span className={styles.area5} style={{marginRight: 20}}>
                            <div className={styles.area6}>사원</div>
                            <div className={styles.area7}>박지호</div>
                            <div className={styles.area8}></div>
                        </span>
                        <span className={styles.area4}>승인</span>
                        <span className={styles.area5}>
                            <div className={styles.area6}>팀장</div>
                            <div className={styles.area7}>유승제</div>
                            <div className={styles.area8}></div>
                        </span>
                        <span className={styles.area5}>
                            <div className={styles.area6}>이사</div>
                            <div className={styles.area7}>김마야</div>
                            <div className={styles.area8}></div>
                        </span>
                    </div>
                </div>
            </div>
            <br/><br/>
            <table className={business.table1}>
                <tbody>
                <tr className={business.tr}>
                    <td className={business.td2}>제목</td>
                    <td className={business.td1}>
                        <input type="text" name="businessTitle" id={business.businessTitle}/>
                    </td>
                </tr>
                <tr className={business.tr}>
                    <td className={business.td1} colSpan="2">
                        <Tiny/>
                    </td>
                </tr>
                <tr className={business.tr}>
                    <td className={business.td2}>비고</td>
                    <td className={business.td1}>
                        <input type="text" name="businessNote" id={business.businessNote}/>
                    </td>
                </tr>
                </tbody>
            </table>
            <br/><br/>
            <div className={styles.file}>
                <label htmlFor="fileBtn" className={styles.fileLabel}>파일 업로드</label>
                <input type="file" className={styles.fileBtn} name="fileBtn" id="fileBtn"/>
                <div className={styles.fileshow}></div>
            </div>
            { addPeople && <Modal setAddPeople={setAddPeople}/>}
            <br/><br/>
        </div>
    )
}

export default BusinessContent;