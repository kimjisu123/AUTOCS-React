// index.js
import { combineReducers } from 'redux';
import memberReducer from './MemberModule';
import { bookmarkReducer ,mailReducer } from './MailModule';
import marketReducer from "./MarketModule";
import productReducer from "./ProductModule";
import categoryReducer from "./CategoryModule";
import standardReducer from "./StandardModule";
import unitReducer from "./UnitModule";
import chartReducer from './ChartModule';
import approvalReducer from './ApprovalModule';
import todoReducer from "./TodoModule";

const rootReducer = combineReducers({
    chartReducer,
    mailReducer,
    memberReducer,
    bookmarkReducer,
    productReducer,
    categoryReducer,
    standardReducer,
    unitReducer,
    todoReducer,
    marketReducer,
    approvalReducer
});

export default rootReducer;