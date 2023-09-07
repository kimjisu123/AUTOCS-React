import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { boardNo } = useParams(); // URL에서 boardNo를 가져옵니다.
    console.log(boardNo);


    return (
        <div>
            <h1>게시물 내용</h1>
            {/* 게시물 내용을 표시하는 컴포넌트를 여기에 추가 */}
        </div>
    );
};

export default PostDetail;

