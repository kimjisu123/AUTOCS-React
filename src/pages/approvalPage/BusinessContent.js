import styles from './approval.module.css';
import business from './Business.module.css';
import Tiny from './Tiny'
import Modal from './Modal'
import { FileUpload } from 'primereact/fileupload';
import './input.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from "react";
import {
    callGetAppLineAPI
} from '../../apis/ApprovalAPICalls';
import { usePurchaseContext } from './appContext/PurchaseContext';
import {decodeJwt} from "../../util/tokenUtils";
import AppLine from "./AppLine";
import ReceiveLine from "./ReceiveLine";
import Modal1 from "./Modal1";
import {useNavigate} from "react-router-dom";
import {BusinessCheck} from "./functionList/FuntionList";

function BusinessContent() {

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetAppLineAPI());
        },
        []
    )

    const list = useSelector(state => state.approvalReducer);

    const [addPeople, setAddPeople] = useState(false);
    const [addReceive, setAddReceive] = useState(false);

    const showPeople = () => {
        setAddPeople(true);
    }

    const showReceiver = () => {
        setAddReceive(true);
    }

    const {data, setData} = usePurchaseContext();
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const myRef = useRef(null)
    const navigate = useNavigate();

    // 오늘 날짜
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1 < 10 ? "0"+(now.getMonth() + 1) : now.getMonth();
    let date = now.getDate() < 10? "0"+(now.getDate()) : now.getDate();
    let today = year + "-" + month + "-" + date;


    const onSubmitHandler = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);

        formdata.append("business", data.business);

        for(let i = 0; i < myRef.current.getFiles().length; i++) {
            formdata.append("files", myRef.current.getFiles()[i]);
        }

        for(let i = 0; i < data.allowList?.length; i++) {
            // console.log(data.allowList[i]);
            formdata.append("allow", data.allowList[i].empNo);
        }

        for(let i = 0; i < data.receiveList?.length; i++) {

            formdata.append("receive", data.receiveList[i].empNo);
        }

        let keys = [];
        let values = [];

        for(let param of formdata) {
            keys.push(param[0]);
            values.push(param[1]);
        }

        BusinessCheck(formdata, keys, values, dispatch, navigate);

        for(let param of formdata) {
            console.log(param[0], param[1]);
        }
    }

    return(
        <form className={styles.content} onSubmit={onSubmitHandler}>
            <div style={{display:"flex"}}>
                <div className={styles.modify} onClick={showPeople}>
                    결재선 추가
                </div>
                <div className={styles.modify} onClick={showReceiver}>
                    수신자 추가
                </div>
            </div>
            <div className={styles.area1}>업 무 보 고</div>
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
                        <Tiny setData={setData}/>
                    </td>
                </tr>
                <tr className={business.tr}>
                    <td className={business.td2}>비고</td>
                    <td className={business.td1}>
                        <input type="text" name="businessNote" id={business.businessNote}/>
                    </td>
                </tr>
                </tbody>
                <input type="hidden" name="empNo" value={decodedToken.EmployeeNo}/>
                <input type="hidden" name="empName" value={decodedToken.Name}/>
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

export default BusinessContent;