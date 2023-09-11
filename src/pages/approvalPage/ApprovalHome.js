import style from './ApprovalHome.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import {
    callGetAppHomeAPI,
    callGetAppLineAPI
} from '../../apis/ApprovalAPICalls';
import {approvalHomeReducer} from "../../modules/ApprovalModule";
import {useNavigate} from "react-router-dom";

function ApprovalHome() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(
        () => {
            dispatch(callGetAppHomeAPI())
        },
        []
    )

    useEffect(
        () => {
            dispatch(callGetAppLineAPI())
        },
        []
    )

    const result = useSelector(state => state.approvalHomeReducer);

    const list = useSelector(state => state.approvalReducer);

    const passData1 = result.length > 0 && result[0][0];
    const passData2 = result.length > 0 && result[1][0];
    const passData3 = result.length > 0 && result[2][0][0];

    const onClickHandler = (e) => {
        // console.log(e.target.nextSibling.nextSibling.innerText)
        const documentCode = e.target.nextSibling.value;
        const type = e.target.nextSibling.nextSibling.innerText;
        navigate('/approval/document', {state:{documentCode : documentCode, type : type}});
    }

    return (
        <div className={style.content}>
            <div className={style.TopTitle}>
                전자결재
            </div>
            {passData3 === 0? <div className={style.willApp}>
                결재할 문서가 없습니다
            </div> : <div className={style.willApp}>
                결재할 문서가 있습니다. 결재 대기 문서함으로 이동하세요
            </div>}
            <div className={style.waiting}>
                결재 요청 문서
            </div>
            <div className={style.waitingDoc}>
                <table className={style.table1}>
                    <thead>
                    <tr>
                        <th className={style.th}>발신일</th>
                        <th className={style.th}>결재양식</th>
                        <th className={style.th}>제목</th>
                        <th className={style.th}>첨부</th>
                        <th className={style.th}>결재상태</th>
                    </tr>
                    </thead>
                    <tbody>
                    {passData1?.length > 0 && passData1.map(doc =>
                        <tr>
                            <td className={style.td0}>{doc.applicationDate.substring(0,10)}</td>
                            <td className={style.td1} onClick={e => onClickHandler(e)}>{doc.documentTitle}</td>
                            <input type="hidden" value={doc.documentCode}/>
                            <td className={style.td0}>{doc.documentType}</td>
                            <td className={style.td0}>{doc.fileNum}</td>
                            <td className={style.td0}>{doc.status}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            <div className={style.done}>
                결재 완료 문서
            </div>
            <div className={style.doneDoc}>
                <table className={style.table1}>
                    <thead>

                    <tr>
                        <th className={style.th}>발신일</th>
                        <th className={style.th}>제목</th>
                        <th className={style.th}>결재양식</th>
                        <th className={style.th}>첨부</th>
                        <th className={style.th}>결재상태</th>
                    </tr>
                    </thead>
                    <tbody>
                    {passData2?.length > 0 && passData2.map(doc =>
                        <tr>
                            <td className={style.td0}>{doc.applicationDate.substring(0,10)}</td>
                            <td className={style.td1} onClick={e => onClickHandler(e)}>{doc.documentTitle}</td>
                            <input type="hidden" value={doc.documentCode}/>
                            <td className={style.td0}>{doc.documentType}</td>
                            <td className={style.td0}>{doc.fileNum}</td>
                            <td className={style.td0}>{doc.status}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            <br/><br/><br/>
        </div>
    )
}

export default ApprovalHome;