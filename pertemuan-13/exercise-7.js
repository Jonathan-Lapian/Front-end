//1. Destructuring
//Array
let array = ["ruskin", "milton", "bacon"];

let [array1, array2, array3] = array;

console.log("-- Array");
console.log(array1);
console.log(array2);
console.log(array3);

//Object

let penulis = {
  nama: "John Ruskin",
  buku: "Ethics of the dust",
  terbit: 1872,
};

let { nama, buku, terbit } = penulis;

console.log("-- Object");
console.log(nama);
console.log(buku);
console.log(terbit);

//2. Destructuring dengan mengambil sebagian item
//Array
let [array_1, , array_2] = array;

console.log("-- Array");
console.log(array_1); // tidak mengambil 'milton'
console.log(array_2);

//Object
let { nama: nama2, terbit: tahun } = penulis;

console.log("-- Object");
console.log(nama2); // tidak mengambil judul dari object
console.log(tahun);

//3. Destructuring dengan menggunakan default value
//Array
let [array_a, array_b, array_c, array_d = "shakespeare"] = array;

console.log("-- Array");
console.log(array_a);
console.log(array_b);
console.log(array_c);
console.log(array_d); // default

//Object
let penulis2 = {
  nama3: "John Milton",
  buku2: "Paradise Lost",
  terbit2: 1674,
};

let { nama3, buku2, terbit2, umur = 2024 - terbit } = penulis2;

console.log("-- Object");
console.log(nama3);
console.log(buku2);
console.log(terbit2);
console.log(umur); // default

//4.  Destructuring dengan menggunakan rest operator
//Array
let [arrayPertama, ...arraySisa] = array;

console.log("-- Array");
console.log(arrayPertama, arraySisa);

//Object
let penulis3 = {
  name: "Francis Bacon",
  essay: "Of studies",
  tahunTerbit: 1597,
};

let { name, ...infoSisa } = penulis3;

console.log("-- Object");
console.log(name);
console.log(infoSisa);
