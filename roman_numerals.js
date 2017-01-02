function to_roman_old(n) {
  // cari jumlah digit parameter
  var number = String(n),
      tampung = "",
      romawi = ['I', 'V', 'X', 'L', 'C', 'D', "M"];

  // jika jumlah digit angka == 1
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
      var tampung = romawi[1];
      for(var i = 0; i < n-5; i++) {
        tampung+= romawi[0];
      }
      console.log(tampung);
    }
  }
  // jika jumlah digit angka == 2
  if(number.length == 2 && number < 50) {
    // cek digit pertama
    for (var i = 0; i < number[0]; i++) {
      tampung += romawi[2];
    }
    // cek digit kedua < 5
    if ( number[1] < 5 && number[1] != 0 ) {
      for ( var i = 0; i < number[1]; i++) {
        tampung += romawi[0];
      }
    }
    // cek digit kedua > 5
    if ( number[1] >= 5 && number[1] != 0 ) {
      tampung += romawi[1]
      for ( var i = 0; i < number[1]-5; i++) {
        tampung+= romawi[0];
      }
    }
    console.log(tampung);


  }



}


to_roman_old(17);

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
