/* Here EventEmitter is not the Variable but it is the ClassName
Here Before emitting Event We have to define the event using event.on 
In Order to use all event functionality we have to create Instance of the 
Event Emitter Class */

import EventEmitter from "events";
const event = new EventEmitter();

//Listening for an Event
event.on("checkpage", (statusCode, message) => {
  console.log(`Status Code is ${statusCode} and the Page is ${message}`);
});

//Emitting an Event
event.emit("checkpage", 200, "Ok");
