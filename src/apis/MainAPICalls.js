

// 회원 한명 메인 일정 조회
import {GET_DAILY} from "../modules/MainModule";

export const callGetDailyMainAPI = (memberNo) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/mainContent/shortDaily/${memberNo}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json());

        console.log('회원값가지고오기 결과 >>>>>>', result);
        dispatch({type: GET_DAILY, payload: result});
    }
};
