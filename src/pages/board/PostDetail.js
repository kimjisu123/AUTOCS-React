import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { callFindBoardNumAPI } from "../../apis/BoardAPICalls";
import { useDispatch, useSelector } from "react-redux";
import Editor from './Editor'; //
import { EditorState, ContentState, convertFromRaw } from "draft-js";
import './PostDetail.css'

const PostDetail = () => {
    const { boardNo } = useParams();

    const dispatch = useDispatch();
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


    return (
        <div>
            <div className="boardDate">{board.regist}</div>
            <h1 style={{ marginTop: "10px", marginBottom: "30px"}}>{board.title}</h1>
            <div className="boardName">
                {board.anonymity === 'Y' ? '익명' : `${board.department} ${board.employeeName} ${board.position}`}
            </div>
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