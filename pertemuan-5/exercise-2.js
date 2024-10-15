// Nama: Lapian, Jonathan Reinald
let berat = 71;
let tinggi = 1.67;

//1. IIFE

//No params & args & return value
(function () {
    console.log(berat / (tinggi ** 2));
  })();

// With params & args & return value

let output1 = (function (bmi) {
    return berat / (bmi **2 );
  })(tinggi);

console.log(output1)

// 2. Callback
// No params & args & return value
function bmi(callBack1) {
    callBack1();
  }

  bmi(function () {
    console.log(berat / (tinggi ** 2));
  });

  // With params & args & return value
  let output2 = bmi2(function (tinggi2) {
    return berat/ tinggi2;
  });

  function bmi2(callback2) {
   let output2 = callback2(tinggi **2);
   console.log(output2);
  }


