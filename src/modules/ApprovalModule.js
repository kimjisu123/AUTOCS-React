import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_APPLINE = 'approval/GET_APPLINE';

const actions = createActions({
    [GET_APPLINE]: () => {}
});

const approvalReducer = handleActions(
    {
        [GET_APPLINE]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default approvalReducer;