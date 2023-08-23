import { GET_EMPLOYEE } from '../modules/MemberModule';


export const callInsertEmployeeAPI = ({ infoToPass }) => {
    const requestURL = 'http://localhost:8080/member/insertEmployee';

    return fetch(requestURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(infoToPass),
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.error('Error inserting employee');
                throw new Error('Error inserting employee');
            }
        })
        .then(() => {
            window.alert('사원 등록이 완료되었습니다.');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

export const callGetEmployeeAPI = () => {
    const requestURL = 'http://localhost:8080/member/getEmployee';

     return async (dispatch) => {
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
};