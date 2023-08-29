// index.js
import { combineReducers } from 'redux';
import memberReducer from './MemberModule';
import marketReducer from "./MarketModule";
import productReducer from "./ProductModule";
import categoryReducer from "./CategoryModule";
import standardReducer from "./StandardModule";
import unitReducer from "./UnitModule";
import chartReducer from './ChartModule';
import stockReducer from './StockModule';
import approvalReducer from './ApprovalModule';

const rootReducer = combineReducers({
    chartReducer,
    memberReducer,
    productReducer,
    categoryReducer,
    standardReducer,
    unitReducer,
    marketReducer
    stockReducer,
    approvalReducer
});

export default rootReducer;