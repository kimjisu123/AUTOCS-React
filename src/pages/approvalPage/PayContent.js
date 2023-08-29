import styles from './approval.module.css';
import Swal from 'sweetalert2';
import pay from './PayContent.module.css'
import {useState} from "react";
import Modal from './Modal'

const onClickAddHandler = () => {
    let inputRow = document.getElementsByClassName(pay.tr1)[0];
    let table1 = document.getElementsByClassName(pay.table1)[0].children[0];
    let clone = inputRow.cloneNode(true);
    console.log(clone.children[0].children[0])
    for(let i = 0; i <= 2; i++) {
            clone.children[i].children[0].value = '';
    }
    table1.append(clone);
}


const onClickDelHandler = () => {
    let table1 = document.getElementsByClassName(pay.table1)[0].children[0];
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

function PayContent() {

    const [addPeople, setAddPeople] = useState(false);

    const showPeople = () => {
        setAddPeople(true);
    }

    return (

        <div className={styles.content}>
            <div className={styles.modify} onClick={showPeople}>
                결재선 추가
            </div>
            <div className={styles.area1}>비 용 청 구</div>
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
            <table className={pay.table1}>
                <tbody>
                <tr className={pay.tr}>
                    <td className={pay.td1}>일자</td>
                    <td className={pay.td2}>용무</td>
                    <td className={pay.td3}>금액</td>
                </tr>
                <tr className={pay.tr1}>
                    <td className={pay.td}><input type="date" name="payDate" id={pay.payDate}/></td>
                    <td className={pay.td}><input type="text" name="payReason" id={pay.payReason}/></td>
                    <td className={pay.td}><input type="text" name="payPrice" id={pay.payPrice}/></td>
                </tr>
                </tbody>
            </table>
            <br/><br/>
            <div className={styles.file}>
                <label htmlFor="fileBtn" className={styles.fileLabel}>파일 업로드</label>
                <input type="file" className={styles.fileBtn} name="fileBtn" id="fileBtn"/>
                <div className={styles.fileshow}></div>
            </div>
            { addPeople && <Modal setAddPeople={setAddPeople} />}
            <br/><br/>
        </div>
    )
}

export default PayContent;