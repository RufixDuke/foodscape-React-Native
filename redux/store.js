import { createStore } from "redux";
import rootReducers from "./reducers";
// import taskReducer from "./reducers/address";

const store = createStore(rootReducers);
export default store;
