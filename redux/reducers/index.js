import { combineReducers } from "redux";
import handleCart from "./handleCarts";
import taskReducer from "./address";

const rootReducers = combineReducers({ handleCart, taskReducer });

export default rootReducers;
