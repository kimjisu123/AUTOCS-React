// index.js
import { combineReducers } from 'redux';
import memberReducer from './MemberModule';
import chartReducer from './ChartModule';
import stockReducer from './StockModule';
import approvalReducer from './ApprovalModule';

const rootReducer = combineReducers({
 // 이 부분을 수정하여 리듀서를 사용할 수 있도록 해야 합니다.
    chartReducer,
    memberReducer,
    stockReducer,
    approvalReducer
});

export default rootReducer;