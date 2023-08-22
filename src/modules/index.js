import { combineReducers } from 'redux';
import memberReducer from './MemberModule';
import mailReducer from './MailModule';

const rootReducer = combineReducers({
    memberReducer
    mailReducer
});

export default rootReducer;