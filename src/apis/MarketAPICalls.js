import { APPLY_MARKET} from '../modules/MarketModule';

//영업점 신청 폼 전송
export const callApplyMarketAPI = ({ infoToMarket }) => {
    const requestURL = 'http://localhost:8080/market/applyMarket';

    return fetch(requestURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(infoToMarket),
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