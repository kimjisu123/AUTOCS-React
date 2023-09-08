import "./board.css";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {callGetBoardAllAPI} from "../../apis/BoardAPICalls";

const SuggestionM = () => {
    /////////////////////////////여기는 영업점 정보 불러와야함/////////////////////////////////////
    //영업점 정보긴한데 직원이랑 작성자 다르게 보여주는 부분 필요

    const dispatch = useDispatch();
    const board = useSelector(state => state.boardReducer);
    const boardList = board.data;
    console.log("boardList : " + boardList)

    // categoryNo가 8인 항목만 필터링
    const filteredBoardData = boardList ? boardList.filter(item => item.refCategoryNo === 8) : [];

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
            <h1 style={{marginBottom: "30px", marginTop: "-20px", marginRight: "40px"}}>건의 및 의견</h1>
            <div className="board-container">
                {filteredBoardData.map((item, index) => (
                    <div key={index} className="board-item">
                        <div className="registt">{item.regist}</div>
                        <h2>{item.title}</h2>
                        <div className="author">{item.department} {item.employeeName} {item.position} </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SuggestionM;