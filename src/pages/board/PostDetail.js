import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {callFindBoardNumAPI, callCommentAPI, callDeleteBoardAPI, callFindCommentAPI} from "../../apis/BoardAPICalls";
import { useDispatch, useSelector } from "react-redux";
import Editor from './Editor'; //
import { EditorState, ContentState, convertFromRaw } from "draft-js";
import './PostDetail.css'
import {decodeJwt} from "../../util/tokenUtils";

const PostDetail = () => {
    const { boardNo } = useParams();
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const role = decodedToken ? decodedToken.auth : null;
    const dispatch = useDispatch();
    const [showConfirmation1, setShowConfirmation1] = useState(false);
    const [showConfirmation2, setShowConfirmation2] = useState(false);
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [boardComment, setBoardComment] = useState('');
    const boardData = useSelector(state => state.boardReducer);
    const board = boardData.data;
    const commentData = useSelector(state => state.commentReducer);
    const comment = commentData.data;
    const [comments, setComments] = useState([]);
    const boardNoAsInt = parseInt(boardNo, 10);

    useEffect(() => {
        const boardNoAsInt = parseInt(boardNo, 10);
        dispatch(callFindBoardNumAPI(boardNoAsInt));
        dispatch(callFindCommentAPI());
    }, [boardNo, dispatch]);

    useEffect(() => {
        setComments(commentData.data || []);
    }, [commentData]);

    if (!board || !board.content) {
        return <div>Loading...</div>;
    }
    // if (!comment || !comment.content) {
    //     return <div>Loading...</div>;
    // }

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

    const handleAnonymousChange = (event) => {
            setIsAnonymous(event.target.checked);
    };

    const handleCommentChange = (event) => {
        setBoardComment(event.target.value);
    };

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

    const isFormValid = () => {
        return boardComment !== '';
    };

    //댓글 작성
    const handleComment = () => {
        try {
            if (!isFormValid()) {
                window.alert('댓글을 입력해주세요.');
                return;
            }

            const formData = new FormData();
            formData.append('commentContent', boardComment);
            formData.append('refMemberNo', decodedToken.MemberNo);
            formData.append('refBoardNo', board.boardNo);
            formData.append('anonymity', isAnonymous ? 'Y' : 'N');

            callCommentAPI({ formData, dispatch });

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
                    : board.memnerRole === 'STORE'
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

                {/* 댓글 확인란 */}
                {(board.refCategoryNo !== 1 && board.refCategoryNo !== 2 && board.refCategoryNo !== 3 && board.refCategoryNo !== 4 && board.refCategoryNo !== 7) && (
                    <div>
                        <ul style={{ listStyleType: "none", padding: "0", display: "flex", flexWrap: "wrap" }}>
                            {comments
                                .filter((comment) => comment.refBoardNo === boardNoAsInt)
                                .map((comment) => (
                                    <li
                                        key={comment.id}
                                        style={{
                                            flex: "0 0 calc(99% - 10px)",
                                            marginRight: "20px",
                                            marginBottom: "20px",
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                            padding: "10px"
                                        }}
                                    >
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <div style={{ color: "#777", marginBottom: "5px" }}>
                                                {comment.regist}
                                            </div>
                                            {comment.refMemberNo === decodedToken.MemberNo && (
                                                <div>
                                                    <button
                                                        style={{
                                                            marginRight: "10px",
                                                            padding: "5px 10px",
                                                            background: "#2a3c1e",
                                                            color: "#FFF",
                                                            border: "none",
                                                            borderRadius: "3px",
                                                            cursor: "pointer"
                                                        }}
                                                    >
                                                        수정
                                                    </button>
                                                    <button
                                                        style={{
                                                            padding: "5px 10px",
                                                            background: "#2a3c1e",
                                                            color: "#FFF",
                                                            border: "none",
                                                            borderRadius: "3px",
                                                            cursor: "pointer"
                                                        }}
                                                    >
                                                        삭제
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        <div style={{ fontWeight: "bold", paddingBottom: "12px" }}>
                                            {comment.anonymity === "Y"
                                                ? "익명"
                                                : comment.memberRole === "STORE"
                                                    ? comment.storeName
                                                    : `${comment.department} ${comment.employeeName} ${comment.position}`}
                                        </div>
                                        <div style={{marginBottom: "25px"}}>{comment.commentContent}</div>
                                    </li>
                                ))}
                        </ul>
                        {comments.filter(comment => comment.refBoardNo === boardNoAsInt).length === 0 && (
                            <div style={{ color: "#777", marginBottom: "15px" }}>
                                아직 댓글이 없습니다.
                            </div>
                        )}
                    </div>
                )}

                {/*댓글 입력란*/}
                {(board.refCategoryNo !== 1 && board.refCategoryNo !== 2 && board.refCategoryNo !== 3 && board.refCategoryNo !== 4 && board.refCategoryNo !== 7) && (
                <form className="comment-form" style={{marginTop: "50px"}}>
                    <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="댓글을 입력하세요..."
                        rows="2"
                        value={boardComment}
                        onChange={handleCommentChange}
                        required
                    />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary" onClick={handleComment}>댓글 작성</button>
                    </div>
                    <label style={{marginRight: "8px"}}>
                        <input type="checkbox"  checked={isAnonymous} onChange={handleAnonymousChange}/>
                        익명
                    </label>
                </form>
                )}
            </div>
        </div>
    );
};

export default PostDetail;