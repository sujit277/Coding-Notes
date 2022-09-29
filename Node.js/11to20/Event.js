/* Here EventEmitter is not the Variable but it is the ClassName
Here Before emitting Event We have to define the event using event.on 
In Order to use all event functionality we have to create Instance of the 
Event Emitter Class */


import EventEmitter from "events";
const event = new EventEmitter();

event.on("checkpage",(sc,msg)=>{
    console.log(`Status Code is ${sc} and the page is ${msg}`);
});     

event.emit("checkpage",200,"Okk");
