import {
    GET_EMPLOYEE,
    ADD_EMPLOYEE,
    GET_SELECT_EMPLOYEE,
    GO_LOGIN, FIND_ID, FIND_PWD, OUT_EMPLOYEE
} from '../modules/MemberModule';
import Swal from 'sweetalert2';

import { decodeJwt } from '../util/tokenUtils';

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

            //비활성화 계정 접근 금지
            const accessToken = window.localStorage.getItem('accessToken');
            const decodedToken = accessToken ? decodeJwt(accessToken) : null;
            if (decodedToken.state === 'N    ') {
                window.alert("비활성화 계정입니다.")
                window.localStorage.removeItem('accessToken');
                return;
            }

            // 체크박스가 체크되어 있다면 아이디를 로컬 스토리지에 저장
            if (rememberAccount) {
                window.localStorage.setItem('savedId', loginInfo.id);
            } else {
                // 체크박스가 체크되어 있지 않다면 아이디를 로컬 스토리지에서 제거
                window.localStorage.removeItem('savedId');
            }

            Swal.fire({
                icon: 'success',
                title: 'Login...',
                text: '로그인 되었습니다.',
            })

        } else {
            Swal.fire({
                icon: 'error',
                title: 'error...',
                text: '아이디 또는 비밀번호가 올바르지 않습니다.',
            })
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

export const callSelectEmployeeAPI = () => {
    const requestURL = 'http://localhost:8080/member/selectEmployee';

    return async (dispatch) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).
        then(response => response.json())
        dispatch({ type: GET_SELECT_EMPLOYEE, payload: result });
    }
};

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

// 직원 비밀번호 찾기
export const callEmployeeFindPwdAPI = (findIdInfo) => {
    const { name, id, employeeEmail } = findIdInfo; // 구조 분해 할당을 통해 변수 추출

    // URL에 파라미터를 포함하여 요청을 생성
    const requestURL = `http://localhost:8080/member/findEmployeePwd?name=${name}&id=${id}&employeeEmail=${employeeEmail}`;

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
                dispatch({ type: FIND_PWD, payload: result });
            } else {
                console.error('Failed to find employee ID');
                window.alert("정보가 다릅니다.")
                return
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
};

//영업점 비밀번호 찾기
export const callStoreFindPwdAPI = (findIdInfo) => {
    const { name, id, employeeEmail } = findIdInfo; // 구조 분해 할당을 통해 변수 추출

    // URL에 파라미터를 포함하여 요청을 생성
    const requestURL = `http://localhost:8080/market/findStorePwd?name=${name}&id=${id}&employeeEmail=${employeeEmail}`;

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
                dispatch({ type: FIND_PWD, payload: result });
            } else {
                console.error('Failed to find Store ID');
                window.alert("정보가 다릅니다.")
                window.location = '/login/findPwd';
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
};

//임시 비밀번호 발급 및 비밀번호 업데이트
export const callChangePwdAPI = (changInfo) => {
    const { Id, email, name } = changInfo;

    console.log("changInfo>>>>>>>>|||||||||||" + JSON.stringify(changInfo));

    // URL에 파라미터를 포함하여 요청을 생성
    const requestURL = `http://localhost:8080/auth/ChangePwd?Id=${Id}&email=${email}&name=${name}`;

    return async () => {
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
            } else {
                console.error('Failed to find Store ID');
                window.location = '/login/fPOk';
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
};

//비활성화(직원)
export const callEmployeeOutAPI = (outInfo) => {
    const requestURL = 'http://localhost:8080/member/employeeOut';
    console.log("outInfo>>>>>>>>>>>>>>>>>>", outInfo)

    return async (dispatch) => {
        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(outInfo)
        }).
        then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch({ type: OUT_EMPLOYEE, payload: data });
                window.alert('계정 비활성화 신청이 완료되었습니다.');
                window.location="/main"
            });
    }
};

// // 비활성화(직원) 진짜 하러 가기
// export const callOutEmployeeOkAPI = (no) => {
//     const requestURL = 'http://localhost:8080/member/employeeOutGo';
//     console.log("employeeNo>>>>>>>>>>>>>>>>>>", no);
//
//     return async () => {
//         const result = await fetch(requestURL, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify(no)
//         }).then(response => response.json());
//     }
// };

// 비활성화(직원) 진짜 하러 가기
export const callOutEmployeeOkAPI = ({ infoToPass }) => {
    const requestURL = 'http://localhost:8080/member/employeeOutGo';

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
                console.error('Error inserting market');
                throw new Error('Error inserting market');
            }
        })
        .then(() => {
            window.alert('계정 비활성화가 완료되었습니다.');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};


