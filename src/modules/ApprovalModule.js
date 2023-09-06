import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_APPLINE = 'approval/GET_APPLINE';
export const POST_PURCHASE = 'approval/POST_PURCHASE';
export const POST_TRAFFIC = "approval/POST_PURCHASE";
export const POST_BUSINESS = "approval/POST_BUSINESS";
export const POST_VACATION = "approval/POST_VACATION";
export const POST_PAY = "approval/POST_PAY";
export const GET_VACATION = "approval/GET_VACATION";
export const GET_APP_HOME = "approval/GET_APP_HOME";
export const GET_SEND = "approval/GET_SEND";
export const GET_MY_BUSINESS = "approval/GET_MY_BUSINESS";
export const GET_APP_WAIT = "approval/GET_APP_WAIT";
export const GET_SEE_WAIT = "approval/GET_SEE_WAIT";
export const GET_MY_APP = "approval/GET_MY_APP";
export const GET_MY_SEE = "approval/GET_MY_SEE";

const actions = createActions({
    [GET_APPLINE]: () => {},
    [POST_PURCHASE]: () => {},
    [POST_TRAFFIC]: () => {},
    [POST_BUSINESS]: () => {},
    [POST_VACATION]: () => {},
    [POST_PAY]: () => {},
    [GET_VACATION]: () => {},
    [GET_APP_HOME]: () => {},
    [GET_SEND]: () => {},
    [GET_MY_BUSINESS]: () => {},
    [GET_APP_WAIT]: () => {},
    [GET_SEE_WAIT]: () => {},
    [GET_MY_APP]: () => {},
    [GET_MY_SEE]: () => {},
});

export const approvalReducer = handleActions(
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
        },

        [POST_PAY]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export const vacationReducer = handleActions({
        [GET_VACATION]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export const approvalHomeReducer = handleActions({
        [GET_APP_HOME]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
)

export const approvalSendReducer = handleActions({
        [GET_SEND]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
)

export const approvalMyBusinessReducer = handleActions({
        [GET_MY_BUSINESS]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
)

export const approvalAppWaitReducer = handleActions(
    {
        [GET_APP_WAIT]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
)

export const approvalSeeWaitReducer = handleActions(
    {
        [GET_SEE_WAIT]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
)

export const approvalMyAppReducer = handleActions(
    {
        [GET_MY_APP]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
)

export const approvalMySeeReducer = handleActions(
    {
        [GET_MY_SEE]: (state, { payload }) => {
            return payload
        }
    },
    initialState
)