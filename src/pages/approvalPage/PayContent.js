import styles from './approval.module.css';
import Swal from 'sweetalert2';
import pay from './PayContent.module.css'
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
import AddRow from "./AddRow";
import PayAddRow from "./PayAddRow";
import {PayCheck} from "./functionList/FuntionList";

function PayContent() {

    // 로그인 사용자 가져올 토큰
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const myRef = useRef(null)
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);

    // 오늘 날짜
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1 < 10 ? "0"+(now.getMonth() + 1) : now.getMonth();
    let date = now.getDate() < 10? "0"+(now.getDate()) : now.getDate();
    let today = year + "-" + month + "-" + date;

    // 열 추가
    const onClickAddRow = () => {

        const payInput = {
            payDate : '',
            payReason: '',
            payPrice: '',
        }

        setData(prev => ({...prev, documentContent:[...prev.documentContent, payInput]}))
        console.log(data)
    }

    // 열 삭제
    const onClickDelRow = () => {
        const newData = data.documentContent.splice(0, data.documentContent.length - 1);
        console.log(newData)
        setData(prev => ({...prev, documentContent : newData}))
    }

    // 데이터 담아줄 핸들러
    const onChangeInput = (field, value, index) => {
        const tempData = [...data.documentContent];
        tempData[index][field] = value;
        setData(prev => ({...prev, documentContent: tempData}));

        let totalPrice = 0;
        [...data.documentContent].map(item => item?.payPrice * 1)
            .forEach(price => totalPrice += price)

        setTotal(totalPrice);
    }

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetAppLineAPI());
        },
        []
    )

    const list = useSelector(state => state.approvalReducer);

    const {data, setData} = usePurchaseContext();

    const [addPeople, setAddPeople] = useState(false);
    const [addReceive, setAddReceive] = useState(false);

    const showPeople = () => {
        setAddPeople(true);
    }

    const showReceiver = () => {
        setAddReceive(true);
    }

    // 제출 핸들러
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

        PayCheck(keys, values, formdata, dispatch, navigate);

        for(let param of formdata) {
            console.log(param[0], param[1]);
        }
    }
    
    return (

        <form onSubmit={e => onSubmitHandler(e)} className={styles.content}>
            <div style={{display:"flex"}}>
                <div className={styles.modify} onClick={showPeople}>
                    결재선 추가
                </div>
                <div className={styles.modify} onClick={showReceiver}>
                    수신자 추가
                </div>
            </div>
            <div className={styles.area1}>비 용 청 구</div>
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
            <div className={styles.docTitle}>
                <div className={styles.area9}>제목</div>
                <input type="text" name="documentTitle" id={styles.docTitle}/>
            </div>
            <br/><br/>
            <div className={styles.addDelBtn}>
                <div className={styles.add} onClick={ onClickAddRow }>추가</div>
                <div className={styles.delete} onClick={ onClickDelRow }>삭제</div>
            </div>
            <table className={pay.table1}>
                <tbody>
                <tr className={pay.tr}>
                    <td className={pay.td1}>일자</td>
                    <td className={pay.td2}>용무</td>
                    <td className={pay.td3}>금액</td>
                </tr>
                {data.documentContent && data.documentContent.map((value, index) => (
                    <PayAddRow key={index} value={value} onChangeInput={(field, value) => onChangeInput(field, value, index)}/>
                ))}
                </tbody>
            </table>
            <input type="hidden" name="empNo" value={decodedToken.EmployeeNo}/>
            <input type="hidden" name="empName" value={decodedToken.Name}/>
            <div style={{display: "flex", justifyContent: "space-between", marginLeft: "40px", border: "1px solid gray", marginRight: "37px", height: "30px"}}>
                <div style={{borderRight: "1px solid black", fontSize: "1.2em", width: "152px", textAlign: "center"}}>합계</div>
                <div style={{textAlign:"right", fontSize:"1.2em"}}>{total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</div>
            </div>
            <br/><br/>
            <div className={styles.file}>
                <div style={{width: "100%", textAlign:"center", margin:"20px 0px"}}>
                    <FileUpload ref={myRef} name="demo[]" url={'/api/upload'} multiple emptyTemplate={<p className="m-0">파일을 첨부하세요</p>} />
                </div>
            </div>
            { addPeople && <Modal setAddPeople={setAddPeople} />}
            { addReceive && <Modal1 setAddReceive={setAddReceive}/>}
            <br/><br/><br/>
            <div style={{display:"flex", justifyContent:"right", marginRight:"40px"}}>
                <button type="submit" className={styles.sendApp}>결재요청</button>
            </div>
            <br/><br/>
        </form>
    )
}

export default PayContent;