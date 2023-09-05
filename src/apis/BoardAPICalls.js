import {GET_BOARD} from "../modules/BoardModule";


//모든 게시물 불러오기
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
    }
};