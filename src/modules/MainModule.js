import { createActions, handleActions } from 'redux-actions';


//초기값
const initialState = [];

//액션

export const GET_DAILY = 'main/GET_DAILY';

const actions = createActions({
    [GET_DAILY]: () => {},

});



//리듀서
const mainReducer = handleActions({
        [GET_DAILY]: (state, { payload }) => {
            return payload;
        },

    },
    initialState
);
export default mainReducer;

