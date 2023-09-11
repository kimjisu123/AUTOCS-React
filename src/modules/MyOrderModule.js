import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_MY_ORDERS            = 'stock/GET_MY_ORDERS';
export const POST_BILL            = 'stock/POST_BILL';


const actions = createActions({
    [GET_MY_ORDERS]: () => {},
    [POST_BILL]: () => {},
});

/* 리듀서 */
const myOrderReducer = handleActions(
    {
        [GET_MY_ORDERS]: (state, { payload }) => {

            return payload;
        },
        [POST_BILL]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export default myOrderReducer;