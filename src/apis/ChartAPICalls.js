import {GET_CHART} from '../modules/ChartModule';

/* 조직도 불러오기 */
export const callGetChartAPI = () => {

    console.log("API 진입");
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/chart`

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json()).catch(response => console.log(response));
        if(result.status === 200) {
            dispatch({type: GET_CHART, payload: result.data});
        }
    };
}
