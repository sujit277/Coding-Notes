import { createStore } from "redux";
import rootReducer from "./state/index";

const store = createStore(rootReducer);
export default store;
