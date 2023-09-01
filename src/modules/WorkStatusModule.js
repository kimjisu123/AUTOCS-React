import { handleActions } from 'redux-actions';

const initialState = [];

export const GET_WORK_STATUS= 'workStatus/GET_WORK_STATUS';

export const workStatusReducer = handleActions(
    {
        [GET_WORK_STATUS]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

