import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_BILLS            = 'stock/GET_BILL';


const actions = createActions({
    [GET_BILLS]: () => {},
});

/* 리듀서 */
const billReducer = handleActions(
    {
        [GET_BILLS]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export default billReducer;