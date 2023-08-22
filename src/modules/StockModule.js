import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_PRODUCT= 'stock/GET_PRODUCT';

const actions = createActions({
    [GET_PRODUCT]: () => {},
});

/* 리듀서 */
const stockReducer = handleActions(
    {
        [GET_PRODUCT]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default stockReducer;