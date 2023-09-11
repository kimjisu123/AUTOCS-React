import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_REFUND          = 'stock/GET_REFUND';

const actions = createActions({

    [GET_REFUND]: () => {},
});

/* 리듀서 */
const refundReducer = handleActions(
    {
        [GET_REFUND]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export default refundReducer;