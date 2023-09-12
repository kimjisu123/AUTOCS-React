import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_NY_STASTISTICS           = 'stock/GET_NY_STASTISTICS';


const actions = createActions({
    [GET_NY_STASTISTICS]: () => {},

});

/* 리듀서 */
const myStatisticsReducer = handleActions(
    {
        [GET_NY_STASTISTICS]: (state, { payload }) => {

            return payload;
        },

    },
    initialState
);

export default myStatisticsReducer;