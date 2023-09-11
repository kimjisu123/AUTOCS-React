import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {callFindBoardNumAPI, callUpdateBoardAPI} from "../../apis/BoardAPICalls";
import { useDispatch, useSelector } from "react-redux";
import UpdateEditor from './UpdateEditor';
import {EditorState, ContentState, convertFromRaw, convertToRaw} from "draft-js";
import './PostDetail.css'
import {decodeJwt} from "../../util/tokenUtils";

const UpdateBoard = () => {
    const { boardNo } = useParams();
    const dispatch = useDispatch();
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const role = decodedToken ? decodedToken.auth : null;
    const [title, setTitle] = useState('');
    const [categoryNo, setcategoryNo] = useState(0);
    const [editorContent, setEditorContent] = useState(null);
    const [image, setImage] = useState(null);
    const [isAnonymous, setIsAnonymous] = useState(false);

    // EditorState 객체를 텍스트로 변환
    const editorStateToText = (editorState) => {
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        return JSON.stringify(rawContentState);
    };

    const isFormValid = () => {
        return title !== '' && categoryNo !== 0 && editorContent !== null;

    };

    const boardData = useSelector(state => state.boardReducer);
    const board = boardData.data;

    useEffect(() => {
        const boardNoAsInt = parseInt(boardNo, 10);
        dispatch(callFindBoardNumAPI(boardNoAsInt));
    }, [boardNo, dispatch]);

    useEffect(() => {
        if (board) {
            setTitle(board.title);
            setcategoryNo(board.refCategoryNo);
            const content = JSON.parse(board.content);
            const contentState = convertFromRaw(content);
            const editorState = EditorState.createWithContent(contentState);
            setEditorContent(editorState);
            setIsAnonymous(board.anonymity === 'Y');
        }
    }, [board]);

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

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleCategoryNoChange = (event) => {
        setcategoryNo(event.target.value);
    };

    const handleEditorStateChange = (editorState) => {
        setEditorContent(editorState);
    };

    const uploadImageCallback = (file) => {
        setImage(file);
    };

    const handleAnonymousChange = (event) => {
        if (categoryNo == 5 || categoryNo == 6 || categoryNo == 8 || categoryNo == 9) {
            setIsAnonymous(event.target.checked);
        }
        else {
            // 카테고리가 다른 경우, 익명 옵션을 선택할 수 없도록 만듦
            setIsAnonymous(false);
            alert('이 카테고리에서는 익명으로 작성할 수 없습니다.');
            return;
        }
    };

    //수정하러가자!!
    const handleUpdate = () => {
        try {
            if (!isFormValid()) {
                window.alert('모든 필드를 입력해주세요.');
                return;
            }

            const formData = new FormData();
            const boardNoAsInt = parseInt(boardNo, 10);
            formData.append('boardNo', boardNoAsInt);
            formData.append('refMemberNo', decodedToken.MemberNo);
            formData.append('title', title);
            formData.append('refCategoryNo', categoryNo);
            formData.append('anonymity', isAnonymous ? 'Y' : 'N');

            const editorContentText = editorStateToText(editorContent);
            formData.append('content', editorContentText);

            if(image) {
                image.forEach((file, index) => {
                    formData.append(`fileImages`, file);
                });
            }
            //파일 있을수도 있고 없을 수도 있음
            console.log("image>>>>>>>>>>>>>>{}", image)
            console.log("image>>>>>>>>>>>>>>1{}", formData.get('fileImages'))
            callUpdateBoardAPI({ formData, dispatch });

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <button className="writeGo" onClick={handleUpdate}>수정</button>
            <input
                className="titleWrite"
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={handleTitleChange}
                required
            />
            <div>
                <label>
                    <input type="checkbox" style={{marginLeft: "1500px"}}
                           checked={isAnonymous}
                           onChange={handleAnonymousChange}
                    />
                    익명
                </label>
                <select
                    id="categorySelect"
                    name="categorySelect"
                    className="categorySelect"
                    value={categoryNo}
                    onChange={handleCategoryNoChange}
                >
                    <option value="default">카테고리를 선택하세요</option>
                    {(role === 'EMPLOYEE') && (
                        <>
                            <option value={1}>공지사항</option>
                            <option value={2}>업무규정 및 규칙</option>
                            <option value={3}>인사소식</option>
                            <option value={4}>부서별소식</option>
                            <option value={5}>건의 및 의견</option>
                            <option value={6}>자유게시판</option>
                            <option value={7}>영업점 공지사항</option>
                        </>
                    )}
                    {(role === 'STORE') && (
                        <>
                            <option value={8}>건의 및 의견</option>
                            <option value={9}>자유게시판</option>
                        </>
                    )}
                </select>
            </div>
            <UpdateEditor
                editorState={editorState}
                onUploadFileChange={uploadImageCallback}
                onEditorStateChange={handleEditorStateChange}
            />
        </div>
    );
};

export default UpdateBoard;