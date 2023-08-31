import { createActions, handleActions } from 'redux-actions';

//초기값
const initialState = [];

//액션
export const ADD_EMPLOYEE = 'member/ADD_EMPLOYEE';
export const GET_EMPLOYEE = 'member/GET_EMPLOYEE';
export const GO_LOGIN = 'member/GO_LOGIN';
export const GET_SELECT_EMPLOYEE = 'member/GET_SELECT_EMPLOYEE';
export const FIND_ID = 'member/FIND_ID';


const actions = createActions({
    [GET_EMPLOYEE]: () => {},
    [ADD_EMPLOYEE]: () => {},
    [GO_LOGIN]: () => {},
    [GET_SELECT_EMPLOYEE]: () => {},
    [FIND_ID]: () => {}
});

//리듀서
const memberReducer = handleActions({
        [GET_EMPLOYEE]: (state, { payload }) => {
            return payload;
        },
        [GO_LOGIN]: (state, { payload }) => {
            return payload;
        },
        [ADD_EMPLOYEE]: (state, { payload }) => {
            return payload;
        },
        [GET_SELECT_EMPLOYEE]: (state, { payload }) => {
            return payload;
        },
        [FIND_ID]: (state, { payload }) => {            return payload;
        }
    },
    initialState
);

export default memberReducer;