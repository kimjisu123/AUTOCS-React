import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_STANDARDS           = 'stock/GET_STANDARDS';
export const POST_STANDARD           = 'stock/POST_STANDARD';
export const PUT_STANDARD           = 'stock/PUT_STANDARD';


const actions = createActions({
    [GET_STANDARDS]: () => {},
    [POST_STANDARD]: () => {},
    [PUT_STANDARD]: () => {},
});

/* 리듀서 */
const standardReducer = handleActions(
    {
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

export default standardReducer;