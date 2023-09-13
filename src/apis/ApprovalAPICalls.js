import {
    GET_APPLINE,
    POST_BUSINESS,
    POST_PURCHASE,
    POST_TRAFFIC,
    POST_VACATION,
    GET_VACATION,
    GET_APP_HOME,
    GET_SEND,
    GET_MY_BUSINESS,
    GET_APP_WAIT,
    GET_SEE_WAIT,
    GET_MY_APP,
    GET_MY_SEE,
    GET_BUSINESS_DOC,
    GET_TRAFFIC_DOC,
    GET_PURCHASE_DOC,
    GET_VACATION_DOC,
    GET_PAY_DOC,
    GET_APP_YN,
    PUT_APPROVAL,
    PUT_BACK_APPROVAL, GET_FILE
} from '../modules/ApprovalModule'
import {decodeJwt} from "../util/tokenUtils";

/* 결재선 트리뷰 불러오기 */
export const callGetAppLineAPI = () => {

    console.log("AppLine API 진입");
    const requestURL = 'http://localhost:8080/approval/appLine';

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json()).catch(response => console.log("response : " + response));
        if(result.status === 200) {
            dispatch({type: GET_APPLINE, payload: result.data});
            console.log(result.data);
        } else {
            console.log("fail");
        }
    }
}

/* 구매요청서 insert */
export const callPostPurchaseAPI = (formData) => {

    const requestURL = 'http://localhost:8080/approval/purchase';

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            body: formData
        })
            .then(response => response)
        if(result.status === 201) {
            dispatch({type: POST_PURCHASE, payload: result});
        }
    }
}

/* 여비정산 insert */
export const callPostTrafficAPI = (formData) => {

    const requestURL = "http://localhost:8080/approval/traffic";

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            body: formData
        })
            .then((response => response))
        if(result.status === 201) {
            dispatch({type: POST_TRAFFIC, payload : result});
        }
    }
}

/* 업무보고 insert */
export const callPostBusinessAPI = (formdata) => {

    const requestURL = "http://localhost:8080/approval/business";

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            body: formdata
        })
            .then(response => response)
        if(result.status === 201) {
            dispatch({type: POST_BUSINESS, payload : result});
        }
    }
}

/* 휴가 신청 insert */

export const callPostVacationAPI = (formdata) => {

    console.log(".vacation")

    const requestURL = "http://localhost:8080/approval/vacation";

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            body: formdata
        })
            .then(response => response)
        if(result.status === 201) {
            dispatch({type: POST_VACATION, payload : result});
        }
    }
}

/* 비용 청구 insert */
export const callPostPayAPI = (formdata) => {

    const requestURL = "http://localhost:8080/approval/pay";

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            body: formdata
        })
            .then(response => response)
        if(result.status === 201) {
            dispatch({type: POST_VACATION, payload : result});
        }
    }
}

const accessToken = window.localStorage.getItem('accessToken');
const decodedToken = accessToken ? decodeJwt(accessToken) : null;

export const callGetVacationAPI = () => {

    console.log("들어왔습니다!!");

    const requestURL = `http://localhost:8080/approval/getVacation/${decodedToken.EmployeeNo}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json())
        if(result.status === 200) {
            dispatch({type: GET_VACATION, payload : result});
        }
    }
}

/* 전자결재 홈 */
export const callGetAppHomeAPI = () => {

    const requestURL = `http://localhost:8080/approval/${decodedToken.EmployeeNo}`;

    console.log("callGetAppHomeAPI ", decodedToken.EmployeeNo);

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json()).catch(response => console.log(response));
        if(result.status === 200) {
            dispatch({type: GET_APP_HOME, payload : result.data});
        }
    }
}

/* 발신 문서함 */
export const callGetSendAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null) {
        requestURL = `http://localhost:8080/approval/send/${decodedToken.EmployeeNo}?offset=${currentPage}`;
    } else {
        requestURL = `http://localhost:8080/approval/send/${decodedToken.EmployeeNo}`;
    }

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());
        if(result.status === 200) {
            dispatch({type: GET_SEND, payload : result.data});
        }
    }
}

export const callGetMyBusinessAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null) {
        requestURL = `http://localhost:8080/approval/myBusiness/${decodedToken.EmployeeNo}?offset=${currentPage}`;
    } else {
        requestURL = `http://localhost:8080/approval/myBusiness/${decodedToken.EmployeeNo}`;
    }

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());
        if(result.status === 200) {
            dispatch({type: GET_MY_BUSINESS, payload : result.data});
        }
    }
}

export const callGetAppWaitAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null) {
        requestURL = `http://localhost:8080/approval/appWait/${decodedToken.EmployeeNo}?offset=${currentPage}`;
    } else {
        requestURL = `http://localhost:8080/approval/appWait/${decodedToken.EmployeeNo}`;
    }

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());
        if(result.status === 200) {
            dispatch({type: GET_APP_WAIT, payload : result.data});
        }
    }
}

