import
{ GET_DEPARTMENT
,GET_ACCOUNTING,GET_MANAGEMENT,GET_MARKETING
,GET_PERSONNEL,GET_SALES
,GET_SERIVCE,GET_HEAD_OFFICE} from '../modules/DepartmentModule'

export const callGetDepartmentAPI = () => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/department`;

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

export const callGetPersonnelAPI = (name) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/personnel/${name}`;

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


export const callGetAccountingAPI = (result) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/accounting/${result}`;

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


export const callGetManagementAPI = (result) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/management/${result}`;

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


export const callGetMarketingAPI = (result) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/marketing/${result}`;

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


export const callGetSalesAPI = (result) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/sales/${result}`;

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


export const callGetServiceAPI = (result) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/service/${result}`;

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
export const callGetHeadOfficeAPI = (page, search) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/headOffice/${page}/${search}`;

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
