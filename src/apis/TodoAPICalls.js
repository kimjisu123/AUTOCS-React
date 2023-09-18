import {
    GET_TODO,
    POST_TODO,
    GET_TODO_MEMBER,
    DELETE_TODO,
    PUT_TODO_STATUS,
    PUT_TODO_CONTENT
} from "../modules/TodoModule";
import {DELETE_SELECT_MAIL} from "../modules/MailModule";

// 투두 조회
export const callGetTodoAPI = () => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/todo/getTodolist`;

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
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/todo/${memberNo}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json());

        console.log('회원값가지고오기 결과 >>>>>>', result);
        dispatch({type: GET_TODO_MEMBER, payload: result});
    }
};

// 투두 등록
export const callInsertTodoAPI = (todoData) => {
    console.info("초기값3 {}",todoData);
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/todo/insertTodo`;
    console.info("초기값4 {}",todoData);

    return async (dispatch) => {
        try {
        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(todoData) // content를 JSON 형식으로 변환하여 전송
        })
        console.info("초기값5 {}",todoData)
        if(result.ok) {
            console.log('TodoInsert >>>>>>', result);
            dispatch({type: POST_TODO, payload:result});
        } else {
            console.error('Error adding Todo:', result.status);
        }

        } catch (error) {
            console.error('Error adding Todo:', error);
        }
    }
};


// 투두 삭제
export const callDeleteTodoAPI = (todo) =>{
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/todo/deleteTodo`
    console.info("[callDeleteTodoAPI]삭제값 {}",todo);

    return async (dispatch, getState) => {
        console.info("[callDeleteTodoAPI]삭제값2 {}",todo);
        const result = await fetch(requestURL, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Accept': '*/*',
            },
            body: JSON.stringify(todo)
        });
        dispatch({ type: DELETE_TODO, payload: result });
    }
};


// 투두 토글 값 변경
export const callUpdateToggleAPI = (todoData) => {

    console.info("callUpdateToggleAPI 초기값3 {}",todoData);
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/todo/toggle`;
    console.info(" callUpdateToggleAPI 초기값4 {}",todoData);

    return async (dispatch) => {
        try {
            const result = await fetch(requestURL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(todoData) // content를 JSON 형식으로 변환하여 전송
            })
            console.info(" callUpdateToggleAPI 초기값5 {}",todoData)
            if(result.ok) {
                console.log(' callUpdateToggleAPI result >>>>>> {} ', result);
                dispatch({type: PUT_TODO_STATUS, payload:result});
            } else {
                console.error('Error adding Todo:', result.status);
            }
        } catch (error) {
            console.error('Error adding Todo:', error);
        }
    }
}

//투두 내용 수정

export const callUpdateTodoAPI = (todoData) => {

    console.info("callUpdateTodoAPI 초기값3 {}",todoData);
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/todo/updateTodo`;
    console.info(" callUpdateTodoAPI 초기값4 {}",todoData);

    return async (dispatch) => {
        try {
            const result = await fetch(requestURL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(todoData) // content를 JSON 형식으로 변환하여 전송
            })
            console.info(" callUpdateTodoAPI 초기값5 {}",todoData)
            if(result.ok) {
                console.log(' callUpdateTodoAPI result >>>>>> {} ', result);
                dispatch({type: PUT_TODO_CONTENT, payload:result});
            } else {
                console.error('Error adding Todo:', result.status);
            }
        } catch (error) {
            console.error('Error adding Todo:', error);
        }
    }
}