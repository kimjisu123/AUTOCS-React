import {decodeJwt} from "../../../util/tokenUtils";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    callGetAppYNAPI,
    callGetPayDocAPI,
    callGetPurchaseDocAPI,
    getFileAPI,
    putReceiverAPI
} from "../../../apis/ApprovalAPICalls";
import styles from "../approval.module.css";
import AppLine from "../AppLine";
import ReceiveLine from "../ReceiveLine";
import DocumentAppLine from "../DocumentAppLine";
import DocumentReceiveLine from "../DocumentReceiveLine";
import pay from "../PayContent.module.css";
import PayAddRow from "../PayAddRow";
import PayDocRow from "../PayDocRow";
import {appLineCheck, backDocument, delDoc} from "../functionList/FuntionList";
import {useNavigate} from "react-router-dom";

function PayType({documentCode}) {

    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const dispatch = useDispatch();
    let total = 0;

    useEffect(
        () => {
            dispatch(callGetPayDocAPI(
                {documentCode : documentCode}
            ))
        },
        []
    )

    const data = useSelector(state => state.approvalPayDocReducer);

    const onClick = () => {
        console.log(data)
    }

    const onClickFile = e => {
        console.log(e.target.nextSibling.value)
        dispatch(getFileAPI(
            {fileCode: e.target.nextSibling.value}
        ))
    }

    data && data.pay?.map(pay => (total += pay.price))

    const yn = useSelector(state => state.approvalDocumentAppYNReducer);
    const navigate = useNavigate();

    useEffect(() => {
            dispatch(callGetAppYNAPI({
                documentCode : documentCode
            }))
        },
        []
    )

    const onClickDelete = () => {

        delDoc(yn, documentCode, navigate, dispatch);
    }

    const myPosiCode = decodedToken.Position;
    const appPosiCode = data.appEmp;
    const employeeNo = decodedToken.EmployeeNo;

    const onClickApproval = () => {
        appLineCheck(myPosiCode, appPosiCode, dispatch, documentCode, employeeNo, navigate);
    }

    const onClickBack = () => {
        backDocument(documentCode, employeeNo, dispatch, navigate)
    }

    const onClickReceiver = () => {

        dispatch(putReceiverAPI({
            employeeNo : employeeNo,
            documentCode : documentCode
        }))
    }

    return(
        <div className={styles.content} onClick={onClick}>
            <div className={styles.area1}>비 용 청 구</div>
            <br/><br/>
            <div className={styles.area2}>
                <div className={styles.area3}>
                    <table className={styles.table3}>
                        <tbody>
                        <tr>
                            <td className={styles.td2}>작 성 자</td>
                            <td className={styles.td1}>{data && data.employee?.name}</td>
                        </tr>
                        <tr>
                            <td className={styles.td2}>소 속 부 서</td>
                            <td className={styles.td1}>{data && data.employee?.department.name}</td>
                        </tr>
                        <tr>
                            <td className={styles.td2}>작 성 날 짜</td>
                            <td className={styles.td1}>{data && data.applicationDate?.substring(0, 10)}</td>
                        </tr>
                        <tr>
                            <td className={styles.td2}>문 서 번 호</td>
                            <td className={styles.td1}>{"Y" + documentCode}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{display: "flex"}}>
                    <div className={styles.approve}>
                        <span className={styles.area4}>요청</span>
                        <span className={styles.area5} style={{marginRight: 20}}>
                                    <div className={styles.area6}>{data && data.employee?.position.name}</div>
                                    <div className={styles.area7}>{data && data.employee?.name}</div>
                                    <div className={styles.area8}></div>
                                </span>
                        <span className={styles.area4}>승인</span>
                        <DocumentAppLine data={data}/>
                        <span className={styles.area4} style={{marginLeft:"20px"}}>수신</span>
                        <DocumentReceiveLine data={data}/>
                    </div>
                </div>
            </div>
            <br/><br/>
            <div className={styles.docTitle}>
                <div className={styles.area9}>제목</div>
                <div className={styles.title}>{data && data.documentTitle}</div>
            </div>
            <br/><br/>
            <table className={pay.table1}>
                <tbody>
                <tr className={pay.tr}>
                    <td className={pay.td1}>일자</td>
                    <td className={pay.td2}>용무</td>
                    <td className={pay.td3}>금액</td>
                </tr>
                {data && data.pay?.map(payData => (
                    <PayDocRow payData={payData}/>
                ))}
                </tbody>
            </table>
            <div style={{display: "flex", justifyContent: "space-between", marginLeft: "40px", border: "1px solid gray", marginRight: "37px", height: "30px"}}>
                <div style={{borderRight: "1px solid black", fontSize: "1.2em", width: "152px", textAlign: "center"}}>합계</div>
                <div style={{textAlign:"right", fontSize:"1.2em"}}>{total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</div>
            </div>
            <br/><br/>
            <div className={styles.file}>
                <div style={{width: "100%", textAlign:"center", margin:"20px 0px"}}>
                    {data && data.files?.map(file => (
                        <>
                            <div className={styles.files} key={file.documentFileCode} onClick={e => onClickFile(e)}>{file.originName}</div>
                            <input type="hidden" value={file.documentFileCode}/>
                        </>
                    ))}
                </div>
            </div>
            <br/>
            {decodedToken.EmployeeNo !== data.employee?.employeeNo?
                <div style={{display:"flex", justifyContent:"right", marginRight:"40px"}}>
                    <div className={styles.sendApp} onClick={onClickApproval}>승인</div>
                    <div className={styles.sendApp} onClick={onClickBack}>반려</div>
                    <div className={styles.sendApp} onClick={onClickReceiver}>확인</div>                    {/*<div className={styles.sendApp}>수정</div>*/}
                </div> :
                <div style={{display:"flex", justifyContent:"right", marginRight:"40px"}}>
                    <div className={styles.sendApp} onClick={onClickDelete}>삭제</div>
                </div>}
        </div>
    )

}

export default PayType;