import style from './ApprovalHome.module.css'
import AppWait from './AppWait.module.css'
import { AiOutlineSearch } from "react-icons/ai"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {callGetMyBusinessAPI, callGetSendAPI} from "../../apis/ApprovalAPICalls";
import {useNavigate} from "react-router-dom";
function MyBusinessContent() {

    const dispatch = useDispatch();
    const result = useSelector(state => state.approvalMyBusinessReducer);
    const sendList = result.data;

    const pageInfo = result.pageInfo;
    const navigate = useNavigate();
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
            dispatch(callGetMyBusinessAPI({
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
                나의 업무 문서함
            </div>
            <div className={AppWait.allCheck}>
                <input type="checkBox" name={AppWait.allCheck} className={AppWait.checkAll}/> 전체선택
                <div className={AppWait.delete}> 삭제하기 </div>
            </div>
            <br/>
            <div className={style.waitingDoc}>
                <table className={style.table1}>
                    <thead>
                    <tr>
                        <th className={style.th}>발신일</th>
                        <th className={style.th}>제목</th>
                        <th className={style.th}>결재양식</th>
                        <th className={style.th}>결재상태</th>
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
            <div className={AppWait.search}>
                <input type="text" className={AppWait.searchBar} name={AppWait.searchBar} placeholder='검색하실 제목을 입력해주세요.'/>
                <button className={AppWait.searchButton}>
                    <span className={AppWait.searchIcon}><AiOutlineSearch/></span>
                </button>
            </div>
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

export default MyBusinessContent