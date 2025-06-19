// a=100
// Last line of the file.
// process.nextTick
// Promise
// timer
// setImmediate
// File Reading CB

const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

// High priority
Promise.resolve("Promise").then(console.log);

fs.readFile("../simpletext.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

// Highest priority
process.nextTick(() => console.log("process.nextTick"));

const printA = () => {
  console.log("a=", a);
};

printA();
console.log("Last line of the file.");
