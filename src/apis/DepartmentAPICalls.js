import
{ GET_DEPARTMENT
,GET_ACCOUNTING,GET_MANAGEMENT,GET_MARKETING
,GET_PERSONNEL,GET_SALES
,GET_SERIVCE,GET_HEAD_OFFICE} from '../modules/DepartmentModule'

export const callGetDepartmentAPI = () => {
    const requestURL = "http://localhost:8080/department";

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
        }).then(response => response.json())
        dispatch({ type: GET_DEPARTMENT, payload: result });
    }
};

export const callGetPersonnelAPI = () => {
    const requestURL = "http://localhost:8080/personnel";

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
        }).then(response => response.json())
        dispatch({ type: GET_PERSONNEL, payload: result })

    }
};


export const callGetAccountingAPI = () => {
    const requestURL = "http://localhost:8080/accounting";

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
        }).then(response => response.json())
        dispatch({ type: GET_ACCOUNTING, payload: result });
    }
};


export const callGetManagementAPI = () => {
    const requestURL = "http://localhost:8080/management";

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
        }).then(response => response.json())
        dispatch({ type: GET_MANAGEMENT, payload: result });
    }
};


export const callGetMarketingAPI = () => {
    const requestURL = "http://localhost:8080/marketing";

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
        }).then(response => response.json())
        dispatch({ type: GET_MARKETING, payload: result });
    }
};


export const callGetSalesAPI = () => {
    const requestURL = "http://localhost:8080/sales";

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
        }).then(response => response.json())
        dispatch({ type: GET_SALES, payload: result });
    }
};


export const callGetServiceAPI = () => {
    const requestURL = "http://localhost:8080/service";

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
        }).then(response => response.json())
        dispatch({ type: GET_SERIVCE, payload: result });
    }
};
export const callGetHeadOfficeAPI = () => {
    const requestURL = "http://localhost:8080/headOffice";

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
        }).then(response => response.json());
        dispatch({ type: GET_HEAD_OFFICE, payload: result.data });
    }
};
