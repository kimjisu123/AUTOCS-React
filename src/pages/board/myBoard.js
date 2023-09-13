import "./myBoard.css";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {callGetEmployeeBoardAllAPI} from "../../apis/BoardAPICalls";
import {Link} from "react-router-dom";
import {decodeJwt} from "../../util/tokenUtils";

const MyBoard = () => {
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const role = decodedToken ? decodedToken.auth : null;
    const memberNo = decodedToken.MemberNo;
    const dispatch = useDispatch();
    const board = useSelector(state => state.boardReducer);
    const boardList = Array.isArray(board.data) ? board.data : [];
    console.log("boardList : " + boardList)
    console.log("memberNo : " + memberNo)


    useEffect(() => {
        // 컴포넌트가 마운트되었을 때 목록을 가져오도록 API 호출
        dispatch(callGetEmployeeBoardAllAPI(memberNo));
    }, []);

    // boardList 아직 로드되지 않은 경우 로딩 중 메시지 표시
    if (!boardList) {
        return <div>Loading...</div>;
    }


    return (
        <div className="my-posts">
            <h1>내가 쓴 글</h1>
            <div className="post-list">
                {boardList.map((item, index) => (
                    <div className="post-item" key={index}>
                        <div className="post-date">{item.regist}</div>
                        <h2 className="post-title">
                            <Link to={`/board/detail/${item.boardNo}`}>{item.title}</Link>
                        </h2>
                        {role === "EMPLOYEE" && (
                            <div className="post-info">
                                {item.department} {item.employeeName} {item.position}
                            </div>
                        )}
                        {role === "STORE" && (
                            <div className="post-info">
                                {item.storeName}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyBoard;