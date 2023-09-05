import { createActions, handleActions } from 'redux-actions';

//초기값
const initialState = [];

//액션

export const GET_MEMBERINFO = 'memberInfo/GET_MEMBER_INFO';
export const POST_MEMBERINFO = 'memberInfo/POST_MEMBERINFO';



const actions = createActions({
    [GET_MEMBERINFO]: () => {},
    [POST_MEMBERINFO]: () => {},

});

//리듀서
const myPageReducer= handleActions({
        [GET_MEMBERINFO]: (state, { payload }) => {
            return payload;
        },
        [POST_MEMBERINFO]: (state, { payload }) => {
            return [...state, payload];
        },

    },
    initialState
);
export default myPageReducer;
