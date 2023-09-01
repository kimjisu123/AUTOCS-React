import {
    GET_APPLINE,
    POST_PURCHASE
} from '../modules/ApprovalModule'

/* 결재선 트리뷰 불러오기 */
export const callGetAppLineAPI = () => {

    console.log("AppLine API 진입");
    const requestURL = 'http://localhost:8080/approval/appLine';

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json()).catch(response => console.log("response : " + response));
        if(result.status === 200) {
            dispatch({type: GET_APPLINE, payload: result.data});
            console.log(result.data);
        } else {
            console.log("fail");
        }
    }
}

/* 구매요청서 insert */
export const callPostPurchaseAPI = (formData) => {

    const requestURL = 'http://localhost:8080/approval/purchase';

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            body: formData
        })
            .then(response => response)
        if(result.status === 201) {
            dispatch({type: POST_PURCHASE, payload: result});
        }
    }
}