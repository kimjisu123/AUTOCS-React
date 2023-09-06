
import {GET_MEMBERINFO, GET_PROFILE, POST_CHECKPWD} from "../modules/MypageModule";
import Swal from 'sweetalert2';



// 한명의 회원정보 확인하기 API
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


// 비밀번호 확인 API
export const callPostPwdCheckAPI = (memberNo,checkPw) => {

    const requestURL = `http://localhost:8080/mypage/checkpwd?memberNo=${memberNo}&checkpw=${checkPw}`;
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

        const requestURL = `http://localhost:8080/mypage/changepwd?memberNo=${memberNo}&newpw=${newPwd}`;
        console.log('새  패스워드 변경  API진입? >>>>>>');
        console.log('새 패스워드 >>>>>>', newPwd);
        console.log('멤버번호 >>>>>>', memberNo);

        return fetch(requestURL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({memberNo: memberNo, newpw: newPwd}),
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
                        window.location="/main";
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
        const requestURL = 'http://localhost:8080/mypage/updatememberinfo';

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
                window.alert('회원 정보 변경완료');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    // 한명의 회원정보 확인하기 API
    export const callGetPofileAPI = (memberNo) => {
        const requestURL = `http://localhost:8080/mypage/img/${memberNo}`;

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

