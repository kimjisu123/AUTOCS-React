import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_CATEGORIES           = 'stock/GET_CATEGORIES';
export const POST_CATEGORY           = 'stock/POST_CATEGORY';
export const PUT_CATEGORY           = 'stock/PUT_CATEGORY';



const actions = createActions({
    [GET_CATEGORIES]: () => {},
    [POST_CATEGORY]: () => {},
    [PUT_CATEGORY]: () => {},
});

/* 리듀서 */
const categoryReducer = handleActions(
    {
        [GET_CATEGORIES]: (state, { payload }) => {

            return payload;
        },
        [POST_CATEGORY]: (state, { payload }) => {

            return payload;
        },
        [PUT_CATEGORY]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export default categoryReducer;