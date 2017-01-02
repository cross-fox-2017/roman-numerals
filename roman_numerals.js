function to_roman_old(n) {
  // your code here
  var angka = [1000, 500,400, 100, 50,40, 10, 5,1];
  var roman = ["M", "D","CD", "C", "L","XL", "X", "V", "I"];
  var result = [];

  for (var i = 0; i < angka.length; i++){
    if (n >= angka[i]){
      n = n - angka[i];
      result.push(roman[i]);
      i = i-1;
    }
  }
  return result.join('');
}

function to_roman(n) {
  // your implementation code here
  var angka = [1000, 900, 500, 400, 100,90, 50,40, 10,9, 5, 4, 1];
  var roman = ["M","CM", "D", "CD", "C", "XC", "L", "XL", "X","IX", "V","IV", "I"];
  var result = [];

  for (var i = 0; i < angka.length; i++){
    if (n >= angka[i]){
      n = n - angka[i];
      result.push(roman[i]);
      i = i-1;
    }
  }
  return result.join('');
}

// Drive code
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
