import { GET_APPLINE } from '../modules/ApprovalModule'

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