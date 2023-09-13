import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_STASTISTICS           = 'stock/GET_STASTISTICS';


const actions = createActions({
    [GET_STASTISTICS]: () => {},

});

/* 리듀서 */
const statisticsReducer = handleActions(
    {
        [GET_STASTISTICS]: (state, { payload }) => {

            return payload;
        },

    },
    initialState
);

export default statisticsReducer;