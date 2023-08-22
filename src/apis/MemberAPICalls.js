import { ADD_EMPLOYEE } from '../modules/MemberModule';
import { GET_EMPLOYEE } from '../modules/MemberModule';


export const callInsertEmployeeAPI = async (infoToPass, dispatch) => {
    const requestURL = 'http://localhost:8080/member/insertEmployee';

    try {
        const response = await fetch(requestURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(infoToPass),
        });

        if (response.ok) {
            dispatch({type: ADD_EMPLOYEE, payload: infoToPass});
            window.alert('사원 등록이 완료되었습니다.');
            window.location.href = "/registration/registOk";
        } else {
            console.error('Error inserting employee');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

export const callGetEmployeeAPI = () => {
    const requestURL = 'http://localhost:8080/member/getEmployee';

    // try {
     return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(response => response.json());

         console.log('response :>>>>>>>>>>>>>>>>', result);
         dispatch({ type: GET_EMPLOYEE, payload: result });
     }
        // if (response.ok) {
        //     const employeeList = await response.json();
        //     console.log('response:', employeeList);
        //     dispatch({ type: GET_EMPLOYEE, payload: employeeList });
        // } else {
        //     console.error('Error getting employee');
        // }
    // } catch (error) {
    //     console.error('Error:', error);
    // }
};