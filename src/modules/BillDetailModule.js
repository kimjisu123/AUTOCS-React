import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_BILL            = 'stock/GET_BILL';


const actions = createActions({
    [GET_BILL]: () => {},
});

/* 리듀서 */
const billDetailReducer = handleActions(
    {
        [GET_BILL]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export default billDetailReducer;