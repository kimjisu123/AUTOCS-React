import { createActions, handleActions } from 'redux-actions';

//초기값
const initialState = [];

//액션
export const GET_COMMENT = 'comment/GET_COMMENT';


const actions = createActions({
    [GET_COMMENT]: () => {}

});

//리듀서
const commentReducer = handleActions({
        [GET_COMMENT]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default commentReducer;