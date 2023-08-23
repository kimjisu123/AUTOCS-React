// index.js
import { combineReducers } from 'redux';
import memberReducer from './MemberModule';
import mailReducer from './MailModule';
import stockReducer from './StockModule';

const rootReducer = combineReducers({
    mailReducer,
    memberReducer,
    stockReducer
});

export default rootReducer;