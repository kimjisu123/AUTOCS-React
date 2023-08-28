import { createActions, handleActions } from 'redux-actions';

//초기값
const initialState = [];

//액션
export const APPLY_MARKET = 'market/APPLY_MARKET';


const actions = createActions({
    [APPLY_MARKET]: () => {},
});

//리듀서
const marketReducer = handleActions({
        [APPLY_MARKET]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default marketReducer;