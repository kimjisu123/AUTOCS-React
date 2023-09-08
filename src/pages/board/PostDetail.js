import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import {callFindBoardNumAPI, callWritingInsertAPI} from "../../apis/BoardAPICalls";
import { useDispatch, useSelector } from "react-redux";
import Editor from './Editor'; //
import { EditorState, ContentState, convertFromRaw } from "draft-js";
import './PostDetail.css'
import {decodeJwt} from "../../util/tokenUtils";
import {callDeleteBoardAPI} from '../../apis/BoardAPICalls';

const PostDetail = () => {
    const { boardNo } = useParams();
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const role = decodedToken ? decodedToken.auth : null;
    const dispatch = useDispatch();
    const [showConfirmation1, setShowConfirmation1] = useState(false);
    const [showConfirmation2, setShowConfirmation2] = useState(false);
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

    const handleUpdateConfirmation = () => {
        setShowConfirmation1(true);
    }

    const handleDeleteConfirmation = () => {
        setShowConfirmation2(true);
    }

    //게시물 수정 페이지 이동
    const updateBoard = () => {
        window.location = `/board/update/${board.boardNo}`;
    };

    //게시물 삭제
        const deleteBoard = () => {
            try {
                const deleteBoardNo = {
                    boardNo: board.boardNo
                };

                dispatch(callDeleteBoardAPI(boardNo));

            } catch (error) {
                console.error('Error:', error);
            }
        };


    return (
        <div>
            <div className="boardDate">{board.regist}</div>
            <h1 style={{ marginTop: "10px", marginBottom: "30px"}}>{board.title}</h1>
            <div className="boardName">
                {board.anonymity === 'Y'
                    ? '익명'
                    : role === 'STORE'
                        ? board.storeName || "AUTOCS"
                        : `${board.department} ${board.employeeName} ${board.position}`
                }
            </div>
            {board.refMemberNo == decodedToken.MemberNo && (
                <div style={{marginLeft: "1055px", marginBottom: "10px"}}>
                    <button className="boardButtons1" onClick={handleUpdateConfirmation}>수정</button>
                    <button className="boardButtons2" onClick={handleDeleteConfirmation}>삭제</button>
                    {
                        showConfirmation1 &&
                        <div>
                            <div style={{color: "red"}}>수정하시겠습니까?</div>
                            <button
                                style={{ background: "#2a3c1e", color: "#FFF" }}
                                onClick={updateBoard}
                            >
                                확인
                            </button>
                            <button
                                style={{ background: "#2a3c1e", color: "#FFF" }}
                                onClick={() => setShowConfirmation1(false)}
                            >
                                취소
                            </button>
                        </div>
                    }
                    {
                        showConfirmation2 &&
                        <div>
                            <div style={{color: "red"}}>삭제하시겠습니까?</div>
                            <button
                                style={{ background: "#2a3c1e", color: "#FFF" }}
                                onClick={deleteBoard}
                            >
                                확인
                            </button>
                            <button
                                style={{ background: "#2a3c1e", color: "#FFF" }}
                                onClick={() => setShowConfirmation2(false)}
                            >
                                취소
                            </button>
                        </div>
                    }
                </div>
            )}
            <div style={{borderBottom: "1px solid #2a3c1e",  width: "80%", marginLeft: "150px"}}></div>
            <div style={{marginTop: "60px"}}>
            <Editor
                editorState={editorState}
            />
                <div style={{borderBottom: "1px solid #2a3c1e",  width: "80%", marginLeft: "150px"}}></div>
                <div style={{marginTop: "60px"}}/>
            {/*댓글 입력란*/}
                <form className="comment-form">
                    <div className="form-group">
        <textarea
            className="form-control"
            placeholder="댓글을 입력하세요..."
            rows="2"
            required
        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">댓글 작성</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostDetail;