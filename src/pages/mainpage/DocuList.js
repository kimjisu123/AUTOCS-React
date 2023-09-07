import React, {useEffect} from 'react';
import TableCSS from '../Mypage/Table.module.css';
import {NavLink} from "react-router-dom";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {callGetBoardAllAPI} from "../../apis/BoardAPICalls";

function DocuList() {


    const dispatch = useDispatch();
    const board = useSelector(state => state.boardReducer);
    const boardList = board.data;
    console.log("boardList : " + boardList)

    // categoryNo가 1인 항목만 필터링
    const filteredBoardData = boardList ? boardList.filter(item => item.refCategoryNo === 1) : [];

    useEffect(() => {
        // 컴포넌트가 마운트되었을 때 목록을 가져오도록 API 호출
        dispatch(callGetBoardAllAPI());
    }, []);

    // boardList 아직 로드되지 않은 경우 로딩 중 메시지 표시
    if (!boardList) {
        return <div>Loading...</div>;
    }

    return (
        <div className={TableCSS.container}>
            <div className={TableCSS.section}>
                <figcaption className={TableCSS.docuList}>
                    <u style={{margin:"auto 0"}}><h3><NavLink to="/board/notieE">공지</NavLink></h3></u>
                    <span className={TableCSS.line}></span>
                    <ul>
                        <li>공지 사항<strong>{filteredBoardData.length}</strong></li>
                        <li>진행중 문서<strong>3</strong></li>
                        <li>수신 문서<strong>3</strong></li>
                        <NavLink to="/board/notieE"><MdKeyboardDoubleArrowRight/></NavLink>
                    </ul>
                </figcaption>
                <div style={{marginTop: "1%"}}  className={TableCSS.docuContent}>
                    <table className={TableCSS.docuContent}>
                        <tr>
                            <th>NO</th>
                            <th>부서</th>
                            <th>제목</th>
                            <th>날짜</th>
                            <th>작성자</th>
                        </tr>
                        {filteredBoardData.slice(0, 6).map((item, index) => (
                        <tr ey={index} className={TableCSS.content} >
                            <td>{index}</td>
                                <td style={{width:"20%", height:"10%"}}><strong><button>{item.department} </button></strong></td>
                            <td><NavLink to="/stock/myorderlist/detail">{item.title}</NavLink></td>
                            <td>{item.regist}</td>
                            <td><strong>{item.employeeName}<br/>{item.position}</strong></td>
                        </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DocuList;


