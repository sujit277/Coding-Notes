import  counterReducer from "./Features/counterFeature";
import userListReducer from "./Features/userFeature";

const RootReducer = {
    counter:counterReducer ,
    users : userListReducer
}

export default RootReducer;