import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_PRODUCT            = 'stock/GET_PRODUCT';
export const GET_PRODUCTS           = 'stock/GET_PRODUCTS';
export const POST_PRODUCT           = 'stock/POST_PRODUCTS';
export const PUT_PRODUCT           = 'stock/PUT_PRODUCT';
export const GET_IO           = 'stock/GET_IO';
export const POST_IO           = 'stock/POST_IO';
export const GET_IO_GROUP           = 'stock/GET_IO_GROUP';


const actions = createActions({
    [GET_PRODUCT]: () => {},
    [GET_PRODUCTS]: () => {},
    [POST_PRODUCT]: () => {},
    [PUT_PRODUCT]: () => {},
    [GET_IO]: () => {},
    [POST_IO]: () => {},
    [GET_IO_GROUP]: () => {},
});

/* 리듀서 */
const productReducer = handleActions(
    {
        [GET_PRODUCT]: (state, { payload }) => {

            return payload;
        },
        [GET_PRODUCTS]: (state, { payload }) => {

            return payload;
        },
        [POST_PRODUCT]: (state, { payload }) => {

            return payload;
        },
        [PUT_PRODUCT]: (state, { payload }) => {

            return payload;
        },
        [GET_IO]: (state, { payload }) => {

            return payload;
        },
        [POST_IO]: (state, { payload }) => {

            return payload;
        },
        [GET_IO_GROUP]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export default productReducer;