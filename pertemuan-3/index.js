// Variable dan Operators
// 1. Javascript Variable

//let fullName = "John Doe" // camel case, pakai camel case dalam kelas
let full_name = "John Doe" // snake case
let FullName = "John Doe" // pascal case

const gender = "male" // penggunaan const berarti value dalam variable tidak dapat diubah, dan harus langsung ada value dalam variable

let age; // let dapat digunakan untuk inisialisasi dahulu baru nanti isi value nya ada

let weight = 85.5; //Number float
let isMarriec  = true; //boolean
let grade = null; // null
let address; // undefined

console.log(fullName)
console.log(gender)
console.log(age)
console.log(weight)
console.log(grade)
console.log(address)

// 2. Javascript Operators
// a. Aritmethic Operators (+, -,  *, /, %, **)
let bil1 = 20;
let bil2 = 5;

console.log(bil1 + bil2)
console.log(bil1 - bil2)
console.log(bil1 * bil2)
console.log(bil1 / bil2)
console.log(bil1 % bil2)
console.log(bil1 ** bil2)

let alas = 5;
let tinggi = 5;
let luasSegitiga = 0.5 * alas + tinggi;

// b. Assignment Operator(=, +=, -=, *=, /=)
let bilangan = 10;
bilangan = bilangan + 10;
bilangan += 10;
console.log(bilangan);

//c. String Operator
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName
console.log(fullName);

//d. Relational Operator (==, ===, ...)

let bill1 = 10;
let bill2 = 10;
let bill3 = "10";

//e. ternary Operator

 