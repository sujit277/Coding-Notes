const intialState = 0;
const changeTheNumber = (state = intialState, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else {
    return state;
  }
};

export default changeTheNumber;
