// index.js
import { combineReducers } from 'redux';
import memberReducer from './MemberModule';
import stockReducer from './StockModule';

const rootReducer = combineReducers({
    memberReducer,
    stockReducer
});

export default rootReducer;