import styles from './approval.module.css'
import vaca from './VacationContent.module.css'
import Modal from './Modal'
import { FileUpload } from 'primereact/fileupload';
import './input.css'
import { useSelector, useDispatch } from 'react-redux';
import {useEffect, useRef, useState} from "react";
import {
    callGetAppLineAPI
} from '../../apis/ApprovalAPICalls';
import { usePurchaseContext } from './appContext/PurchaseContext';
import {decodeJwt} from "../../util/tokenUtils";
import {useNavigate} from "react-router-dom";
import AppLine from "./AppLine";
import ReceiveLine from "./ReceiveLine";
import Modal1 from "./Modal1";
import {VacationCheck} from "./functionList/FuntionList";
import {callGetVacationAPI} from "../../apis/VacationAPICalls";


function VacationContent() {

    const dispatch = useDispatch();
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const myRef = useRef(null)
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    // 오늘 날짜
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1 < 10 ? "0"+(now.getMonth() + 1) : now.getMonth();
    let date = now.getDate() < 10? "0"+(now.getDate()) : now.getDate();
    let today = year + "-" + month + "-" + date;

    const [addPeople, setAddPeople] = useState(false);
    const [addReceive, setAddReceive] = useState(false);

    const showPeople = () => {
        setAddPeople(true);
    }

    const showReceiver = () => {
        setAddReceive(true);
    }

    useEffect(
        () => {
            dispatch(callGetVacationAPI());
        },
        []
    )

    useEffect(
        () => {
            dispatch(callGetAppLineAPI());
        },
        []
    )

    const onChangeHandler= (e) => {
        console.log(e.target.value);
        setData(prev => ({...prev, [e.target.name] : e.target.value}))
        console.log(data)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);

        for(let i = 0; i < myRef.current.getFiles().length; i++) {
            formdata.append("files", myRef.current.getFiles()[i]);
        }

        for(let i = 0; i < data.allowList.length; i++) {
            // console.log(data.allowList[i]);
            formdata.append("allow", data.allowList[i].empNo);
        }

        for(let i = 0; i < data.receiveList.length; i++) {

            formdata.append("receive", data.receiveList[i].empNo);
        }

        let keys = [];
        let values = [];

        for(let param of formdata) {
            keys.push(param[0]);
            values.push(param[1]);
        }

        VacationCheck(keys, values, formdata, dispatch, navigate, result);

        for(let param of formdata) {
            console.log(param[0], "------", param[1]);
        }
    }

    const list = useSelector(state => state.approvalReducer);
    const result = useSelector(state => state.vacationReducer);

    const {data, setData} = usePurchaseContext();

    return (
        <form className={styles.content} onSubmit={e => onSubmitHandler(e)}>
            <div style={{display:"flex"}}>
                <div className={styles.modify} onClick={showPeople}>
                    결재선 추가
                </div>
                <div className={styles.modify} onClick={showReceiver}>
                    수신자 추가
                </div>
            </div>
            <div className={styles.area1}>휴 가 신 청</div>
            <br/><br/>
            <div className={styles.area2}>
                <div className={styles.area3}>
                    <table className={styles.table3}>
                        <tbody>
                        <tr>
                            <td className={styles.td2}>작 성 자</td>
                            <td className={styles.td1}>{decodedToken.Name}</td>
                        </tr>
                        <tr>
                            <td className={styles.td2}>소 속 부 서</td>
                            <td className={styles.td1}>{decodedToken.Department}</td>
                        </tr>
                        <tr>
                            <td className={styles.td2}>작 성 날 짜</td>
                            <td className={styles.td1}>{today}</td>
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
                            <div className={styles.area6}>{decodedToken.Position}</div>
                            <div className={styles.area7}>{decodedToken.Name}</div>
                            <div className={styles.area8}></div>
                        </span>
                        <span className={styles.area4}>승인</span>
                        <AppLine data={data}/>
                        <span className={styles.area4} style={{marginLeft:"20px"}}>수신</span>
                        <ReceiveLine data={data}/>
                    </div>
                </div>
            </div>
            <br/><br/>
            <table className={vaca.table1}>
                <tbody>
                <tr className={vaca.tr}>
                    <td className={vaca.td3}>휴가 종류</td>
                    <td>
                        <select style={{textAlign:"center"}} name="vacationType">
                            <option value="nope" disabled selected>연차 종류를 선택해주세요.</option>
                            <option value="annual">연차</option>
                            <option value="lateness">지각</option>
                            <option value="earlyLeave">조퇴</option>
                            <option value="familyEvent">경조사</option>
                            <option value="public">공가</option>
                            <option value="sick">병가</option>
                        </select>
                    </td>
                </tr>
                <tr className={vaca.tr}>
                    <td className={vaca.td3}>기간 및 일시</td>
                    <td className={vaca.td1}>
                        <input type="date" id={vaca.startDate} name="startDate" onChange={e => onChangeHandler(e)}/>
                        ~
                        <input type="date" id={vaca.endDate} name="endDate" onChange={e => onChangeHandler(e)} />
                        <div className={vaca.totalDate}>총 휴가 일수 :
                            {Object.is((new Date(data.endDate).getTime() - new Date(data.startDate).getTime()) / (1000 * 60 * 60 * 24), NaN)?  0 : (new Date(data.endDate).getTime() - new Date(data.startDate).getTime()) / (1000 * 60 * 60 * 24) + 1}
                        </div>
                        <div className={vaca.total}></div>
                    </td>
                </tr>
                <tr className={vaca.tr}>
                    <td className={vaca.td3}>반차 여부</td>
                    <td className={vaca.td}>
                        <input type="radio" name="half" value="AM" onChange={e => onChangeHandler(e)}/>오전
                        <input type="radio" name="half" value="PM" onChange={e => onChangeHandler(e)}/>오후
                        <input type="radio" name="half" value="none" checked="checked" onChange={e => onChangeHandler(e)}/>사용 안함
                    </td>
                </tr>
                <tr className={vaca.tr}>
                    <td className={vaca.td3}>연차 일수</td>
                    <td className={vaca.td1}>
                        <div className={vaca.leftVacation}>잔여 연차 :</div>
                        <div className={vaca.vaca}>{result.data}</div>
                        <div className={vaca.useVacation}>사용 연차 :</div>
                        <div className={vaca.vaca}>{
                            data.half == 'AM' || data.half == 'PM'? Object.is((new Date(data.endDate).getTime() - new Date(data.startDate).getTime()) / (1000 * 60 * 60 * 24), NaN)?  0 : (new Date(data.endDate).getTime() - new Date(data.startDate).getTime()) / (1000 * 60 * 60 * 24) + 0.5
                                : Object.is((new Date(data.endDate).getTime() - new Date(data.startDate).getTime()) / (1000 * 60 * 60 * 24), NaN)?  0 : (new Date(data.endDate).getTime() - new Date(data.startDate).getTime()) / (1000 * 60 * 60 * 24) + 1
                        }</div>
                    </td>
                </tr>
                <tr className={vaca.tr}>
                    <td className={vaca.td3}>휴가 사유</td>
                    <td className={vaca.td2}>
                        <textarea name="vacationReason" id={vaca.vacationReason} cols="30" rows="10"
                                  placeholder="휴가 사유를 입력해주세요."></textarea>
                    </td>
                </tr>
                <tr className={vaca.tr}>
                    <td className={vaca.td4} colSpan="2">1. 연차의 사용은 근로기준법에 따라 전년도에 발생한 개인별 잔여 연차에 한하여 사용함을 원칙으로 한다. 단, 최초
                        입사시에는 근로 기준법에 따라 발생 예정된 연차를 차용하여 월 1회 사용 할 수 있다.
                        2. 경조사 휴가는 행사일을 증명할 수 있는 가족 관계 증명서 또는 등본, 청첩장 등 제출
                        3. 공가(예비군/민방위)는 사전에 통지서를, 사후에 참석증을 반드시 제출
                    </td>
                </tr>
                </tbody>
            </table>
            <br/><br/>
            <div className={styles.file}>
                <div style={{width: "100%", textAlign:"center", margin:"20px 0px"}}>
                    <FileUpload ref={myRef} name="demo[]" url={'/api/upload'} multiple emptyTemplate={<p className="m-0">파일을 첨부하세요</p>} />
                </div>
            </div>
            { addPeople && <Modal setAddPeople={setAddPeople}/>}
            { addReceive && <Modal1 setAddReceive={setAddReceive}/>}
            <br/><br/><br/>
            <div style={{display:"flex", justifyContent:"right", marginRight:"40px"}}>
                <button type="submit" className={styles.sendApp}>결재요청</button>
            </div>
            <br/><br/>
        </form>
    )
}

export default VacationContent;