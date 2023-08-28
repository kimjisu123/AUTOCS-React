// index.js
import { combineReducers } from 'redux';
import memberReducer from './MemberModule';
import { bookmarkReducer ,mailReducer } from './MailModule';
import stockReducer from './StockModule';

const rootReducer = combineReducers({
    mailReducer,
    memberReducer,
    stockReducer,
    bookmarkReducer
});

export default rootReducer;