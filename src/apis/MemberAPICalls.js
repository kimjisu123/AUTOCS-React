import {
    GET_EMPLOYEE,
    ADD_EMPLOYEE,
    GO_LOGIN, FIND_ID
} from '../modules/MemberModule';

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

// 직원 아이디 찾기
export const callEmployeeFindIdAPI = (findIdInfo) => {
    const { name, employeeEmail } = findIdInfo; // 구조 분해 할당을 통해 변수 추출

    // URL에 파라미터를 포함하여 요청을 생성
    const requestURL = `http://localhost:8080/member/findEmployeeId?name=${name}&employeeEmail=${employeeEmail}`;

    console.log("findIdInfo>>>>>>>>|||||||||||" + JSON.stringify(findIdInfo));

    return async (dispatch) => {
        try {
            const response = await fetch(requestURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const result = await response.json();
                console.log('response :>>>>>>>>>>>>>>>>', result);
                dispatch({ type: FIND_ID, payload: result });
            } else {
                console.error('Failed to find employee ID');
                window.alert("정보가 다릅니다.")
                window.location = '/login/findId';
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
};

//영업점 아이디 찾기
export const callStoreFindIdAPI = (findIdInfo) => {
    const { name, employeeEmail } = findIdInfo; // 구조 분해 할당을 통해 변수 추출

    const email = employeeEmail;

    // URL에 파라미터를 포함하여 요청을 생성
    const requestURL = `http://localhost:8080/market/findStoreId?name=${name}&email=${email}`;

    return async (dispatch) => {
        try {
            const response = await fetch(requestURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const result = await response.json();
                console.log('response :>>>>>>>>>>>>>>>>', result);
                dispatch({ type: FIND_ID, payload: result });
            } else {
                console.error('Failed to find Store ID');
                window.alert("정보가 다릅니다.")
                window.location = '/login/findId';
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
};