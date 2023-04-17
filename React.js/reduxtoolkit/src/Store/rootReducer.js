import counterReducer from "./Slices/counterSlice";
import userListReducer from "./Slices/userSlice";

const RootReducer = {
  counter: counterReducer,
  users: userListReducer,
};

export default RootReducer;
