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
                <MyEditor
                    onUploadFileChange={uploadImageCallback}
                    onEditorStateChange={handleEditorStateChange}
                />
        </div>
    );
};

export default Writing;