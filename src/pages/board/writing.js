import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MyEditor from './MyEditor';
import React, {useState, useEffect} from "react";
import {decodeJwt} from "../../util/tokenUtils";
import "./custom.css";
import {convertToRaw} from 'draft-js';
import {callWritingInsertAPI} from "../../apis/BoardAPICalls";
import {useDispatch} from "react-redux";

const Writing = () => {
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [categoryNo, setcategoryNo] = useState(0);
    const [editorContent, setEditorContent] = useState(null);
    const [image, setImage] = useState(null);

    // EditorState 객체를 텍스트로 변환
    const editorStateToText = (editorState) => {
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        return JSON.stringify(rawContentState);
    };

    const isFormValid = () => {
        return title !== '' && categoryNo !== 0 && editorContent !== null;

    };

    const handleWriting = () => {
        try {
            if (!isFormValid()) {
                window.alert('모든 필드를 입력해주세요.');
                return;
            }

            const formData = new FormData();
            formData.append('refMemberNo', decodedToken.MemberNo);
            formData.append('title', title);
            formData.append('refCategoryNo', categoryNo);

            const editorContentText = editorStateToText(editorContent);
            formData.append('content', editorContentText);

            formData.append("fileImage", image || null);

            // console.log("formData=========>" + formData);
            // for (const entry of formData.entries()) {
            //     console.log(entry[0], entry[1]);
            // }
            // console.log("formData======================");
            callWritingInsertAPI({ formData, dispatch });

        } catch (error) {
            console.error('Error:', error);
        }
    };

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

    return (
            <div>
                <button className="writeGo" onClick={handleWriting}>작성</button>
                <input
                    className="titleWrite"
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="제목"
                    required
                />

            <select id="categorySelect" name="categorySelect" className="categorySelect" value={categoryNo}
                    onChange={handleCategoryNoChange}>
                <option value="default">카테고리를 선택하세요</option>
                <option value={1}>공지사항(직원)</option>
                <option value={2}>업무규정 및 규칙</option>
                <option value={3}>인사소식</option>
                <option value={4}>부서별소식</option>
                <option value={5}>건의 및 의견</option>
                <option value={6}>자유게시판</option>
                <option value={7}>공지사항(영업점)</option>
                <option value={8}>건의 및 의견</option>
                <option value={9}>자유게시판</option>
            </select>
                <MyEditor
                    onUploadFileChange={uploadImageCallback}
                    onEditorStateChange={handleEditorStateChange}
                />
        </div>
    );
};

export default Writing;