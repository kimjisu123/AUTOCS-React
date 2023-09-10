import styles from "../approval.module.css";
import traffic from "../Traffic.module.css";
import {decodeJwt} from "../../../util/tokenUtils";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {callGetTrafficDocAPI} from "../../../apis/ApprovalAPICalls";
import TrafficDocumentRow from "../TrafficDocumentRow";
import DocumentAppLine from "../DocumentAppLine";
import DocumentReceiveLine from "../DocumentReceiveLine";

function TrafficType({documentCode}) {

    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const dispatch = useDispatch();
    let total = 0;

    useEffect(() => {
            dispatch(callGetTrafficDocAPI({
                documentCode : documentCode
            }))
        },
        []
    )

    const data = useSelector(state => state.approvalTrafficDocReducer);

    const onClick = () => {
        console.log(data)
    }

    const onClickFile = e => {
        console.log(e.target.nextSibling.value)
    }

    data && data.traffic?.map(m => total += m.price);

    return (
        <div className={styles.content}>
            <div className={styles.area1} onClick={onClick}>여 비 정 산</div>
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
                            <td className={styles.td1}>{"T" + data.documentCode}</td>
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
                {data && data.traffic?.map(traffics => (
                    <TrafficDocumentRow traffics={traffics}/>
                ))}
                </tbody>
            </table>
            <div style={{display: "flex", justifyContent: "space-between", marginLeft: "40px", border: "1px solid gray", marginRight: "37px", height: "30px"}}>
                <div style={{borderRight: "1px solid black", fontSize: "1.2em", width: "153px", textAlign: "center"}}>합계</div>
                <div style={{textAlign:"right", fontSize:"1.2em"}}>{total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</div>
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
                    <div className={styles.sendApp}>승인</div>
                    <div className={styles.sendApp}>반려</div>
                    {/*<div className={styles.sendApp}>수정</div>*/}
                    {/*<div className={styles.sendApp}>취소</div>*/}
                </div> :
                <div style={{display:"flex", justifyContent:"right", marginRight:"40px"}}>
                    {/*<div className={styles.sendApp}>승인</div>*/}
                    {/*<div className={styles.sendApp}>반려</div>*/}
                    <div className={styles.sendApp}>수정</div>
                    <div className={styles.sendApp}>취소</div>
                </div>}
        </div>
    )
}

export default TrafficType;