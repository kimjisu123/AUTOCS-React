import {
    GET_PRODUCT,
    GET_PRODUCTS,
    POST_PRODUCT,
    PUT_PRODUCT,
} from '../modules/ProductModule';
import {
    GET_CATEGORIES,
    POST_CATEGORY,
    PUT_CATEGORY,
} from '../modules/CategoryModule';
import {
    GET_STANDARDS,
    POST_STANDARD,
    PUT_STANDARD,
} from '../modules/StandardModule';
import {
    GET_UNITS,
    POST_UNIT,
    PUT_UNIT,
} from '../modules/UnitModule';
import {
    GET_IO,
    POST_IO,
} from '../modules/IoModule';
import {
    GET_IO_GROUP,
} from '../modules/IoGroupModule';
import {
    GET_ORDERS,
    POST_ORDER,
} from '../modules/OrderModule';
import {
    GET_LAST_ORDER_NO,
} from '../modules/OrderNumberModule';
import {
    GET_ORDER_PRODUCT,
    POST_ORDER_PRODUCT,
    PUT_ORDER,
    PUT_ORDER_PRODUCT,
} from '../modules/OrderProductModule';
import {GET_MY_ORDERS, POST_BILL} from "../modules/MyOrderModule";
import {GET_MY_ORDER_PRODUCT} from "../modules/MyOrderProductModule";
import {GET_REFUND} from "../modules/RefundModule";
import {GET_BILLS} from "../modules/BillModule";
import {GET_BILL} from "../modules/BillDetailModule";
import {GET_ORDER_FOR_BILL} from "../modules/OrderListForBillModule";

/* 물품 조회 */
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

/* 물품 조회 이름검색*/
export const callProductListByNameAPI = ({currentPage, s}) => {
    console.log('시작......')

    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://localhost:8080/ListPopup?offset=${currentPage}&s=${s}`;
        console.log(s)
    }else {
        requestURL = `http://localhost:8080/ListPopup`;
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
            dispatch({ type: GET_PRODUCTS,  payload: result.data });
        }

    };
}

/* 물품 등록 */
export const callProductRegistAPI = ({form}) => {
    const requestURL = `http://localhost:8080/stock/productregist`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*"
            },
            body: form
        })
            .then(response => response.json());

        dispatch({ type: POST_PRODUCT,  payload: result });

    };
}

/* 물품 수정 */
export const callProductUpdateAPI = ({form}) => {

    const requestURL = `http://localhost:8080/stock/productdelete`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Accept": "*/*",
            },
            body: form
        })
            .then(response => response.json());

        dispatch({ type: PUT_PRODUCT,  payload: result });

    };
}

/* 카테고리 조회 */
export const callCategoryListAPI = () => {
    let requestURL;
    requestURL = `http://localhost:8080/stock/category/all`;

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
            dispatch({ type: GET_CATEGORIES,  payload: result.data });  // api를 동시에 사용하는 경우가 아니면 같은 타입을 사용해도 됨
        }
    };
}

/* 카테고리 조회 - 페이징 */
export const callCategoryListWithPagingAPI = ({currentPage}) => {

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
export const callStandardListAPI = () => {
    let requestURL;
    requestURL = `http://localhost:8080/stock/standard/all`;

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

/* 규격 조회 - 페이징 */
export const callStandardListWithPagingAPI = ({currentPage}) => {

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

/* 단위 조회 */
export const callUnitListAPI = () => {
    let requestURL;
    requestURL = `http://localhost:8080/stock/unit/all`;

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
            dispatch({ type: GET_UNITS,  payload: result.data });
        }
    };
}

/* 단위 조회 - 페이징 */
export const callUnitListWithPagingAPI = ({currentPage}) => {

    let requestURL;
    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://localhost:8080/stock/unit?offset=${currentPage}`;
    }else {
        requestURL = `http://localhost:8080/stock/unit`;
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
            dispatch({ type: GET_UNITS,  payload: result.data });
        }

    };
}

