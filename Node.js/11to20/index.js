import chalk from "chalk";
import validator from "validator";

console.log("Hello World");

console.log(chalk.green.underline("Hello World"));

console.log(chalk.green.inverse("Hello World"));


//checking Whether an email is valid or not

const result =validator.isEmail("sujit5678@gmail.com");
console.log(chalk.red.underline(result));