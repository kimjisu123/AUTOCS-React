import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {callFindBoardNumAPI, callWritingInsertAPI} from "../../apis/BoardAPICalls";
import { useDispatch, useSelector } from "react-redux";
import Editor from './Editor'; //
import { EditorState, ContentState, convertFromRaw } from "draft-js";
import './PostDetail.css'
import {decodeJwt} from "../../util/tokenUtils";
import {callEmployeeFindIdAPI, callStoreFindIdAPI} from "../../apis/MemberAPICalls";

const PostDetail = () => {
    const { boardNo } = useParams();
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const dispatch = useDispatch();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const boardData = useSelector(state => state.boardReducer);
    const board = boardData.data;
    useEffect(() => {
        const boardNoAsInt = parseInt(boardNo, 10);
        dispatch(callFindBoardNumAPI(boardNoAsInt));
    }, [boardNo, dispatch]);

    if (!board || !board.content) {
        return <div>Loading...</div>;
    }

    if (!board) {
        return <div>Loading...</div>;
    }

    const content = JSON.parse(board.content);

    // 객체의 값을 배열로 변환하여 순회
    Object.values(content.entityMap).forEach((entity, index) => {
        if (entity.type === "IMAGE") {
            entity.data.src = board.fileUrls[index];
        }
    });
    const contentState = convertFromRaw(content);
    const editorState = EditorState.createWithContent(contentState);

    const handleDeleteConfirmation = () => {
        setShowConfirmation(true);
    }

    //게시물 삭제
        const deleteBoard = () => {
            try {
                const deleteBoardNo = {
                    //boardNo: boardNoAsInt
                };
                console.log('deleteBoardNo:', deleteBoardNo);

                //dispatch(callDeleteBoardAPI(deleteBoardNo));

            } catch (error) {
                console.error('Error:', error);
            }
        };


    return (
        <div>
            <div className="boardDate">{board.regist}</div>
            <h1 style={{ marginTop: "10px", marginBottom: "30px"}}>{board.title}</h1>
            <div className="boardName">
                {board.anonymity === 'Y' ? '익명' : `${board.department} ${board.employeeName} ${board.position}`}
            </div>
            {board.refMemberNo == decodedToken.MemberNo && (
                <div style={{marginLeft: "1055px", marginBottom: "10px"}}>
                    <button className="boardButtons1">수정</button>
                    <button className="boardButtons2" onClick={handleDeleteConfirmation}>삭제</button>
                    {
                        showConfirmation &&
                        <div className="confirmationDialog">
                            <div className="confirmationText">삭제하시겠습니까?</div>
                            <button onClick={deleteBoard}>확인</button>
                            <button onClick={() => setShowConfirmation(false)}>취소</button>
                        </div>
                    }
                </div>
            )}
            <div style={{borderBottom: "1px solid #2a3c1e",  width: "80%", marginLeft: "150px"}}></div>
            <div style={{marginTop: "60px"}}>
            <Editor
                editorState={editorState}
            />
            </div>
        </div>
    );
};

export default PostDetail;