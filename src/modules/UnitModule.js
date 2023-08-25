import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_UNITS           = 'stock/GET_UNITS';
export const POST_UNIT           = 'stock/POST_UNIT';
export const PUT_UNIT           = 'stock/PUT_UNIT';


const actions = createActions({
    [GET_UNITS]: () => {},
    [POST_UNIT]: () => {},
    [PUT_UNIT]: () => {},
});

/* 리듀서 */
const unitReducer = handleActions(
    {

        [GET_UNITS]: (state, { payload }) => {

            return payload;
        },
        [POST_UNIT]: (state, { payload }) => {

            return payload;
        },
        [PUT_UNIT]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export default unitReducer;