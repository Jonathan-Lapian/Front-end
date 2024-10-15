//IIFE da Callback
//1. IIFE

// IIFE adalah Immediately Invoked Function Expression
// yang berarti fungsi tersebut dipanggil secara langsung
// iife tidak memiliki nama function (Self ececuting anonymous function)

//No params & args & return value
(function () {
    console.log("Hello World");
  })();

// With params & args & return value

let output = (function (fullName) {
    return "hello " + fullName;
  })("John doe");

console.log(output)

//2. Callback
// No params & args & return value
function sayHello(callback) {
    callback();
  }

  sayHello(function () {
    console.log("Hello World");
  });

  // With params & args & return value
  let output = sayHello(function (fullName) {
    return "Hello " + fullName;
  });

  function sayHello(callback) {
   let output= callback("John doe");
   console.log(output);
  }

  
 
  
  