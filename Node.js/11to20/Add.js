// First Way of Exporting Function

/* const add = (a, b) => {
    return a+b;
};
const sub = (a, b) => {
    return a-b;
};
module.exports.add = add;
module.exports.sub = sub; */

//Second way of Exporting Funtcion

const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
export { add, sub };
