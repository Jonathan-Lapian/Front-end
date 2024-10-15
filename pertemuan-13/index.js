//Array

const func = (...par) => {
  //rest
  let a = par[2];
  let b = [...par]; // spread
  console.log(a);
  console.log(...b);
};
func(1, 2, 3, 4, 5);
const penjumlahan = (...plus) => {
  let hasil = 0;
  plus.forEach((item) => (hasil += item));
  return hasil;
};

console.log(penjumlahan(1, 2, 3, 4, 5, 6));


//Object
    