/* 단위 등록 */
export const callUnitRegistAPI = ({form}) => {

    const requestURL = `http://localhost:8080/stock/unit`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*"
            },
            body: form
        })
            .then(response => response.json());

        dispatch({ type: POST_UNIT,  payload: result });

    };
}

/* 단위 수정 */
export const callUnitUpdateAPI = ({form}) => {

    const requestURL = `http://localhost:8080/stock/unit`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Accept": "*/*",
            },
            body: form
        })
            .then(response => response.json());

        dispatch({ type: PUT_UNIT,  payload: result });

    };
}

/* 입출고 등록 */
export const callIoRegistAPI = ({form}) => {
    const requestURL = `http://localhost:8080/stock/stockio`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*"
            },
            body: form
        })
            .then(response => response.json());

        dispatch({ type: POST_IO,  payload: result });

    };
}

/* 입출고 조회 - 페이징 */
export const callIoListAPI = ({currentPage}) => {

    let requestURL;
    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://localhost:8080/stock/stockio?offset=${currentPage}`;
    }else {
        requestURL = `http://localhost:8080/stock/stockio`;
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
            dispatch({ type: GET_IO,  payload: result.data });
        }

    };
}


/* 입출고 조회 - 그룹화 */
export const callIOListWithGroupingAPI = ({currentPage, s, startDate, endDate}) => {

    let requestURL;
    
    console.log('불러와집니까')

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://localhost:8080/stock/check?offset=${currentPage}&s=${s}&startDate=${startDate}&endDate=${endDate}`;
        console.log(s)
    }else {
        requestURL = `http://localhost:8080/stock/check`;
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
            dispatch({ type: GET_IO_GROUP,  payload: result.data });
        }

    };
}

/* 주문번호 조회 */
export const callOrderListAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://localhost:8080/stock/order?offset=${currentPage}`;
    }else {
        requestURL = `http://localhost:8080/stock/order`;
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
            dispatch({ type: GET_ORDERS,  payload: result.data });
        }

    };
}

/* 마지막주문번호 조회 */
export const callLastOrderAPI = () => {

    let requestURL;

    requestURL = `http://localhost:8080/stock/order/findLast`;

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
            dispatch({ type: GET_LAST_ORDER_NO,  payload: result.data });
        }
    };
}
/* 주문번호 등록 */
export const callOrderRegistAPI = ({form}) => {
    const requestURL = `http://localhost:8080/stock/order`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*"
            },
            body: form
        })
            .then(response => response.json());

        dispatch({ type: POST_ORDER,  payload: result });

    };
}

/* 주문번호 수정 */
export const callOrderUpdateAPI = ({form}) => {

    const requestURL = `http://localhost:8080/stock/order/update`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Accept": "*/*",
            },
            body: form
        })
            .then(response => response.json());

        dispatch({ type: PUT_ORDER,  payload: result });

    };
}


/* 주문물품 등록 */
export const callOrderProductRegistAPI = ({form}) => {
    const requestURL = `http://localhost:8080/stock/order/product`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*"
            },
            body: form
        })
            .then(response => response.json());

        dispatch({ type: POST_ORDER_PRODUCT,  payload: result });

    };
}

/* 주문물품 조회 */
export const callOrderProductListAPI = ({currentPage, stat, search, startDate, endDate}) => {
// export const callOrderProductListAPI = ({currentPage, stat, search}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://localhost:8080/stock/orderlist?offset=${currentPage}&status=${stat}&search=${search}&startDate=${startDate}&endDate=${endDate}`;
        // requestURL = `http://localhost:8080/stock/orderlist?offset=${currentPage}&status=${stat}&search=${search}`;
    }else {
        requestURL = `http://localhost:8080/stock/orderlist`;
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
            dispatch({ type: GET_ORDER_PRODUCT,  payload: result.data });
        }

    };
}

