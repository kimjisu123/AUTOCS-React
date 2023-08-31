import {GET_TODO, POST_TODO, GET_TODO_MEMBER} from "../modules/TodoModule";

// 투두 조회
export const callGetTodoAPI = () => {
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


// 회원 한명 투두목록 조회
export const callGetMemberTodoAPI = (memberNo) => {
    const requestURL = `http://localhost:8080/todo/${memberNo}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json());

        console.log('TodoInsert >>>>>>', result);
        dispatch({type: GET_TODO_MEMBER, payload: result});
    }
};

// 투두 등록
export const callInsertTodoAPI = () => {
    const requestURL = 'http://localhost:8080/todo/insertTodo';

    return async (dispatch) => {
        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json());

        console.log('TodoInsert >>>>>>', result);
        dispatch({type: POST_TODO, payload:result});
    }

}