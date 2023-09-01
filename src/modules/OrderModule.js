import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_ORDERS            = 'stock/GET_ORDERS';
export const GET_LAST_ORDER_NO            = 'stock/GET_LAST_ORDER_NO';
export const POST_ORDER           = 'stock/POST_ORDER';

const actions = createActions({
    [GET_ORDERS]: () => {},
    [GET_LAST_ORDER_NO]: () => {},
    [POST_ORDER]: () => {},
});

/* 리듀서 */
const orderReducer = handleActions(
    {
        [GET_ORDERS]: (state, { payload }) => {

            return payload;
        },
        [GET_LAST_ORDER_NO]: (state, { payload }) => {

            return payload;
        },
        [POST_ORDER]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export default orderReducer;