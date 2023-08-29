import {APPLY_MARKET, GET_MARKETSTATEW} from '../modules/MarketModule';

//영업점 신청 폼 전송
export const callApplyMarketAPI = ({ formData }) => {
    const requestURL = 'http://localhost:8080/market/applyMarket';

    console.log("formData=========>" + formData);
    for (const entry of formData.entries()) {
        console.log(entry[0], entry[1]);
    }
    console.log("formData======================");


    return fetch(requestURL, {
        method: 'POST',
        headers: {
            "Accept": "*/*",
            //"Access-Control-Allow-Origin": "*"
        },
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.error('Error apply market');
                throw new Error('Error apply market');
            }
        })
        .then(() => {
            window.alert('영업점 계정 신청이 완료되었습니다.');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

    //상태 W인 신청폼 조회
export const callGetMarketStateWAPI = () => {
        const requestURL = 'http://localhost:8080/market/getMarketStateW';

        return async (dispatch) => {
            const result = await fetch(requestURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            }).then(response => response.json());

            console.log('response :>>>>>>>>>>>>>>>>', result);
            dispatch({ type: GET_MARKETSTATEW, payload: result });
        }
    };

//영업점 등록 및 아이디/비번 생성
export const callInsertMarketAPI = ({ infoToPass }) => {
    const requestURL = 'http://localhost:8080/market/insertMarket';

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
            window.alert('영업점 등록이 완료되었습니다.');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};