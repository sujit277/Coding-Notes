import changeTheNumber from "./reducers/upDown";
import changeTheCounter from "./reducers/upDown";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ changeTheNumber, changeTheCounter });

export default rootReducer;
