import styles from "../approval.module.css";
import business from "../Business.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callGetAppYNAPI, callGetBusinessDocAPI} from "../../../apis/ApprovalAPICalls";
import DocumentAppLine from "../DocumentAppLine";
import DocumentReceiveLine from "../DocumentReceiveLine";
import {decodeJwt} from "../../../util/tokenUtils";
import {useNavigate} from "react-router-dom";
import {delDoc} from "../functionList/FuntionList";
function BusinessType({documentCode}) {

    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(callGetBusinessDocAPI({
            documentCode : documentCode
        }))
    },
        []
    )

    const onClick = () => {
        console.log(data)
    }

    const data = useSelector(state => state.approvalBusinessDocReducer);
    const yn = useSelector(state => state.approvalDocumentAppYNReducer);

    const onClickDelete = () => {
        dispatch(callGetAppYNAPI({
            documentCode : documentCode
        }))

        delDoc(yn, documentCode, navigate, dispatch);
    }

    const onClickFile = e => {
        console.log(e.target.nextSibling.value)
    }

    return (
        <div className={styles.content}>
            <div className={styles.area1} onClick={onClick}>업 무 보 고</div>
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
                            <td className={styles.td1}>{data && "B" + data.documentCode}</td>
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
            <table className={business.table1}>
                <tbody>
                <tr className={business.tr}>
                    <td className={business.td2}>제목</td>
                    <td className={business.td1}>{data && data.documentTitle}</td>
                </tr>
                <tr className={business.tr}>
                    <td className={business.td1} colSpan="2">
                        <div style={{minHeight: "500px"}}>{data && data.business?.businessContent}</div>
                    </td>
                </tr>
                <tr className={business.tr}>
                    <td className={business.td2}>비고</td>
                    <td className={business.td1}>{data && data.business?.businessNote}</td>
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
                    {/*<div className={styles.sendApp}>승인</div>*/}
                    {/*<div className={styles.sendApp}>반려</div>*/}
                    <div className={styles.sendApp} onClick={onClickDelete}>삭제</div>
                </div>}
            <br/><br/>
        </div>
    )
}

export default BusinessType;