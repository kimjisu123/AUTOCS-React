
import {GET_MEMBERINFO, POST_CHECKPWD} from "../modules/MypageModule";


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



    // return async (dispatch) => {
    //     try {
    //         const result = await fetch(requestURL, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             },
    //             body: JSON.stringify({ memberNo, checkpw: checkPw })
    //         })
    //         console.log('패스워드 확인 API진입2 >>>>>>');
    //         if(result.ok) {
    //             const data = await result.json();
    //             console.log('패스워드 확인 결과 >>>>>>', data);
    //             dispatch({type: POST_CHECKPWD, payload: data});
    //         } else {
    //             console.error('Error adding Todo:', result.status);
    //         }
    //     } catch (error) {
    //         console.error('Error adding Todo:', error);
    //     }
    // }
};