export const callGetSeeWaitAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null) {
        requestURL = `http://localhost:8080/approval/seeWait/${decodedToken.EmployeeNo}?offset=${currentPage}`;
    } else {
        requestURL = `http://localhost:8080/approval/seeWait/${decodedToken.EmployeeNo}`;
    }

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());
        if(result.status === 200) {
            dispatch({type: GET_SEE_WAIT, payload : result.data});
        }
    }
}

export const callGetMyAppAPI = ({currentPage}) => {

    let requestURL;

    console.log("hello")

    if(currentPage !== undefined || currentPage !== null) {
        requestURL = `http://localhost:8080/approval/myApp/${decodedToken.EmployeeNo}?offset=${currentPage}`;
    } else {
        requestURL = `http://localhost:8080/approval/myApp/${decodedToken.EmployeeNo}`;
    }

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());
        if(result.status === 200) {
            dispatch({type: GET_MY_APP, payload : result.data});
        }
    }
}

export const callGetMySeeAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null) {
        requestURL = `http://localhost:8080/approval/mySee/${decodedToken.EmployeeNo}?offset=${currentPage}`;
    } else {
        requestURL = `http://localhost:8080/approval/mySee/${decodedToken.EmployeeNo}`;
    }

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());
        if(result.status === 200) {
            dispatch({type: GET_MY_SEE, payload : result.data});
        }
    }
}

export const callGetBusinessDocAPI = ({documentCode}) => {

    const requestURL = `http://localhost:8080/approval/document/business/${documentCode}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json())
        if(result.status === 200) {
            dispatch({type: GET_BUSINESS_DOC, payload : result.data});
        }
    }
}

export const callGetTrafficDocAPI = ({documentCode}) => {

    const requestURL = `http://localhost:8080/approval/document/traffic/${documentCode}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json())
        if(result.status === 200) {
            dispatch({type: GET_TRAFFIC_DOC, payload : result.data});
        }
    }
}

export const callGetPurchaseDocAPI = ({documentCode}) => {

    console.log("hello")

    const requestURL = `http://localhost:8080/approval/document/purchase/${documentCode}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json())
        if(result.status === 200) {
            dispatch({type: GET_PURCHASE_DOC, payload : result.data});
        }
    }
}

export const callGetVacationDocAPI = ({documentCode}) => {

    const requestURL = `http://localhost:8080/approval/document/vacation/${documentCode}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json())
        if(result.status === 200) {
            dispatch({type: GET_VACATION_DOC, payload : result.data});
        }
    }
}

export const callGetPayDocAPI = ({documentCode}) => {

    const requestURL = `http://localhost:8080/approval/document/pay/${documentCode}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json())
        if(result.status === 200) {
            dispatch({type: GET_PAY_DOC, payload : result.data});
        }
    }
}

export const callGetAppYNAPI = ({documentCode}) => {

    const requestURL = `http://localhost:8080/approval/document/appYN/${documentCode}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json())
        if(result.status === 200) {
            dispatch({type:GET_APP_YN, payload : result.data});
        }
    }
}

export const deleteDocumentAPI = ({documentCode}) => {

    console.log("delete ", documentCode)

    const requestURL = `http://localhost:8080/approval/delete/${documentCode}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {

            method: "DELETE",
        })
            .then(response => response.json())
        if(result.status === 200) {
            dispatch({type:GET_APP_YN, payload : result.data});
        }
    }
}

export const putApprovalAPI = ({documentCode, employeeNo}) => {

    const requestURL = `http://localhost:8080/approval/${documentCode}/${employeeNo}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {

            method : "PUT",
        })
            .then(response => response.json())
        if(result.status === 200) {
            dispatch({type: PUT_APPROVAL, payload : result.data});
        }
    }
}

export const putBackApprovalAPI = ({documentCode, comment, employeeNo}) => {

    console.log(comment)

    const requestURL = `http://localhost:8080/approval/back/${documentCode}/${employeeNo}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            body : comment
        })
        //     .then(response => response.json())
        // if(result.status === 200) {
        //     dispatch({type: PUT_BACK_APPROVAL, payload : result.data});
        // }
    }
}

export const putVacationAPI = ({documentCode, useDate}) => {

    const requestURL = `http://localhost:8080/approval/putVacation/${documentCode}/${useDate}`

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
        })
    }
}

export const getFileAPI = ({fileCode}) => {
    const requestURL = `http://localhost:8080/approval/download/${fileCode}`;

    return async (dispatch, getState) => {
        try {
            const response = await fetch(requestURL, {
                method: "GET",
                mode : 'cors',
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                // Blob으로 응답 받기 때문에 .blob() 메서드를 사용하여 데이터 추출
                const blob = await response.blob();

                // 다운로드 링크 생성
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'downloaded-file');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        } catch (error) {
            console.error('파일 다운로드 중 오류 발생:', error);
        }
    };
};

export const putReceiverAPI = ({employeeNo, documentCode}) => {

    const requestURL = `http://localhost:8080/approval/putReceiver/${documentCode}/${employeeNo}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT"
        })
    }
}