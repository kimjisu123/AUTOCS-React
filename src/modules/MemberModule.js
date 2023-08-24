import { createActions, handleActions } from 'redux-actions';

//초기값
const initialState = [];

//액션
export const ADD_EMPLOYEE = 'member/ADD_EMPLOYEE';
export const GET_EMPLOYEE = 'member/GET_EMPLOYEE';
export const GO_LOGIN = 'member/GO_LOGIN';

const actions = createActions({
    [GET_EMPLOYEE]: () => {},
    [ADD_EMPLOYEE]: () => {},
    [GO_LOGIN]: () => {}
});

//리듀서
const memberReducer = handleActions(
    {
        [GET_EMPLOYEE]: (state, { payload }) => {
            return payload;
        }
    },
    {
        [GO_LOGIN]: (state, { payload }) => {
            return payload;
        }
    },
    {
        [ADD_EMPLOYEE]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default memberReducer;