import { GET_EMPLOYEE,
         ADD_EMPLOYEE,
         GO_LOGIN
        } from '../modules/MemberModule';
import { useDispatch } from 'react-redux';


//직원 등록 및 아이디/비번 생성
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

//직원 조회
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

// 로그인
export const callLoginAPI = ({ loginInfo }) => {
    const requestURL = 'http://localhost:8080/auth/login';

    return async (dispatch, getState) => {
            const result = await fetch(requestURL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(loginInfo),
            }).then(response => response.json());


                console.log('[MemberAPICalls] callLoginAPI RESULT : ', result);
                if(result.status === 200){
                    window.localStorage.setItem('accessToken', result.data.accessToken);
                    window.alert('로그인 되었습니다.');
                   // window.location ="/main"
                }
            dispatch({ type: GO_LOGIN, payload: result });

    };
};

//로그아웃
export const callLogoutAPI = () => {

    return async (dispatch, getState) => {

        dispatch({ type: GO_LOGIN,  payload: '' });
        console.log('[MemberAPICalls] callLogoutAPI RESULT : SUCCESS');
    };
}
