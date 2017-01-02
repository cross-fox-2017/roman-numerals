function to_roman_old(n) {
  // cari jumlah digit parameter
  var number = String(n),
      tampung = "",
      romawi = ['I', 'V', 'X', 'L', 'C', 'D', "M"];

  // jika jumlah digit angka hanya 1
  if(number.length == 1 && number != 0) {
      // jika angka lebih kecil dari 5
    if(number < 5) {
      for(var i = 0; i < n; i++) {
        tampung+= romawi[0];
      }

      console.log(tampung);
    }
    // jika angka lebih kecil dari 9
    if(number >= 5) {
      var tampung = 'V';
      for(var i = 0; i < n-5; i++) {
        tampung+= romawi[0];
      }
      console.log(tampung);
    }
  }



}


to_roman_old(12);

function to_roman(n) {
  // your implementation code here
}

// Drive code
/*
console.log("My totally sweet testing script\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IIII     | ", to_roman_old(4));
console.log("9     | VIIII    | ", to_roman_old(9));
console.log("13    | XIII     | ", to_roman_old(13));
console.log("1453  | MCDLIII  | ", to_roman_old(1453));
console.log("1646  | MDCXLVI  | ", to_roman_old(1646));

console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
*/
