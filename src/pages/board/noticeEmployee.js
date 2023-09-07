import "./board.css";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {callGetBoardAllAPI} from "../../apis/BoardAPICalls";
import { Link } from 'react-router-dom';

const NoticeEmployee = () => {

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
        <div className="notice-employee">
            <h1 style={{ marginBottom: '30px', marginTop: '-20px', marginRight: '40px'}}>공지사항</h1>
            <div className="board-container">
                {filteredBoardData.map((item, index) => (
                    <div key={index} className="board-item">
                        <div className="registt">{item.regist}</div>
                        <h2>
                            <Link to={`/board/detail/${item.boardNo}`}>{item.title}</Link>
                        </h2>
                        <div className="author">
                            {item.department} {item.employeeName} {item.position}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoticeEmployee;