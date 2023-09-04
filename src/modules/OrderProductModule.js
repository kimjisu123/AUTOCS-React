import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const PUT_ORDER           = 'stock/PUT_ORDER';
export const POST_ORDER_PRODUCT           = 'stock/POST_ORDER_PRODUCT';
// export const PUT_ORDER_PRODUCT           = 'stock/PUT_ORDER_PRODUCT';

const actions = createActions({
    [PUT_ORDER]: () => {},
    [POST_ORDER_PRODUCT]: () => {},
    // [PUT_ORDER_PRODUCT]: () => {},
});

/* 리듀서 */
const orderProductReducer = handleActions(
    {
        [PUT_ORDER]: (state, { payload }) => {

            return payload;
        },
        [POST_ORDER_PRODUCT]: (state, { payload }) => {

            return payload;
        },
        // [PUT_ORDER_PRODUCT]: (state, { payload }) => {
        //
        //     return payload;
        // },
    },
    initialState
);

export default orderProductReducer;