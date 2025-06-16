

const fs = require("node:fs");
const https = require("https"); // Same as node:https

console.log("Hello World");

var a = 1078698;
var b = 20986;

// Synchronous execution which will blocks main thread and dont have CALLBACK 
// This one also moves to LIBUV
fs.readFileSync("./simpletext.txt", "utf8"); // 10 ms
console.log("This will execute only after file read");

// This one will be move to LIBUV 
https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

// This one is also non blocking and handled by LIBUV
setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

// Async function
// This one is non blocking and hence can be executed once GEC is removed from stack
fs.readFile("./simpletext.txt", "utf8", (err, data) => {
  console.log("File Data : ", data);
});

function multiplyFn(a, b) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);