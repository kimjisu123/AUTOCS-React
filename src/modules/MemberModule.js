import { createActions, handleActions } from 'redux-actions';

//초기값
const initialState = [];

//액션
export const ADD_EMPLOYEE = 'member/ADD_EMPLOYEE';
export const GET_EMPLOYEE = 'member/GET_EMPLOYEE';

const actions = createActions({
    // [ADD_EMPLOYEE]: (employeeData) => employeeData,
    [GET_EMPLOYEE]: () =>{}
});

//리듀서
const memberReducer = handleActions(
    {
        [ADD_EMPLOYEE]: (state, { payload }) => {
            return { ...state, employeeData: payload };
        }
    },
    {
        [GET_EMPLOYEE]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default memberReducer;