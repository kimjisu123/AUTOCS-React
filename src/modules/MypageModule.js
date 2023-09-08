import { createActions, handleActions } from 'redux-actions';

//초기값
const initialState = [];

//액션

export const GET_MEMBERINFO = 'memberInfo/GET_MEMBER_INFO';
export const POST_MEMBERINFO = 'memberInfo/POST_MEMBERINFO';
export const POST_CHECKPWD = 'memberInfo/POST_CHECKPWD';
export const PUT_CHANGEPWD = 'memberInfo/PUT_CHANGEPWD';
export const GET_PROFILE = 'memberInfo/GET_PROFILE';

export const GET_STOREINFO = 'memberInfo/GET_STOREINFO';




const actions = createActions({
    [GET_MEMBERINFO]: () => {},
    [POST_MEMBERINFO]: () => {},
    [POST_CHECKPWD]: () => {},
    [PUT_CHANGEPWD]: () => {},
    [GET_PROFILE]: () => {},
    [GET_STOREINFO]: () => {},

});

//리듀서
const myPageReducer= handleActions({
        [GET_MEMBERINFO]: (state, { payload }) => {
            return payload;
        },
        [POST_MEMBERINFO]: (state, { payload }) => {
            return [...state, payload];
        },
        [POST_CHECKPWD]: (state, { payload }) => {
            return [...state, payload];
        },
        [PUT_CHANGEPWD]: (state, { payload }) => {
            return [...state, payload];
        },
        [GET_PROFILE]: (state, { payload }) => {
            return payload;
        },
        [GET_STOREINFO]: (state, { payload }) => {
            return payload;
        },

    },
    initialState
);
export default myPageReducer;
