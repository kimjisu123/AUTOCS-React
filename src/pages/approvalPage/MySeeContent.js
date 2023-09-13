import style from './ApprovalHome.module.css'
import AppWait from './AppWait.module.css'
import { AiOutlineSearch } from "react-icons/ai"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {callGetAppWaitAPI, callGetMySeeAPI} from "../../apis/ApprovalAPICalls";
import {useNavigate} from "react-router-dom";

function MySeeContent() {

    const dispatch = useDispatch();
    const result = useSelector(state => state.approvalMySeeReducer);
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
            dispatch(callGetMySeeAPI({
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
            <div className={style.waiting}>
                참조/열람 문서
            </div>
            <br/>
            <div className={style.waitingDoc}>
                <table className={style.table1}>
                    <thead>
                    <tr>
                        <th className={style.th}>수신일</th>
                        <th className={style.th}>제목</th>
                        <th className={style.th}>결재양식</th>
                        <th className={style.th}>결재상태</th>
                        <th className={style.th}>발신자</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sendList && sendList.map(list => (
                        <tr>
                            <td className={style.td0}><input type="checkbox" name={AppWait.checkOne} className={AppWait.checkOne}/>{list.document && list.document.applicationDate.toString().substring(0,10)}</td>
                            <td className={style.td1} onClick={e => onClickHandler(e)}>{list.document && list.document.documentTitle}</td>
                            <input type="hidden" value={list.document.documentCode}/>
                            <td className={style.td0}>{list.document && list.document.documentType}</td>
                            <td className={style.td0}>{list.status && list.status}</td>
                            <td className={style.td0}>{list.document && list.document.employee.name}</td>
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

export default MySeeContent