/* 주문물품 수정 */
export const callOrderProductUpdateAPI = ({form}) => {
    console.log('업데이트')
    const requestURL = `http://localhost:8080/stock/orderlist`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Accept": "*/*",
            },
            body: form
        })
            .then(response => response.json());

        dispatch({ type: PUT_ORDER_PRODUCT,  payload: result });

    };
}

/* 주문 조회 - 영업점별 */
export const callMyOrderListAPI = ({currentPage, store, startDate, endDate}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://localhost:8080/stock/myorderlist?offset=${currentPage}&store=${store}&startDate=${startDate}&endDate=${endDate}`;
    }else {
        requestURL = `http://localhost:8080/stock/myorderlist`;
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
            dispatch({ type: GET_MY_ORDERS,  payload: result.data });
        }

    };
}

/* 주문물품 조회 - 주문번호별 */
export const callMyOrderProductListAPI = ({currentPage, myOrderNo}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        // requestURL = `http://localhost:8080/stock/myorderlist/detail?offset=${currentPage}&myOrderNo=${myOrderNo}`;
        requestURL = `http://localhost:8080/stock/myorderlist/detail?myOrderNo=${myOrderNo}&offset=${currentPage}`;

    }else {
        requestURL = `http://localhost:8080/stock/myorderlist/detail?myOrderNo${myOrderNo}`;
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
            dispatch({ type: GET_MY_ORDER_PRODUCT,  payload: result.data });
        }

    };
}

/* 주문물품 조회 - 환불용 */
export const callMyOrderProductForRefundAPI = ({myOrderProductNo}) => {

    let requestURL;

        requestURL = `http://localhost:8080/stock/refund?myOrderProductNo=${myOrderProductNo}`;

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
            dispatch({ type: GET_REFUND,  payload: result.data });
        }

    };
}

/* 계산서 등록 */
export const callBillRegistAPI = ({form}) => {
    const requestURL = `http://localhost:8080/stock/myorderlist`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*"
            },
            body: form
        })
            .then(response => response.json());

        dispatch({ type: POST_BILL,  payload: result });

    };
}

/* 계산서 조회 - 페이징 */
export const callBillListWithPagingAPI = ({currentPage, store, startDate, endDate}) => {

    let requestURL;
    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://localhost:8080/stock/bill?offset=${currentPage}&store=${store}&startDate=${startDate}&endDate=${endDate}`;
    }else {
        requestURL = `http://localhost:8080/stock/bill`;
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
            dispatch({ type: GET_BILLS,  payload: result.data });
        }

    };
}

/* 계산서 조회 - 주문번호별 */
export const callBillAPI = ({orderNo}) => {
console.log('호출')
    let requestURL;

    requestURL = `http://localhost:8080/stock/bill/detail?orderNo=${orderNo}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());
        console.log('----------->', result.data)
        if(result.status === 200){
            dispatch({ type: GET_BILL,  payload: result.data });
        }

    };
}

/* 주문물품 조회 - 계산서용 */
export const callMyOrderProductListForBillAPI = ({myOrderNo}) => {

    console.log('홓로호호호ㅗ호호')
    let requestURL;

    requestURL = `http://localhost:8080/stock/bill/detail/order?myOrderNo=${myOrderNo}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());
        console.log('----------->', result.data)
        if(result.status === 200){
            dispatch({ type: GET_ORDER_FOR_BILL,  payload: result.data });
        }

    };
}

/* 마이 계산서 조회 - 페이징 */
export const callMyBillListWithPagingAPI = ({currentPage, store, startDate, endDate}) => {

    let requestURL;
    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://localhost:8080/stock/mybill?offset=${currentPage}&store=${store}&startDate=${startDate}&endDate=${endDate}`;
    }else {
        requestURL = `http://localhost:8080/stock/mybill`;
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
            dispatch({ type: GET_BILLS,  payload: result.data });
        }

    };
}
