import "./board.css";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {callGetBoardAllAPI} from "../../apis/BoardAPICalls";
import {Link} from "react-router-dom";

const FreeM = () => {
    /////////////////////////////여기는 영업점 정보 불러와야함/////////////////////////////////////
    //영업점 정보긴한데 직원이랑 작성자 다르게 보여주는 부분 필요
    const dispatch = useDispatch();
    const board = useSelector(state => state.boardReducer);
    const boardList = Array.isArray(board.data) ? board.data : [];
    console.log("boardList : " + boardList)

    // categoryNo가 9인 항목만 필터링
    const filteredBoardData = boardList ? boardList.filter(item => item.refCategoryNo === 9) : [];

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
            <h1 style={{marginBottom: "30px", marginTop: "-20px", marginRight: "50px"}}>자유게시판</h1>
            <div className="board-container">
                {filteredBoardData.map((item, index) => (
                    <div key={index} className="board-item">
                        <div className="registt">{item.regist}</div>
                        <h2>
                            <Link to={`/board/detail/${item.boardNo}`}>{item.title}</Link>
                        </h2>
                        <div className="author">
                            {item.anonymity === 'N' ? `${item.department} ${item.employeeName} ${item.position}` : '익명'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FreeM;