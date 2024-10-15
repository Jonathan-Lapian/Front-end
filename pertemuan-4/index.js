// Javascript function

// 1. Function Declaration
// fungsi yang berdiri sendiri

// Function Initialization
function greetings1(){  
    console.log("hello world");
}

greetings1(); // Function call


// 2. Function Expression

// let greetings2 = function(){
//     console,log("hello world");
// }

// greetings2();

// Parameter & Argument

// Cara 1

function greetings1(fulName){
    return "Hello"  + fulName;
}

let output = greetings1("John Doe");
console.log(output);

// Cara 2
let greetings2 = function (fulName){
    return "Hello"  + fulName;
}

let output2 = greetings2("Jane Doe");
console.log(output2);

// Semua yang dalam kurawak disebut blok