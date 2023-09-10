import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_MY_ORDER_PRODUCT           = 'stock/GET_MY_ORDER_PRODUCT';

const actions = createActions({

    [GET_MY_ORDER_PRODUCT]: () => {},
});

/* 리듀서 */
const myOrderProductReducer = handleActions(
    {
        [GET_MY_ORDER_PRODUCT]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export default myOrderProductReducer;