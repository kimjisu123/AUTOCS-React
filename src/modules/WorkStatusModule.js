import { handleActions } from 'redux-actions';
import {callPostAttendanceAPI, callPutQuittingAPI} from "../apis/WorkStatusAPICalls";

const initialState = [];

export const GET_WORK_STATUS= 'workStatus/GET_WORK_STATUS';
export const POST_ATTENDANCE= 'workStatus/POST_ATTENDANCE';
export const PUT_QUTTING= 'workStatus/PUT_WORK_STATUS';

export const workStatusReducer = handleActions(
    {
        [GET_WORK_STATUS]: (state, { payload }) => {

            return payload;
        },
        [POST_ATTENDANCE]: (state, { payload }) => {

            return payload;
        },
        [PUT_QUTTING]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);
