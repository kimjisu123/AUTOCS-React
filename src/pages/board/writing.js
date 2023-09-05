import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MyEditor from './MyEditor';
import React, {useState} from "react";
import {decodeJwt} from "../../util/tokenUtils";
import "./custom.css";

const Writing = () => {
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;



    return (
            <div>
                <button className="writeGo">작성</button>
                <input
                    className="titleWrite"
                    type="text"
                    id="title"
                    name="title"
                    placeholder="제목"
                    required
                />
            <select id="categorySelect" name="categorySelect" className="categorySelect">
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
            <MyEditor />
        </div>
    );
};

export default Writing;