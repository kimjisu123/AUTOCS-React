// index.js
import { combineReducers } from 'redux';
import memberReducer from './MemberModule';
import chartReducer from './ChartModule';

const rootReducer = combineReducers({
    member: memberReducer, // 이 부분을 수정하여 리듀서를 사용할 수 있도록 해야 합니다.
    chart: chartReducer
});

export default rootReducer;