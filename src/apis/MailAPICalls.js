import  { GET_MAIL, DELETE_MAIL}  from '../modules/MailModule'

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
