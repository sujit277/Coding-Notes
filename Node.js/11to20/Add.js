/* First Way of Exporting Single Function
const add = (a, b)=>{
    return a+b;

};
module.exports =add; */


/* Second Way of Exporting Module Exporting
const add = (a, b)=>{
    return a+b;
};
const sub = (a, b)=>{
    return a-b;
};
module.exports.add = add;
module.exports.sub = sub; */


/* Third way of module exporting */
const add = (a, b)=>{
    return a+b;
};
const sub = (a, b)=>{
    return a-b;
};
export {add,sub};

