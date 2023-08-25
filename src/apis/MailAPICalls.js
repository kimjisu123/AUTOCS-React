import  { GET_MAIL, GET_MAILBOOKMARK, DELETE_MAIL, PUT_MAIL}  from '../modules/MailModule'

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
        dispatch({ type: GET_MAILBOOKMARK, payload: result });
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