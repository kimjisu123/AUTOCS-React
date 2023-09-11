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
import myOrderReducer from "./MyOrderModule";
import refundReducer from "./RefundModule";
import billReducer from "./BillModule";
import billDetailReducer from "./BillDetailModule";
import orderNumberReducer from "./OrderNumberModule";
import orderProductReducer from "./OrderProductModule";
import myOrderProductReducer from "./MyOrderProductModule";
import chartReducer from './ChartModule';
import todoReducer from "./TodoModule";
import myPageReducer from "./MypageModule";
import boardReducer from "./BoardModule";
import commentReducer from "./CommentModule";

import {
    approvalAppWaitReducer, approvalBusinessDocReducer,
    approvalHomeReducer, approvalMyAppReducer,
    approvalMyBusinessReducer, approvalMySeeReducer, approvalPayDocReducer, approvalPurchaseDocReducer,
    approvalReducer, approvalSeeWaitReducer,
    approvalSendReducer, approvalTrafficDocReducer, approvalVacationDocReducer,
    vacationReducer
} from "./ApprovalModule";

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
    myOrderReducer,
    refundReducer,
    orderNumberReducer,
    orderProductReducer,
    myOrderProductReducer,
    billReducer,
    billDetailReducer,
    todoReducer,
    marketReducer,
    mailSentReducer,
    myPageReducer,
    boardReducer,
    approvalReducer,
    vacationReducer,
    approvalHomeReducer,
    approvalSendReducer,
    approvalMyBusinessReducer,
    approvalAppWaitReducer,
    approvalSeeWaitReducer,
    approvalMyAppReducer,
    approvalMySeeReducer,
    approvalBusinessDocReducer,
    approvalTrafficDocReducer,
    approvalPurchaseDocReducer,
    approvalVacationDocReducer,
    approvalPayDocReducer,
    commentReducer
});

export default rootReducer;