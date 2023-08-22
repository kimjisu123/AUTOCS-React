// index.js
import { combineReducers } from 'redux';
import memberReducer from './MemberModule';

const rootReducer = combineReducers({
    memberReducer,
    stockReducer
});

export default rootReducer;