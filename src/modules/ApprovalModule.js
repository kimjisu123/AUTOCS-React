import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_APPLINE = 'approval/GET_APPLINE';
export const POST_PURCHASE = 'approval/POST_PURCHASE';
export const POST_TRAFFIC = "approval/POST_PURCHASE";
export const POST_BUSINESS = "approval/POST_BUSINESS";
export const POST_VACATION = "approval/POST_VACATION";

const actions = createActions({
    [GET_APPLINE]: () => {},
    [POST_PURCHASE]: () => {},
    [POST_TRAFFIC]: () => {},
    [POST_BUSINESS]: () => {},
    [POST_VACATION]: () => {}
});

const approvalReducer = handleActions(
    {
        [GET_APPLINE]: (state, { payload }) => {
            return payload;
        },

        [POST_PURCHASE]: (state, { payload }) => {
            return payload;
        },

        [POST_TRAFFIC]: (state, { payload }) => {
            return payload;
        },

        [POST_BUSINESS]: (state, { payload }) => {
            return payload;
        },

        [POST_VACATION]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default approvalReducer;