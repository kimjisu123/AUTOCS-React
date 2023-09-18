
import {GET_MEMBERINFO, GET_PROFILE, GET_STOREINFO, POST_CHECKPWD} from "../modules/MypageModule";
import Swal from 'sweetalert2';
import {callLogoutAPI} from "./MemberAPICalls";



// 한명의 회원정보 확인하기 API
export const callGetMemberInfoAPI = (memberNo) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/member/${memberNo}`;

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


// 매장 정보 확인하기 API
export const callGetSToreInfoAPI = (memberNo) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/member/store/${memberNo}`;

    console.log('요청 URL:', requestURL); // URL 출력
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json());

        console.log('마이페이지에 매장 정보가지고오기 결과 >>>>>>', result);
        dispatch({type: GET_STOREINFO, payload: result});
    }
};




// 비밀번호 확인 API
export const callPostPwdCheckAPI = (memberNo,checkPw) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/mypage/checkpwd?memberNo=${memberNo}&checkpw=${checkPw}`;
    console.log('패스워드 확인 API진입? >>>>>>');
    console.log('패스워드 >>>>>>',checkPw);
    console.log('멤버번호 >>>>>>',memberNo);

    return fetch(requestURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ memberNo: memberNo, checkpw: checkPw }),
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.error('Error checking password');
                throw new Error('Error checking password');
            }
        })
        .then((data) => {
            console.log('패스워드 확인 결과 >>>>>>', data.data);
            return data.data;
            // window.location="/mypage";
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

// 비밀번호 변경 API
    export const callPutChangePwdAPI = (memberNo,newPwd) => {

        const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/mypage/changepwd`;
        console.log('새  패스워드 변경  API진입? >>>>>>');
        console.log('새 패스워드 >>>>>>', newPwd);
        console.log('멤버번호 >>>>>>', memberNo);

        return fetch(requestURL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({no: memberNo, pwd: newPwd}),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error('Error  new password');
                    throw new Error('Error new password');
                }
            })
            .then((data) => {
                console.log('패스워드 확인 결과 >>>>>>', data.data);
                // window.location="/mypage";
                if(data.data){
                    Swal.fire({
                        icon: 'success',
                        title: '비밀번호 변경',
                        text: '비밀번호가 변경되었습니다.',
                    }).then((value) => {
                            callLogoutAPI();
                        }
                    )
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: '비밀번호 변경.',
                        text: '비밀번호 변경에 실패했습니다.',
                    })
                }
                return data.data;

            })
            .catch((error) => {
                console.error('Error:', error);
            });

    };

    // 회원정보 변경 API
    export const callChangeInfoAPI = ({formData}) =>{
        const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/mypage/updatememberinfo`;

        console.log("formData=========>" + formData);

        // for (const entry of formData.entries()) {
        //     console.log(entry[0], entry[1]);
        // }
        console.log("formData======================");
        return fetch(requestURL, {
            method: 'PUT',
            headers: {
                "Accept": "*/*",
            },
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error('Error changeInfo');
                    throw new Error('Error changeInfo');
                }
            })
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: '회원 정보 변경',
                    text: '회원정보가 변경되었습니다.',
                })
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: '회원 정보 변경.',
                    text: '회원 정보 변경에 실패했습니다.',
                })
                console.error('Error:', error);
            });
    }

    // 한명의 회원정보 확인하기 API
    export const callGetPofileAPI = (memberNo) => {
        const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/mypage/img/${memberNo}`;

        return async (dispatch, getState) => {
            const result = await fetch(requestURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => response.json());

            console.log('회원사진 가지고 오기 >>>>>>', result);
            dispatch({type: GET_PROFILE, payload: result});
        }
    };



// 매장 정보 변경 API
export const callPutSToreInfoAPI = ({formData}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/mypage/updatestoreinfo`;
    console.log('새  매장정보 변경  API진입? >>>>>>');
    console.log("formData=========>" + formData);


    // formData 내용 출력
    for (const pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
    }

    return fetch(requestURL, {
        method: 'PUT',
        headers: {
            // 'Content-Type': 'application/json',
        },
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.error('Error  매장정보 수정 에러');
                throw new Error('Error 매장정보 수정 에러');
            }
        })
        .then(()=> {

                Swal.fire({
                    icon: 'success',
                    title: '매장 정보 변경',
                    text: '매장정보가 변경되었습니다.',
                })
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: '매장 정보 변경.',
                text: '매장 정보 변경에 실패했습니다.',
            })
            console.error('Error:', error);
        });

};


