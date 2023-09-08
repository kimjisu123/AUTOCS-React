import styles from "../approval.module.css";
import {decodeJwt} from "../../../util/tokenUtils";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callGetAppYNAPI, callGetPurchaseDocAPI, putApprovalAPI} from "../../../apis/ApprovalAPICalls";
import {approvalPurchaseDocReducer} from "../../../modules/ApprovalModule";
import DocumentAppLine from "../DocumentAppLine";
import DocumentReceiveLine from "../DocumentReceiveLine";
import PurchaseDocumentRow from "../PurchaseDocumentRow";
import {useNavigate} from "react-router-dom";
import {appLineCheck, delDoc} from "../functionList/FuntionList";

function PurchaseType({documentCode}) {

    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const dispatch = useDispatch();
    let total = 0;

    useEffect(
        () => {
            dispatch(callGetPurchaseDocAPI(
                {documentCode : documentCode}
            ))
        },
        []
    )

    const data = useSelector(state => state.approvalPurchaseDocReducer);

    const onClick = () => {
        console.log(data)
    }

    const onClickFile = e => {
        console.log(e.target.nextSibling.value)
    }

    data && data.purchase?.map(m => total += (m.unitPrice * m.amount));

    const yn = useSelector(state => state.approvalDocumentAppYNReducer);
    const navigate = useNavigate();
    const myPosiCode = decodedToken.Position;
    const appPosiCode = data.appEmp;
    const onClickDelete = () => {
        dispatch(callGetAppYNAPI({
            documentCode : documentCode
        }))

        delDoc(yn, documentCode, navigate, dispatch);
    }

    const employeeNo = decodedToken.EmployeeNo;
    const onClickApproval = () => {
        appLineCheck(myPosiCode, appPosiCode, dispatch, documentCode, employeeNo, navigate);
    }
    return (
        <div className={styles.content} onClick={onClick}>
            <div className={styles.area1}>구 매 요 청</div>
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
                            <td className={styles.td1}>{"P" + documentCode}</td>
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
            <div className={styles.area10}>
                <table className={styles.table2}>
                    <tbody>
                    <tr className={styles.tr}>
                        <td className={styles.productName}>품명</td>
                        <td className={styles.productSize}>규격</td>
                        <td className={styles.amount}>수량</td>
                        <td className={styles.price}>단가</td>
                        <td className={styles.totalPrice}>금액</td>
                        <td className={styles.note}>비고</td>
                    </tr>
                    {data && data.purchase?.map( purchase => (
                        <PurchaseDocumentRow purchase={purchase}/>
                    ))}
                    </tbody>
                </table>
                <div className={styles.area11}>
                    <div className={styles.area12}>합계</div>
                    <div className={styles.allPrice}>{total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</div>
                </div>
            </div>
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
                    <div className={styles.sendApp} onClick={onClickApproval}>승인</div>
                    <div className={styles.sendApp}>반려</div>
                </div> :
                <div style={{display:"flex", justifyContent:"right", marginRight:"40px"}}>
                    <div className={styles.sendApp} onClick={onClickDelete}>삭제</div>
                </div>}
        </div>
    )
}

export default PurchaseType;