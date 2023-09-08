import styles from "../approval.module.css";
import {decodeJwt} from "../../../util/tokenUtils";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callGetAppYNAPI, callGetPurchaseDocAPI, callGetVacationDocAPI} from "../../../apis/ApprovalAPICalls";
import AppLine from "../AppLine";
import ReceiveLine from "../ReceiveLine";
import vaca from "../VacationContent.module.css";
import DocumentAppLine from "../DocumentAppLine";
import DocumentReceiveLine from "../DocumentReceiveLine";
import {useNavigate} from "react-router-dom";
import {delDoc} from "../functionList/FuntionList";

function VacationType({documentCode}) {

    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const dispatch = useDispatch();
    let total = 0;

    useEffect(
        () => {
            dispatch(callGetVacationDocAPI(
                {documentCode : documentCode}
            ))
        },
        []
    )

    const data = useSelector(state => state.approvalVacationDocReducer);

    const onClick = () => {
        console.log(data)
    }

    const onClickFile = e => {
        console.log(e.target.nextSibling.value)
    }

    const yn = useSelector(state => state.approvalDocumentAppYNReducer);
    const navigate = useNavigate();

    const onClickDelete = () => {
        dispatch(callGetAppYNAPI({
            documentCode : documentCode
        }))

        delDoc(yn, documentCode, navigate, dispatch);
    }

    return (
        <div className={styles.content}>
            <div className={styles.area1} onClick={onClick}>휴 가 신 청</div>
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
                            <td className={styles.td1}>{data && data.applicationDate?.substring(0,10)}</td>
                        </tr>
                        <tr>
                            <td className={styles.td2}>문 서 번 호</td>
                            <td className={styles.td1}>{"V" + documentCode}</td>
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
            <table className={vaca.table1}>
                <tbody>
                <tr className={vaca.tr}>
                    <td className={vaca.td3}>휴가 종류</td>
                    <td>{data && data.vacation?.vacationType}</td>
                </tr>
                <tr className={vaca.tr}>
                    <td className={vaca.td3}>기간 및 일시</td>
                    <td className={vaca.td1}>{data && data.vacation?.startDate.substring(0, 10) + " ~ " + data.vacation?.endDate.substring(0, 10) + "\u00a0\u00a0"}
                        <div className={vaca.totalDate}>총 휴가 일수 : {"\u00a0"}
                            {(new Date(data && data.vacation?.endDate).getTime() - new Date(data && data.vacation?.startDate).getTime()) / (1000 * 60 * 60 * 24)}
                        </div>
                        <div className={vaca.total}></div>
                    </td>
                </tr>
                <tr className={vaca.tr}>
                    <td className={vaca.td3}>반차 여부</td>
                    <td className={vaca.td}>{data && data.vacation?.half === 'none'? "사용 안함" : data.vacation?.half === 'AM' ? "오전" : "오후"}</td>
                </tr>
                <tr className={vaca.tr}>
                    <td className={vaca.td3}>연차 일수</td>
                    <td className={vaca.td1}>
                        <div className={vaca.leftVacation}>잔여 연차 :</div>
                        <div className={vaca.vaca}>{"\u00a0" + data && data.employee?.annual}</div>
                        <div className={vaca.useVacation}>사용 연차 :</div>
                        <div className={vaca.vaca}>{(new Date(data && data.vacation?.endDate).getTime() - new Date(data && data.vacation?.startDate).getTime()) / (1000 * 60 * 60 * 24)}</div>
                    </td>
                </tr>
                <tr className={vaca.tr}>
                    <td className={vaca.td3}>휴가 사유</td>
                    <td className={vaca.td2}><div style={{minHeight:"300px"}}>{data && data.vacation?.vacationReason}</div></td>
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
                    {data && data.files?.map(file => (
                        <>
                            <div className={styles.files} key={file.documentFileCode} onClick={e => onClickFile(e)}>{file.originName}</div>
                            <input type="hidden" value={file.filePath + "\\" + file.modifyName}/>
                        </>
                    ))}
                </div>
            </div>
            <br/>
            {decodedToken.EmployeeNo !== data.employee?.employeeNo?
                <div style={{display:"flex", justifyContent:"right", marginRight:"40px"}}>
                    <div className={styles.sendApp}>승인</div>
                    <div className={styles.sendApp}>반려</div>
                    {/*<div className={styles.sendApp}>수정</div>*/}
                    {/*<div className={styles.sendApp}>취소</div>*/}
                </div> :
                <div style={{display:"flex", justifyContent:"right", marginRight:"40px"}}>
                    <div className={styles.sendApp} onClick={onClickDelete}>삭제</div>
                </div>}
            <br/><br/>
        </div>
    )

}

export default VacationType;