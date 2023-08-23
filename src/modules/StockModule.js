import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_PRODUCT            = 'stock/GET_PRODUCT';
export const GET_PRODUCTS           = 'stock/GET_PRODUCTS';
export const GET_CATEGORIES           = 'stock/GET_CATEGORIES';
export const POST_CATEGORY           = 'stock/POST_CATEGORY';
export const PUT_CATEGORY           = 'stock/PUT_CATEGORY';
export const GET_STANDARDS           = 'stock/GET_STANDARDS';
export const POST_STANDARD           = 'stock/POST_STANDARD';
export const PUT_STANDARD           = 'stock/PUT_STANDARD';

const actions = createActions({
    [GET_PRODUCT]: () => {},
    [GET_PRODUCTS]: () => {},
    [GET_CATEGORIES]: () => {},
    [POST_CATEGORY]: () => {},
    [PUT_CATEGORY]: () => {},
    [GET_STANDARDS]: () => {},
    [POST_STANDARD]: () => {},
    [PUT_STANDARD]: () => {},
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
        [GET_CATEGORIES]: (state, { payload }) => {

            return payload;
        },
        [POST_CATEGORY]: (state, { payload }) => {

            return payload;
        },
        [PUT_CATEGORY]: (state, { payload }) => {

            return payload;
        },
        [GET_STANDARDS]: (state, { payload }) => {

            return payload;
        },
        [POST_STANDARD]: (state, { payload }) => {

            return payload;
        },
        [PUT_STANDARD]: (state, { payload }) => {

            return payload;
        },

    },
    initialState
);

export default stockReducer;