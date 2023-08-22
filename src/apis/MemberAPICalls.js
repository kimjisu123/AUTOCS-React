import { ADD_EMPLOYEE } from '../modules/MemberModule';

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
            dispatch({ type: ADD_EMPLOYEE, payload: infoToPass });
            // Move this to the component after dispatching
            window.location.href = "/registration/registOk";
        } else {
            console.error('Error inserting employee');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};