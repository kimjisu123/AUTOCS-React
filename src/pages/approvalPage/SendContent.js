import style from './ApprovalHome.module.css'
import AppWait from './AppWait.module.css'
import { AiOutlineSearch } from "react-icons/ai"
import { useSelector, useDispatch } from 'react-redux';
import {useEffect, useState} from "react";
import {callGetSendAPI} from "../../apis/ApprovalAPICalls";
import {approvalSendReducer} from "../../modules/ApprovalModule";
import {useNavigate} from "react-router-dom";

function SendContent() {

    const dispatch = useDispatch();
    const result = useSelector(state => state.approvalSendReducer);
    const sendList = result.data;
    const navigate = useNavigate();

    const pageInfo = result.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if(pageInfo) {
        for(let i = 1; i <= pageInfo.pageEnd; i++) {
            pageNumber.push(i);
        }
    }

    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            dispatch(callGetSendAPI({
                currentPage: currentPage
            }));
        },
        [currentPage]
    )

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
            <br/>
            <div className={style.waiting} onClick={onClickHandler}>
                발신 문서함
            </div>
            <br/>
            <div className={style.waitingDoc}>
                <table className={style.table1}>
                    <thead>
                    <tr>
                        <th className={style.th}>발신일</th>
                        <th className={style.th}>제목</th>
                        <th className={style.th}>결재양식</th>
                        {/*<th className={style.th}>첨부</th>*/}
                        <th className={style.th}>결재상태</th>
                        {/*<th className={style.th}>발신자</th>*/}
                    </tr>
                    </thead>
                    <tbody>
                    { sendList && sendList.map(send => (
                        <tr>
                            <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>{send.applicationDate.toString().substring(0,10)}</td>
                            <td className={style.td1} onClick={e => onClickHandler(e)}>{send.documentTitle}</td>
                            <input type="hidden" value={send.documentCode}/>
                            <td className={style.td0}>{send.documentType}</td>
                            <td className={style.td0}>{send.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <br/>
            <br/>
            <div className={AppWait.paging}>
                <div
                    onClick={() => setCurrentPage(currentPage - 1)}
                    style={currentPage === 1 ? {display:"none"} : null}
                    className={AppWait.before}
                >‹</div>
                {pageNumber.map((num) => (
                    <li key={num} onClick={() => setCurrentPage(num)} style={{listStyle: "none", marginLeft: "5px", marginRight: "5px"}}>
                        <div
                            className={ AppWait.pagingBtn }
                        >
                            {num}
                        </div>
                    </li>
                ))}
                <div
                    onClick={() => setCurrentPage(currentPage + 1)}
                    style={pageInfo && (currentPage === pageInfo.pageEnd || pageInfo.total == 0)? {display:"none"} : null}
                    className={AppWait.after}
                >›</div>
            </div>
        </div>
    )
}

export default SendContent