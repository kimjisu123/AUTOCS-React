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

const actions = createActions({
    [GET_APPLINE]: () => {},
    [POST_PURCHASE]: () => {},
    [POST_TRAFFIC]: () => {},
    [POST_BUSINESS]: () => {},
    [POST_VACATION]: () => {},
    [POST_PAY]: () => {},
    [GET_VACATION]: () => {},
    [GET_APP_HOME]: () => {},
    [GET_SEND]: () => {}
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