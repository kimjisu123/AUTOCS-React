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
import myBillReducer from "./MyBillModule";
import orderForBillReducer from "./OrderListForBillModule";
import orderNumberReducer from "./OrderNumberModule";
import orderProductReducer from "./OrderProductModule";
import myOrderProductReducer from "./MyOrderProductModule";
import chartReducer from './ChartModule';
import todoReducer from "./TodoModule";
import myPageReducer from "./MypageModule";
import {workStatusReducer} from"./WorkStatusModule";
import { departmentReducer, personnelReducer, accountingReducer, managementReducer, marketingReducer, salesReducer, serviceReducer, headOfficeReducer  } from "./DepartmentModule";
import boardReducer from "./BoardModule";
import mainReducer from "./MainModule";
import commentReducer from "./CommentModule";

import {
    approvalAppWaitReducer,
    approvalBusinessDocReducer,
    approvalDeleteDocumentReducer,
    approvalDocumentAppYNReducer,
    approvalGetFileReducer,
    approvalHomeReducer,
    approvalMyAppReducer,
    approvalMyBusinessReducer,
    approvalMySeeReducer,
    approvalPayDocReducer,
    approvalPurchaseDocReducer,
    approvalReducer,
    approvalSeeWaitReducer,
    approvalSendReducer,
    approvalTrafficDocReducer,
    approvalVacationDocReducer,
    vacationReducer
} from "./ApprovalModule";
import statisticsReducer from "./StatisticsModule";
import myStatisticsReducer from "./MyStatisticsModule";

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
    orderForBillReducer,
    myBillReducer,
    statisticsReducer,
    myStatisticsReducer,
    todoReducer,
    marketReducer,
    mailSentReducer,
    myPageReducer,
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
    approvalDocumentAppYNReducer,
    approvalDeleteDocumentReducer,
    approvalGetFileReducer,
    approvalPayDocReducer,
    commentReducer,
    boardReducer,
    mainReducer,
    workStatusReducer,
    departmentReducer,
    personnelReducer,
    accountingReducer,
    managementReducer,
    marketingReducer,
    salesReducer,
    serviceReducer,
    headOfficeReducer,

});

export default rootReducer;