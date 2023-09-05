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
import orderNumberReducer from "./OrderNumberModule";
import orderProductReducer from "./OrderProductModule";
import chartReducer from './ChartModule';
import approvalReducer from './ApprovalModule';
import todoReducer from "./TodoModule";
import myPageReducer from "./MypageModule";
import boardReducer from "./BoardModule";

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
    orderNumberReducer,
    orderProductReducer,
    todoReducer,
    marketReducer,
    approvalReducer,
    mailSentReducer,
    myPageReducer,
    boardReducer
});

export default rootReducer;