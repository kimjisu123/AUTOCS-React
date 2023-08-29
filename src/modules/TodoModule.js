import { createActions, handleActions } from 'redux-actions';

//초기값
const initialState = [];

//액션

export const GET_TODO = 'todo/GET_TODO';


const actions = createActions({
    [GET_TODO]: () => {},
});

//리듀서
const todoReducer = handleActions({
        [GET_TODO]: (state, { payload }) => {
            return payload;
        },

    },
    initialState
);

export default todoReducer;