import "./board.css";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {callGetBoardAllAPI} from "../../apis/BoardAPICalls";
import {decodeJwt} from "../../util/tokenUtils";

const NoticeMarket = () => {

    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const role = decodedToken ? decodedToken.auth : null;

    const dispatch = useDispatch();
    const board = useSelector(state => state.boardReducer);
    const boardList = board.data;
    console.log("boardList : " + boardList)

    // categoryNo가 7인 항목만 필터링
    const filteredBoardData = boardList ? boardList.filter(item => item.refCategoryNo === 7) : [];

    useEffect(() => {
        // 컴포넌트가 마운트되었을 때 목록을 가져오도록 API 호출
        dispatch(callGetBoardAllAPI());
    }, []);

    // boardList 아직 로드되지 않은 경우 로딩 중 메시지 표시
    if (!boardList) {
        return <div>Loading...</div>;
    }


    return (
        <div className="notice-employee">
            <h1 style={{marginBottom: "30px", marginTop: "-20px", marginRight: "-25px"}}>공지사항</h1>
            <div className="board-container">
                {filteredBoardData.map((item, index) => (
                    <div key={index} className="board-item">
                        <div className="registt">{item.regist}</div>
                        <h2>{item.title}</h2>
                        {role === "EMPLOYEE" ? (
                            <div className="author">
                                {item.department} {item.employeeName} {item.position}
                            </div>
                        ) : role === "STORE" ? (
                            <div className="author">AUTOCS</div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NoticeMarket;