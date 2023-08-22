import {
    GET_PRODUCT
} from '../modules/StockModule';

export const callProductAPI = () => {
    console.log('[callProductAPI] callProductAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/stock/productdelete`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());

        console.log('[ProduceAPICalls] callProductAPI RESULT : ', result);

        dispatch({ type: GET_PRODUCT,  payload: result.data });

    };
};