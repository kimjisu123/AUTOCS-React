import styles from './approval.module.css';
import traffic from './Traffic.module.css';
import Swal from 'sweetalert2';
import {useState} from "react";
import Modal from './Modal'


const onClickAddHandler = () => {
    let inputRow = document.getElementsByClassName(traffic.tr)[1];
    let table1 = document.getElementsByClassName(traffic.table1)[0].children[0];
    let clone = inputRow.cloneNode(true);
    console.log(clone.children[3].children[0])
    for(let i = 0; i <= 7; i++) {
            clone.children[i].children[0].value = '';
    }
    table1.append(clone);
}


const onClickDelHandler = () => {
    let table1 = document.getElementsByClassName(traffic.table1)[0].children[0];
    console.log(table1.lastElementChild);
    if(table1.childElementCount === 2) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '더 이상 삭제하실 수 없어요',
        })
    } else {
        table1.lastElementChild.remove();
    }

}

function TrafficContent() {

    const [addPeople, setAddPeople] = useState(false);

    const showPeople = () => {
        setAddPeople(true);
    }

    return (
        <div className={styles.content}>
            <div className={styles.modify} onClick={showPeople}>
                결재선 추가
            </div>
            <div className={styles.area1}>여 비 정 산</div>
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
            <div className={styles.addDelBtn}>
                <div className={styles.add} onClick={ onClickAddHandler }>추가</div>
                <div className={styles.delete} onClick={ onClickDelHandler }>삭제</div>
            </div>
            <table className={traffic.table1}>
                <tbody>
                <tr className={traffic.tr}>
                    <td className={traffic.td1}>일자</td>
                    <td className={traffic.td1}>출발시간</td>
                    <td className={traffic.td1}>출발지</td>
                    <td className={traffic.td1}>목적지</td>
                    <td className={traffic.td1}>거리</td>
                    <td className={traffic.td1}>용무</td>
                    <td className={traffic.td1}>금액</td>
                    <td className={traffic.td1}>교통편</td>
                </tr>
                <tr className={traffic.tr}>
                    <td className={traffic.td}><input type="date" name="trafficDate" id={traffic.trafficDate}/></td>
                    <td className={traffic.td}><input type="time" name="trafficTime" id={traffic.trafficTime}/></td>
                    <td className={traffic.td}><input type="text" name="from" id={traffic.from}/></td>
                    <td className={traffic.td}><input type="text" name="to" id={traffic.to}/></td>
                    <td className={traffic.td}><input type="text" name="distance" id={traffic.distance}/></td>
                    <td className={traffic.td}><input type="text" name="business" id={traffic.business}/></td>
                    <td className={traffic.td}><input type="text" name="trafficPrice" id={traffic.trafficPrice}/></td>
                    <td className={traffic.td}><input type="text" name="vehicle" id={traffic.vehicle}/></td>
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
            <br/><br/><br/>
        </div>
    )
}

export default TrafficContent;