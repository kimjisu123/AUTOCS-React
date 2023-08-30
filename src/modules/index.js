// index.js
import { combineReducers } from 'redux';
import memberReducer from './MemberModule';
import marketReducer from "./MarketModule";
import productReducer from "./ProductModule";
import categoryReducer from "./CategoryModule";
import standardReducer from "./StandardModule";
import unitReducer from "./UnitModule";
import ioReducer from "./IoModule";
import ioGroupReducer from "./IoGroupModule";
import chartReducer from './ChartModule';
import approvalReducer from './ApprovalModule';

const rootReducer = combineReducers({
    chartReducer,
    memberReducer,
    productReducer,
    categoryReducer,
    standardReducer,
    unitReducer,
    ioReducer,
    ioGroupReducer,
    marketReducer,
    approvalReducer
});

export default rootReducer;