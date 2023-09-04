import {
    GET_VACATION
} from "../modules/VacationModule";
import {decodeJwt} from "../util/tokenUtils";

const accessToken = window.localStorage.getItem('accessToken');
const decodedToken = accessToken ? decodeJwt(accessToken) : null;

export const callGetVacationAPI = () => {

    console.log("들어왔습니다!!");

    const requestURL = `http://localhost:8080/approval/getVacation/${decodedToken.EmployeeNo}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json())
        if(result.status === 200) {
            dispatch({type: GET_VACATION, payload : result});
        }
    }
}