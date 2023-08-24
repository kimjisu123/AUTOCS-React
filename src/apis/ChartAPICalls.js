import {GET_CHART} from '../modules/ChartModule';

export const callGetChartAPI = () => {
    const requestURL = `http://localhost:8080/chart`

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());
        if(result.status === 200) {
            dispatch({type: GET_CHART, payload: result.data});
        }
    };
}