import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_PRODUCT            = 'stock/GET_PRODUCT';
export const GET_PRODUCTS           = 'stock/GET_PRODUCTS';
export const POST_CATEGORY           = 'stock/POST_CATEGORY';

const actions = createActions({
    [GET_PRODUCT]: () => {},
    [GET_PRODUCTS]: () => {},
    [POST_CATEGORY]: () => {},
});

/* 리듀서 */
const stockReducer = handleActions(
    {
        [GET_PRODUCT]: (state, { payload }) => {

            return payload;
        },
        [GET_PRODUCTS]: (state, { payload }) => {

            return payload;
        },
        [POST_CATEGORY]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export default stockReducer;