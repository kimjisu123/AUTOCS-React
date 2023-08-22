import { GET_MAIL } from '../modules/MailModule


export const callGetMailAPI = () => {
    const requestURL = 'http://localhost:8080/mail';

    // try {
     return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(response => response.json());

         console.log('response :>>>>>>>>>>>>>>>>', result);
         dispatch({ type: GET_MAIL, payload: result });
     }

};