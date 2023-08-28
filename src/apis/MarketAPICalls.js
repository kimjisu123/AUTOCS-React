import { APPLY_MARKET} from '../modules/MarketModule';

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



    // export const callApplyMarketAPI = ({formData}) => {
    //
    //     console.log("formData=========>" + formData);
    //         for (const entry of formData.entries()) {
    //         console.log(entry[0], entry[1]);
    //         }
    // console.log("formData======================");
    //
    //     const requestURL = 'http://localhost:8080/market/applyMarket';
    //
    //
    //     return async (dispatch, getState) => {
    //
    //         try {
    //             console.log(formData);
    //             const result = await fetch(requestURL, {
    //                 method: "POST",
    //                 headers: {
    //                     "Accept": "*/*",
    //                     "Access-Control-Allow-Origin": "*"
    //                 },
    //                 body: formData
    //             })
    //                 .then(response => response.json());
    //
    //             window.alert('영업점 계정 신청이 완료되었습니다.');
    //
    //             dispatch({type: APPLY_MARKET, payload: result});
    //         } catch (error) {
    //             console.error('Error:', error);
    //         }
    //     };
     };