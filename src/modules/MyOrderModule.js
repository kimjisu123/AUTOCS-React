import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_MY_ORDERS            = 'stock/GET_MY_ORDERS';


const actions = createActions({
    [GET_MY_ORDERS]: () => {},
});

/* 리듀서 */
const myOrderReducer = handleActions(
    {
        [GET_MY_ORDERS]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export default myOrderReducer;