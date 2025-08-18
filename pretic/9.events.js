const EventEmitter = require('events');

const customEvent = new EventEmitter();

customEvent.on("response", () => {
    console.log("Data Received");
})


customEvent.on("response",(event) => {
    console.log(`User name is: ${event.name} and Id is ${event.id}`);
})

customEvent.emit("response", {name: "Akshay", id: 38});