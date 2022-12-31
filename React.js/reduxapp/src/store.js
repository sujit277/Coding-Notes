import { createStore } from "redux";
import rootReducer from "./state/reducers";

const store = createStore(rootReducer);
export default store;