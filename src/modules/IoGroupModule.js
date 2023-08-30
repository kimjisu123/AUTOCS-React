import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];


/* 액션 */
export const GET_IO_GROUP           = 'stock/GET_IO_GROUP';



const actions = createActions({
    [GET_IO_GROUP]: () => {},

});

/* 리듀서 */
const ioGroupReducer = handleActions(
    {
        [GET_IO_GROUP]: (state, { payload }) => {

            return payload;
        },

    },
    initialState
);

export default ioGroupReducer;