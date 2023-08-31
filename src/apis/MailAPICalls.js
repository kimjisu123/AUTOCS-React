import  { GET_MAIL, GET_MAIL_BOOKMARK, GET_MAIL_SENT, DELETE_MAIL, PUT_MAIL, POST_MAIL_SEND, DELETE_SELECT_MAIL}  from '../modules/MailModule'
import { decodeJwt } from '../../src/util/tokenUtils';

const accessToken = window.localStorage.getItem('accessToken');
const decodedToken = accessToken ? decodeJwt(accessToken) : null;


export const callGetMailAPI = () => {
    const requestURL = 'http://localhost:8080/mail';

     return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(response => response.json());
        dispatch({ type: GET_MAIL, payload: result });
    }
};

export const callGetMailBookmarkAPI = () => {
    const requestURL = 'http://localhost:8080/mailBookmark';

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(response => response.json());
        dispatch({ type: GET_MAIL_BOOKMARK, payload: result });
    }
};

export const callGetMailSentAPI = (employeeNo) => {
    const requestURL = `http://localhost:8080/mailSent/${employeeNo}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(response => response.json())
            .then(value => console.log(value));
        dispatch({ type: GET_MAIL_SENT, payload: result });
    }
};


export const callDELETEMailAPI = () =>{
    const requestURL = 'http://localhost:8080/mail'

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            },
        });
        dispatch({ type: DELETE_MAIL, payload: result });
     }
}

export const callSeleteDELETEMailAPI = (paramValue) =>{
    const requestURL = 'http://localhost:8080/selectMail'

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'DELETE',
            headers: {
                'Accept': '*/*',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(paramValue)
        });
        dispatch({ type: DELETE_SELECT_MAIL, payload: result });
    }
}


export const callPutMailAPI = (paramValue) =>{
    const requestURL = 'http://localhost:8080/mail'

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(paramValue)
        });
        dispatch({ type: PUT_MAIL, payload: result });
    }
}


export const callPostMailAPI = (paramValue) =>{
    const requestURL = 'http://localhost:8080/mail'

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(paramValue)
        });
        dispatch({ type: POST_MAIL_SEND, payload: result });
    }
}