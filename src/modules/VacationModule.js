import { createActions, handleActions} from "redux-actions";

const initialState = [];

export const GET_VACATION = 'vacation/GET_VACATION';

const actions = createActions({
    [GET_VACATION]: () => {}
})

const vacationReducer = handleActions({
    [GET_VACATION]: (state, { payload }) => {
        return payload;
    }
},
    initialState)

export default vacationReducer;