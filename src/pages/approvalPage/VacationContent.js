import styles from './approval.module.css'
import vaca from './VacationContent.module.css'
import Modal from './Modal'
import { FileUpload } from 'primereact/fileupload';
import './input.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import {
    callGetAppLineAPI
} from '../../apis/ApprovalAPICalls';
import { usePurchaseContext } from './appContext/PurchaseContext';


function VacationContent() {

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetAppLineAPI());
        },
        []
    )

    const list = useSelector(state => state.approvalReducer);

    const [addPeople, setAddPeople] = useState(false);

    const showPeople = () => {
        setAddPeople(true);
    }

    const {data, setData} = usePurchaseContext();

    const onClickSendHandler = () => {
        setData(prev => ({...prev, allowList:['박지호', '김마야'], files:[1,2,3], purchaseList:[{productName:'test', productSize:'test', amount:5, price: 10000}]}));
    }

    return (
        <div className={styles.content}>
            <div className={styles.modify} onClick={showPeople}>
                결재선 추가
            </div>
            <div className={styles.area1}>휴 가 신 청</div>
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
            <table className={vaca.table1}>
                <tbody>
                <tr className={vaca.tr}>
                    <td className={vaca.td3}>휴가 종류</td>
                    <td>
                        <select style={{textAlign:"center"}}>
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
                        <input type="date" id={vaca.startDate} name="startDate"/>
                        ~
                        <input type="date" id={vaca.endDate} name="endDate"/>
                        <div className={vaca.totalDate}>총 휴가 일수 :</div>
                        <div className={vaca.total}></div>
                    </td>
                </tr>
                <tr className={vaca.tr}>
                    <td className={vaca.td3}>반차 여부</td>
                    <td className={vaca.td}>
                        <input type="radio" name="half" value="AM"/>오전
                        <input type="radio" name="half" value="PM"/>오후
                        <input type="radio" name="half" value="none" checked/>사용 안함
                    </td>
                </tr>
                <tr className={vaca.tr}>
                    <td className={vaca.td3}>연차 일수</td>
                    <td className={vaca.td1}>
                        <div className={vaca.leftVacation}>잔여 연차 :</div>
                        <div className={vaca.vaca}>5</div>
                        <div className={vaca.useVacation}>사용 연차 :</div>
                        <div className={vaca.vaca}>5</div>
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
                        입사시에는 근로 기준법에 따라 발생 예정된 연차를 차용하여 월 1회 사용 할 수 있다.{"\n"}
                        2. 경조사 휴가는 행사일을 증명할 수 있는 가족 관계 증명서 또는 등본, 청첩장 등 제출{"\n"}
                        3. 공가(예비군/민방위)는 사전에 통지서를, 사후에 참석증을 반드시 제출
                    </td>
                </tr>
                </tbody>
            </table>
            <br/><br/>
            <div className={styles.file}>
                <div style={{width: "100%", textAlign:"center", margin:"20px 0px"}}>
                    <FileUpload name="demo[]" url={'/api/upload'} multiple emptyTemplate={<p className="m-0">파일을 첨부하세요</p>} />
                </div>
            </div>
            { addPeople && <Modal setAddPeople={setAddPeople}/>}
            <br/><br/><br/>
            <div style={{display:"flex", justifyContent:"right", marginRight:"40px"}}>
                <div className={styles.sendApp} onClick={onClickSendHandler}>결재요청</div>
            </div>
            <br/><br/>
        </div>
    )
}

export default VacationContent;