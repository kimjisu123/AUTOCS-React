import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_LAST_ORDER_NO            = 'stock/GET_LAST_ORDER_NO';


const actions = createActions({
    [GET_LAST_ORDER_NO]: () => {},
});

/* 리듀서 */
const orderNumberReducer = handleActions(
    {
        [GET_LAST_ORDER_NO]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export default orderNumberReducer;