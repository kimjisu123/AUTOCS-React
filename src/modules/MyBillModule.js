import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_MY_BILLS            = 'stock/GET_BILLS';


const actions = createActions({
    [GET_MY_BILLS]: () => {},
});

/* 리듀서 */
const myBillReducer = handleActions(
    {
        [GET_MY_BILLS]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export default myBillReducer;