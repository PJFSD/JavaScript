console.log("start of script.");

// This Function is the callback
function delayedMessage() {
    console.log("this runs after 2 seconds.");
}

// serTimeout is the asynchronous function
setTimeout(delayedMessage, 2000);

console.log("End of script.");