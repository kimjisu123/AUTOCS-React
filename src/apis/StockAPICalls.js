import {
    GET_PRODUCT,
    GET_PRODUCTS,
    GET_CATEGORIES,
    POST_CATEGORY,
    PUT_CATEGORY,
    GET_STANDARDS,
    POST_STANDARD,
    PUT_STANDARD,

} from '../modules/StockModule';

/* 상품 조회 */
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

/* 카테고리 조회 */
export const callCategoryListAPI = ({currentPage}) => {

    let requestURL;
    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://localhost:8080/stock/category?offset=${currentPage}`;
    }else {
        requestURL = `http://localhost:8080/stock/category`;
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
        if(result.status === 200){
            dispatch({ type: GET_CATEGORIES,  payload: result.data });
        }

    };
}

/* 카테고리 등록 */
export const callCategoryRegistAPI = ({form}) => {
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

/* 카테고리 수정 */
export const callCategoryUpdateAPI = ({form}) => {
    console.log('[StockAPICalls] callCategoryUpdateAPI Call');

    const requestURL = `http://localhost:8080/stock/category`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Accept": "*/*",
            },
            body: form
        })
            .then(response => response.json());

        console.log('[StockAPICalls] callCategoryUpdateAPI RESULT : ', result);

        dispatch({ type: PUT_CATEGORY,  payload: result });

    };
}

/* 규격 조회 */
export const callStandardListAPI = ({currentPage}) => {

    let requestURL;
    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://localhost:8080/stock/standard?offset=${currentPage}`;
    }else {
        requestURL = `http://localhost:8080/stock/standard`;
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
        if(result.status === 200){
            dispatch({ type: GET_STANDARDS,  payload: result.data });
        }

    };
}

/* 규격 등록 */
export const callStandardRegistAPI = ({form}) => {

    const requestURL = `http://localhost:8080/stock/standard`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*"
            },
            body: form
        })
            .then(response => response.json());

        dispatch({ type: POST_STANDARD,  payload: result });

    };
}

/* 규격 수정 */
export const callStandardUpdateAPI = ({form}) => {

    const requestURL = `http://localhost:8080/stock/standard`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Accept": "*/*",
            },
            body: form
        })
            .then(response => response.json());

        dispatch({ type: PUT_STANDARD,  payload: result });

    };
}