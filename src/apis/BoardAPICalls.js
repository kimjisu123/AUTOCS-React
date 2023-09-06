import { GET_BOARD } from "../modules/BoardModule";

// 모든 게시물 불러오기
export const callGetBoardAllAPI = () => {
    const requestURL = 'http://localhost:8080/board/getBoardAll';

    return async (dispatch) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(response => response.json());

        console.log('response :>>>>>>>>>>>>>>>>', result);
        dispatch({ type: GET_BOARD, payload: result });
    };
};

// 게시판 insert
export const callWritingInsertAPI = ({ formData }) => {
    const requestURL = 'http://localhost:8080/board/writingGo';

    console.log("formData=========>" + formData);
    for (const entry of formData.entries()) {
        console.log(entry[0], entry[1]);
    }
    console.log("formData======================");

    return fetch(requestURL, {
        method: 'POST',
        headers: {
            "Accept": "*/*",
            // "Access-Control-Allow-Origin": "*"
        },
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.error('Error board insert');
                throw new Error('Error board insert');
            }
        })
        .then(() => {
            window.alert('게시물이 업로드 되었습니다.');
            //window.location="/board/notieE";
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};