import {GET_TODO_MEMBER} from "../modules/TodoModule";
import {GET_MEMBERINFO} from "../modules/MypageModule";


export const callGetMemberInfoAPI = (memberNo) => {
    const requestURL = `http://localhost:8080/member/${memberNo}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json());

        console.log('마이페이지에 회원값가지고오기 결과 >>>>>>', result);
        dispatch({type: GET_MEMBERINFO, payload: result});
    }
};
