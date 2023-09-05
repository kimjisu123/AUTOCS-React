import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_IO           = 'stock/GET_IO';
export const POST_IO           = 'stock/POST_IO';


const actions = createActions({
    [GET_IO]: () => {},
    [POST_IO]: () => {},

});

/* 리듀서 */
const ioReducer = handleActions(
    {
        [GET_IO]: (state, { payload }) => {

            return payload;
        },
        [POST_IO]: (state, { payload }) => {

            return payload;
        },

    },
    initialState
);

export default ioReducer;