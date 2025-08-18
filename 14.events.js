const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on("response",() => {
    console.log("data received")
})

customEmitter.on("response",() => {
    console.log("Some Other logic");
    
})

customEmitter.on("response",(name,id) => {
    console.log(`Data Received: user ${name} and id: ${id}`);
    
})

customEmitter.emit("response","Akshay", 38);