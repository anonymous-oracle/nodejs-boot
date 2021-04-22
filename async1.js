console.log(1);
console.log(2);


setTimeout(() => {
    console.log("callback fired");
}, 2000); // this will run in the event loop and proceed with the script execution; callback will be called after 2000 seconds

console.log(3);
console.log(4);

// "callback fired"