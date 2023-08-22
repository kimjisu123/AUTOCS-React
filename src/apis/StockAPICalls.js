import {
    GET_PRODUCT,
    GET_PRODUCTS,
    POST_CATEGORY,
} from '../modules/StockModule';

// 상품조회
export const callProductListAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://localhost:8080/stock/productdelete?offset=${currentPage}`;
    }else {
        requestURL = `http://localhost:8080/stock/productdelete`;
    }

    console.log('[StockAPICalls] requestURL : ', requestURL);

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());
        if(result.status === 200){
            console.log('[StockAPICalls] callProductListAPI RESULT : ', result);
            dispatch({ type: GET_PRODUCTS,  payload: result.data });
        }

    };
}

// 카테고리 등록
export const callCategoryInsertAPI = ({form}) => {
    console.log('[StockAPICalls] callCategoryInsertAPI Call');

    const requestURL = `http://localhost:8080/stock/category`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*"
            },
            body: form
        })
            .then(response => response.json());

        console.log('[StockAPICalls] callCategoryInsertAPI RESULT : ', result);

        dispatch({ type: POST_CATEGORY,  payload: result });

    };
}