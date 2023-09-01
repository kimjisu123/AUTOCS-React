import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_APPLINE = 'approval/GET_APPLINE';
export const POST_PURCHASE = 'approval/POST_PURCHASE';

const actions = createActions({
    [GET_APPLINE]: () => {},
    [POST_PURCHASE]: () => {}
});

const approvalReducer = handleActions(
    {
        [GET_APPLINE]: (state, { payload }) => {
            return payload;
        },

        [POST_PURCHASE]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default approvalReducer;