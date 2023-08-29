// index.js
import { combineReducers } from 'redux';
import memberReducer from './MemberModule';
import productReducer from "./ProductModule";
import categoryReducer from "./CategoryModule";
import standardReducer from "./StandardModule";
import unitReducer from "./UnitModule";

const rootReducer = combineReducers({
    memberReducer,
    productReducer,
    categoryReducer,
    standardReducer,
    unitReducer
});

export default rootReducer;