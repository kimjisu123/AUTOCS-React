import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_CHART = 'chart/GET_CHART';

const actions = createActions({
    [GET_CHART]: () => {},
});


const chartReducer = handleActions(
    {
        [GET_CHART]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);

export default chartReducer;