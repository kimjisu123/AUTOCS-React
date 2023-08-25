// index.js
import { combineReducers } from 'redux';
import memberReducer from './MemberModule';
import stockReducer from './StockModule';
import marketReducer from "./MarketModule";

const rootReducer = combineReducers({
    memberReducer,
    marketReducer,
    stockReducer
});

export default rootReducer;