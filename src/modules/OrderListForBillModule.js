import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_ORDER_FOR_BILL           = 'stock/GET_ORDER_FOR_BILL';

const actions = createActions({

    [GET_ORDER_FOR_BILL]: () => {},
});

/* 리듀서 */
const orderForBillReducer = handleActions(
    {
        [GET_ORDER_FOR_BILL]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export default orderForBillReducer;