// index.js
import { combineReducers } from 'redux';
import memberReducer from './MemberModule';
import { bookmarkReducer ,mailReducer, mailSentReducer } from './MailModule';
import marketReducer from "./MarketModule";
import productReducer from "./ProductModule";
import categoryReducer from "./CategoryModule";
import standardReducer from "./StandardModule";
import unitReducer from "./UnitModule";
import ioReducer from "./IoModule";
import ioGroupReducer from "./IoGroupModule";
import orderReducer from "./OrderModule";
import chartReducer from './ChartModule';
import approvalReducer from './ApprovalModule';
import todoReducer from "./TodoModule";
import {workStatusReducer} from"./WorkStatusModule";
import { departmentReducer, personnelReducer, accountingReducer, managementReducer, marketingReducer, salesReducer, serviceReducer  } from "./DepartmentModule";

const rootReducer = combineReducers({
    chartReducer,
    mailReducer,
    memberReducer,
    bookmarkReducer,
    productReducer,
    categoryReducer,
    standardReducer,
    unitReducer,
    ioReducer,
    ioGroupReducer,
    orderReducer,
    todoReducer,
    marketReducer,
    approvalReducer,
    mailSentReducer,
    workStatusReducer,
    departmentReducer,
    personnelReducer,
    accountingReducer,
    managementReducer,
    marketingReducer,
    salesReducer,
    serviceReducer
});

export default rootReducer;