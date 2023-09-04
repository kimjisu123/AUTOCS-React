import {
    GET_APPLINE, POST_BUSINESS,
    POST_PURCHASE, POST_TRAFFIC, POST_VACATION
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

/* 여비정산 insert */
export const callPostTrafficAPI = (formData) => {

    const requestURL = "http://localhost:8080/approval/traffic";

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            body: formData
        })
            .then((response => response))
        if(result.status === 201) {
            dispatch({type: POST_TRAFFIC, payload : result});
        }
    }
}

/* 업무보고 insert */
export const callPostBusinessAPI = (formdata) => {

    const requestURL = "http://localhost:8080/approval/business";

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            body: formdata
        })
            .then(response => response)
        if(result.status === 201) {
            dispatch({type: POST_BUSINESS, payload : result});
        }
    }
}

/* 휴가 신청 insert */

export const callPostVacationAPI = (formdata) => {

    const requestURL = "http://localhost:8080/approval/vacation";

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            body: formdata
        })
            .then(response => response)
        if(result.status === 201) {
            dispatch({type: POST_VACATION, payload : result});
        }
    }
}