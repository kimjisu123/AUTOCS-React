import { GET_TODO } from "../modules/TodoModule";

// 투두 조회
export const callGetEmployeeAPI = () => {
    const requestURL = 'http://localhost:8080/todo/getTodolist';

    return async (dispatch) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(response => response.json());

        console.log('response :>>>>>>>>>>>>>>>>', result);
        dispatch({ type: GET_TODO, payload: result });
    }
};