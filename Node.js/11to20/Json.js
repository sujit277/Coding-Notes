import fs from "fs";

const biodata ={
    name:"Sujit",
    roll:101,
    subject:"Machline Learning",
};

//JSON.stringify is used to convert javascript object into json object 
const jsondata = JSON.stringify(biodata);
console.log(jsondata);


//JSON.parse is used to convert the json object into javascript object
/* const javascriptdata = JSON.parse(jsondata);
console.log(javascriptdata) */;


//Wriring the Json data into the given file
 /* fs.writeFile("jsonsample.json",jsondata,(err)=>{
    console.log("done");
}); */


// Reading from the json file
 fs.readFile("jsonsample.json","UTF-8",(err,data)=>{
    const jsdata =JSON.parse(data);
    console.log(jsdata);
    console.log(data);
}) 