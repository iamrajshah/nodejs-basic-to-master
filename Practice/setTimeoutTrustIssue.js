console.log("Hello World");

var a = 1078698;
var b = 20986;

// This callback will only be pushed to call stack in v8 once the call stack is empty
// Even though it says that 0 miliseconds means dont want to wait and execute now itself, it never execute in that way
// This one is handed over to LIBUV and once GEC removed from stack this will processed
setTimeout(() => {
  console.log("call me right now ");
}, 0); // Trust issues with setTimeout

setTimeout(() => {
  console.log("call me after 3 seconds");
}, 3000);

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);