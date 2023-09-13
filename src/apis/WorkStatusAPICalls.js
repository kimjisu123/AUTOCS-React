import {GET_WORK_STATUS, POST_ATTENDANCE, PUT_QUTTING} from '../modules/WorkStatusModule'
import {decodeJwt} from "../util/tokenUtils";
const accessToken = window.localStorage.getItem('accessToken');
const decodedToken = accessToken ? decodeJwt(accessToken) : null;

export const callGetWorkStatusAPI = () => {
    const requestURL = `http://localhost:8080/workStatus/${decodedToken.EmployeeNo}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
        }).then(response => response.json())
        dispatch({ type: GET_WORK_STATUS, payload: result });
    }
};

export const callPostAttendanceAPI = () => {
    const requestURL = `http://localhost:8080/attendance/${decodedToken.EmployeeNo}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
        }).then(response => response.json())
        dispatch({ type: POST_ATTENDANCE, payload: result });
    }
};

export const callPutQuittingAPI = () => {
    const requestURL = `http://localhost:8080/quitting/${decodedToken.EmployeeNo}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
        }).then(response => response.json())
        dispatch({ type: PUT_QUTTING, payload: result });
    }
};


