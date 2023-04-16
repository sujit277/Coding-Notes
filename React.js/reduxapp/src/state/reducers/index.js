import changeTheNumber from "./upDown";
import changeTheCounter from "./upDown";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ changeTheNumber, changeTheCounter });

export default rootReducer;
