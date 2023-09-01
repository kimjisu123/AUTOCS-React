import  { GET_WORK_STATUS  } from '../modules/WorkStatusModule'

export const callGetWorkStatusAPI = () => {
    const requestURL = "http://localhost:8080/workStatus";

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
