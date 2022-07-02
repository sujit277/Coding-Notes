import { createStore } from "redux";
import rootReducer from "./state/reducers/index.js";

const store = createStore(rootReducer);
export default store;