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
export const GET_BUSINESS_DOC = "approval/GET_BUSINESS_DOC";
export const GET_TRAFFIC_DOC = "approval/GET_TRAFFIC_DOC";
export const GET_PURCHASE_DOC = "approval/GET_PURCHASE_DOC";
export const GET_VACATION_DOC = "approval/GET_VACATION_DOC";
export const GET_PAY_DOC = "approval/GET_PAY_DOC";
export const GET_APP_YN = "approval/GET_APP_YN";
export const DELETE_DOCUMENT = "approval/DELETE_DOCUMENT";
export const PUT_APPROVAL = "approval/PUT_APPROVAL";

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
    [GET_BUSINESS_DOC]: () => {},
    [GET_TRAFFIC_DOC]: () => {},
    [GET_PURCHASE_DOC]: () => {},
    [GET_VACATION_DOC]: () => {},
    [GET_PAY_DOC]: () => {},
    [GET_APP_YN]: () => {},
    [DELETE_DOCUMENT]: () => {},
    [PUT_APPROVAL]: () => {},

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
        },

        [PUT_APPROVAL]: (state, { payload }) => {
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

export const approvalBusinessDocReducer = handleActions(
    {
        [GET_BUSINESS_DOC]: (state, { payload }) => {
            return payload
        }
    },
    initialState
)

export const approvalTrafficDocReducer = handleActions(
    {
        [GET_TRAFFIC_DOC]: (state, { payload }) => {
            return payload
        }
    },
    initialState
)

export const approvalPurchaseDocReducer = handleActions(
    {
        [GET_PURCHASE_DOC]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
)

export const approvalVacationDocReducer = handleActions(
    {
        [GET_VACATION_DOC]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
)

export const approvalPayDocReducer = handleActions(
    {
        [GET_PAY_DOC]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
)

export const approvalDocumentAppYNReducer = handleActions(
    {
        [GET_APP_YN]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
)

export const approvalDeleteDocumentReducer = handleActions(
    {
        [DELETE_DOCUMENT]: (state, { payload }) => {

        }
    },
    initialState
)