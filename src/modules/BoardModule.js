import { createActions, handleActions } from 'redux-actions';

//초기값
const initialState = [];

//액션
export const GET_BOARD = 'board/GET_BOARD';
export const NUM_BOARD = 'board/NUM_BOARD';


const actions = createActions({
    [GET_BOARD]: () => {},
    [NUM_BOARD]: () => {}
});

//리듀서
const boardReducer = handleActions({
        [GET_BOARD]: (state, { payload }) => {
            return payload;
        },
        [NUM_BOARD]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default boardReducer;