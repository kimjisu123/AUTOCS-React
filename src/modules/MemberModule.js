import { createActions, handleActions } from 'redux-actions';

//초기값
const initialState = [];

//액션
export const ADD_EMPLOYEE = 'member/ADD_EMPLOYEE';
export const GET_EMPLOYEE = 'member/GET_EMPLOYEE';
export const GET_SELECT_EMPLOYEE = 'member/GET_SELECT_EMPLOYEE';

const actions = createActions({
    [GET_EMPLOYEE]: () => {},
    [GET_SELECT_EMPLOYEE]: () => {},
    [ADD_EMPLOYEE]: () => {}
});

//리듀서
const memberReducer = handleActions(
    {
        [GET_EMPLOYEE]: (state, { payload }) => {
            return payload;
        },
        [GET_SELECT_EMPLOYEE]: (state, { payload }) => {
            return payload;
        }, [ADD_EMPLOYEE]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default memberReducer;