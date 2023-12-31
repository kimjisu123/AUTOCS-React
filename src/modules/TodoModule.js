import { createActions, handleActions } from 'redux-actions';

//초기값
const initialState = [];

//액션

export const GET_TODO = 'todo/GET_TODO';
export const POST_TODO = 'todo/POST_TODO';
export const GET_TODO_MEMBER = 'todo/GET_TODO_MEMBER';
export const DELETE_TODO = 'todo/DELETE_TODO';
export const PUT_TODO_STATUS = 'todo/PUT_TODO_STATUS';
export const PUT_TODO_CONTENT = 'todo/PUT_TODO_CONTENT';


const actions = createActions({
    [GET_TODO]: () => {},
    [POST_TODO]: () => {},
    [GET_TODO_MEMBER]: () => {},
    [DELETE_TODO]: () => {},
    [PUT_TODO_STATUS]: () => {},
    [PUT_TODO_CONTENT]: () => {},
});

//리듀서
const todoReducer = handleActions({
        [GET_TODO]: (state, { payload }) => {
            return payload;
        },
        [POST_TODO]: (state, { payload }) => {
            // return [...state, payload];
            return payload;
        },
        [GET_TODO_MEMBER]: (state,{payload}) => {
            return payload;
        },
        [DELETE_TODO]: (state,{payload}) => {
            return payload;
        },
        [PUT_TODO_STATUS]: (state,{payload}) => {
            return payload;
        },
        [PUT_TODO_CONTENT]: (state,{payload}) => {
            return payload;
        },
    },
    initialState
);
export default todoReducer;
