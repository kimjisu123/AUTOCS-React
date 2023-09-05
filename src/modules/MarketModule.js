import { createActions, handleActions } from 'redux-actions';

//초기값
const initialState = [];

//액션
export const APPLY_MARKET = 'market/APPLY_MARKET';
export const GET_MARKETSTATEW = 'market/GET_MARKETSTATEW';
export const Post_MARKET = 'market/Post_MARKET';
export const GET_MARKETOUT_STATEW = 'market/Post_MARKET';



const actions = createActions({
    [APPLY_MARKET]: () => {},
    [GET_MARKETSTATEW]: () => {},
    [Post_MARKET]: () => {},
    [GET_MARKETOUT_STATEW]: () => {}
});

//리듀서
const marketReducer = handleActions({
        [APPLY_MARKET]: (state, { payload }) => {
            return payload;
        },
        [GET_MARKETSTATEW]: (state, { payload }) => {
            return payload;
        },
        [Post_MARKET]: (state, { payload }) => {
            return payload;
        },
        [GET_MARKETOUT_STATEW]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default marketReducer;