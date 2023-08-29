// index.js
import { combineReducers } from 'redux';
import memberReducer from './MemberModule';
import productReducer from "./ProductModule";
import categoryReducer from "./CategoryModule";
import standardReducer from "./StandardModule";
import unitReducer from "./UnitModule";
import todoReducer from "./TodoModule";

const rootReducer = combineReducers({
    memberReducer,
    productReducer,
    categoryReducer,
    standardReducer,
    unitReducer,
    todoReducer
});

export default rootReducer;