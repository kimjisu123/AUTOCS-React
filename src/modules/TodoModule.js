import { createActions, handleActions } from 'redux-actions';

//초기값
const initialState = [];

//액션

export const GET_TODO = 'todo/GET_TODO';
export const POST_TODO = 'todo/POST_TODO';
export const GET_TODO_MEMBER = 'todo/GET_TODO_MEMBER'


const actions = createActions({
    [GET_TODO]: () => {},
    [POST_TODO]: () => {},
    [GET_TODO_MEMBER]: () => {},
});

//리듀서
const todoReducer = handleActions({
        [GET_TODO]: (state, { payload }) => {
            return payload;
        },
        [POST_TODO]: (state, { payload }) => {
            return payload;
        },
        [GET_TODO_MEMBER]: (state,{payload}) => {
            return payload;
        },
    },
    initialState
);
export default todoReducer;
