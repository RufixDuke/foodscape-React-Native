import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";
// import taskReducer from "./reducers/address";

const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;
