import { handleActions } from 'redux-actions';

const initialState = [];

export const GET_DEPARTMENT= 'deapartment/GET_DEPARTMENT';
export const GET_PERSONNEL= 'deapartment/GET_PERSONNEL';
export const GET_ACCOUNTING= 'deapartment/GET_ACCOUNTING';
export const GET_MANAGEMENT= 'deapartment/GET_MANAGEMENT';
export const GET_MARKETING= 'deapartment/GET_MARKETING';
export const GET_SALES= 'deapartment/GET_SALES';
export const GET_SERIVCE= 'deapartment/GET_SERIVCE';

export const departmentReducer = handleActions(
    {
        [GET_DEPARTMENT]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export const departmentReducer = handleActions(
    {
        [GET_PERSONNEL]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export const departmentReducer = handleActions(
    {
        [GET_ACCOUNTING]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export const departmentReducer = handleActions(
    {
        [GET_MANAGEMENT]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export const departmentReducer = handleActions(
    {
        [GET_MARKETING]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export const departmentReducer = handleActions(
    {
        [GET_SALES]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

export const departmentReducer = handleActions(
    {
        [GET_SERIVCE]: (state, { payload }) => {

            return payload;
        },
    },
    initialState
);

