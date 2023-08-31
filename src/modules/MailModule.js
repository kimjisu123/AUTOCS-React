import { createActions, handleActions } from 'redux-actions';

//초기값
const initialState = [];

//액션
export const GET_MAIL = 'mail/GET_MAIL';

export const GET_MAIL_BOOKMARK = "mail/GET_MAILBOOKMARK";

export const GET_MAIL_SENT = "mail/GET_MAIL_SENT";

export const POST_MAIL_SEND = "mail/POST_MAIL_SEND";

export const DELETE_MAIL ='mail/DELETE_MAIL';

export const DELETE_SELECT_MAIL = 'mail/DELETE_SELECT_MAIL';

export const PUT_MAIL = 'mail/PUT_MAIL';



//리듀서
export const mailReducer = handleActions(
    {
        [GET_MAIL]: (state, { payload }) => {
            return payload;
        },
        [PUT_MAIL] : (state, { payload }) =>{
            return payload
        },
        [DELETE_MAIL] : (state, { payload }) =>{
            return payload
        },
        [DELETE_SELECT_MAIL] : (state, { payload }) =>{
            return payload
        },
    },
    initialState
);

export const bookmarkReducer = handleActions(
    {
        [GET_MAIL_BOOKMARK]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export const mailSentReducer = handleActions(
    {
        [GET_MAIL_SENT]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);
