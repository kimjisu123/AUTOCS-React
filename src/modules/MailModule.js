import { createActions, handleActions } from 'redux-actions';

//초기값
const initialState = [];

//액션
export const GET_MAIL = 'mail/GET_MAIL';

export const DELETE_MAIL ='mail/DELETE_MAIL';

const actions = createActions({
    [GET_MAIL]: () =>{},
});

//리듀서
const mailReducer = handleActions(
    {
        [GET_MAIL]: (state, { payload }) => {
            return payload;
        }
    },
    {
        [DELETE_MAIL] : (state, { payload }) =>{
            return payload
        }
    },
    initialState
);
export default mailReducer;