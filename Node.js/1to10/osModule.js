// OS information builtin Library

const os = require("os");

//Getting System Architecture using Arch()
console.log(os.arch());

//Getting Free Memmory of the PC
const freememory = os.freemem();
console.log(freememory);

//getting the free Ram memory of the PC Using template Literal
console.log(`${freememory / 1024 / 1024 / 1024}`);

//getting the total Ram memory of the PC Using template Literal
const total = os.totalmem();
console.log(`${total / 1024 / 1024 / 1024}`);
