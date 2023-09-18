import {GET_BOARD, MY_BOARD, NUM_BOARD} from "../modules/BoardModule";
import { GET_COMMENT } from "../modules/CommentModule";

// 모든 게시물 불러오기
export const callGetBoardAllAPI = () => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/board/getBoardAll`;

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
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/board/writingGo`;

    console.log("formData=========>" + formData);
    for (const entry of formData.entries()) {
        console.log(entry[0], entry[1]);
    }
    console.log("formData======================");

    return fetch(requestURL, {
        method: 'POST',
        headers: {
            "Accept": "*/*"
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
            window.location="/board/notieE";
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

// 게시판 update
export const callUpdateBoardAPI = ({ formData }) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/board/updateBoard`;

    console.log("formData=========>" + formData);
    for (const entry of formData.entries()) {
        console.log(entry[0], entry[1]);
    }
    console.log("formData======================");

    return fetch(requestURL, {
        method: 'POST',
        headers: {
            "Accept": "*/*"
        },
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.error('Error board update');
                throw new Error('Error board update');
            }
        })
        .then(() => {
            window.alert('게시물이 수정 되었습니다.');
            window.location="/board/notieE";
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

// 게시판 delete
export const callDeleteBoardAPI = (boardNo) => {

    console.log("boardNo=========>" + boardNo);
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/board/deleteBoard?boardNo=${boardNo}`;

    return fetch(requestURL, {
        method: 'POST',
        headers: {
            "Accept": "*/*"
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.error('Error board delete');
                throw new Error('Error board delete');
            }
        })
        .then(() => {
            window.alert('게시물이 삭제 되었습니다.');
            window.location="/board/notieE";
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

// 특정 게시물 불러오기
export const callFindBoardNumAPI = (boardNoAsInt) => {
    const boardNo = boardNoAsInt;
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/board/getBoardNum?boardNo=${boardNo}`;

    return async (dispatch) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(response => response.json());

        console.log('response :>>>>>>>>>>>>>>>>', result);
        dispatch({ type: NUM_BOARD, payload: result });
    };
};

// 댓글 작성
export const callCommentAPI = ({ formData }) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/comment/commentInsert`;

    console.log("formData=========>" + formData);
    for (const entry of formData.entries()) {
        console.log(entry[0], entry[1]);
    }
    console.log("formData======================");

    return fetch(requestURL, {
        method: 'POST',
        headers: {
            "Accept": "*/*"
        },
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.error('Error comment insert');
                throw new Error('Error comment insert');
            }
        })
        .then(() => {
            window.alert('댓글이 작성 되었습니다.');
            window.location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

// 특정 게시물의 댓글 불러오기
export const callFindCommentAPI = () => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/comment/getBoardCommentAll`;

    return async (dispatch) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(response => response.json());

        console.log('response :>>>>>>>>>>>>>>>>', result);
        dispatch({ type: GET_COMMENT, payload: result });
    };
};

// 댓글 update
export const callUpdateCommentAPI = ({ formData }) => {

    console.log("formData=========>" + formData);
    for (const entry of formData.entries()) {
        console.log(entry[0], entry[1]);
    }
    console.log("updateComment======================");

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/comment/updateComment`;

    return fetch(requestURL, {
        method: 'POST',
        headers: {
            "Accept": "*/*"
        },
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.error('Error board update');
                throw new Error('Error board update');
            }
        })
        .then(() => {
            window.alert('댓글이 수정 되었습니다.');
            window.location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

// 댓글 delete
export const callDeleteCommentAPI = ( commentToDelete ) => {

    console.log("commentToDelete=========>" + commentToDelete);
    const commentNo = commentToDelete;
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/comment/deleteComment?commentNo=${commentNo}`;

    return fetch(requestURL, {
        method: 'POST',
        headers: {
            "Accept": "*/*"
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.error('Error board delete');
                throw new Error('Error board delete');
            }
        })
        .then(() => {
            window.alert('댓글이 삭제 되었습니다.');
            window.location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

// 특정 멤버 게시물 불러오기
export const callGetEmployeeBoardAllAPI = (memberNo) => {
    const refMemberNo = memberNo;
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/board/getMyBoarEmployee?refMemberNo=${refMemberNo}`;

    return async (dispatch) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(response => response.json());

        console.log('response :>>>>>>>>>>>>>>>>', result);
        dispatch({ type: MY_BOARD, payload: result });
    };
};