import { GET_EMPLOYEE,
    ADD_EMPLOYEE,
    GO_LOGIN,
    GET_SELECT_EMPLOYEE} from '../modules/MemberModule';
import { decodeJwt } from '../util/tokenUtils';

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
export const callLoginAPI = ({ loginInfo, rememberAccount }) => {
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

                    // 체크박스가 체크되어 있다면 아이디를 로컬 스토리지에 저장
                    if (rememberAccount) {
                        window.localStorage.setItem('savedId', loginInfo.id);
                    } else {
                        // 체크박스가 체크되어 있지 않다면 아이디를 로컬 스토리지에서 제거
                        window.localStorage.removeItem('savedId');
                    }
                    window.alert('로그인 되었습니다.');

                } else {
        window.alert('아이디 또는 비밀번호가 올바르지 않습니다.');
                }
            dispatch({ type: GO_LOGIN, payload: result });

    };
};

//로그아웃
export const callLogoutAPI = () => {

    return async (dispatch, getState) => {
        window.localStorage.removeItem('accessToken');

        dispatch({ type: GO_LOGIN,  payload: '' });
        console.log('[MemberAPICalls] callLogoutAPI RESULT : SUCCESS');
    };
}

export const callSelectEmployeeAPI = (paramValue) => {
    const requestURL = 'http://localhost:8080/member/selectEmployee';

    return async (dispatch) => {
        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(paramValue)
        }).
        then(response => response.json())
        .then(data => {
            console.log(data); 
        });

        dispatch({ type: GET_SELECT_EMPLOYEE, payload: result });
    }
};