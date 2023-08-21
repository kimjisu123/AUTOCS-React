import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const ADD_EMPLOYEE = 'member/insertEmployee';

const actions = createActions({
    [ADD_EMPLOYEE]: (employeeData) => employeeData
});

const memberReducer = handleActions(
    {
        [ADD_EMPLOYEE]: (state, { payload }) => {
            return [...state, payload];
        }
    },
    initialState
);

export default memberReducer;