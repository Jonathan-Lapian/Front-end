// Javascript object and conditional

// Deklarasi Object
let manusia = {
  name: "John", // Properti/key & value
  job: "Unemployed",
  age: 39,
  isMarried: true,
  greetings: function () {
    console.log("Hello" + this.name);
  },
};

console.log(manusia);

// Mengakses property dalam object
// 1. dot noatantion
console.log(manusia.age);
console.log(manusia.isMarried);
manusia.isMarried = false;
console.log(manusia);

manusia.famName = "Lapian"; //Tambah suatu properti

console.log(manusia);

//2.

//Object method
let kalkulator = {
  namaOperasi: "penjumlahan",

  jumlah: function (angka1, angka2) {
    return angka1 + angka2;
  },
};

console.log(kalkulator.jumlah(2, 3)); // Output: 5

manusia.greetings();

//Object inside object
