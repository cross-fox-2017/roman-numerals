function to_roman_old(n) {
  var arabic = [1,5,10,40,50,100,400,500,1000]
  var romawi = ["I","V","X","XL","L","C","CD","D","M"]
  var result = ''

  for ( var i = arabic.length; i >= 0 ; i--) {
    while (n >= arabic[i]) {
      result += romawi[i];
      n -= arabic[i];
    }
  }

  return result;
}

function to_roman(n) {
  var arabic = [1,4,5,9,10,40,50,100,400,500,1000]
  var romawi = ["I","IV","V","IX","X","XL","L","C","CD","D","M"]
  var result = ''

  for ( var i = arabic.length; i >= 0 ; i--) {
    while (n >= arabic[i]) {
      result += romawi[i];
      n -= arabic[i];
    }
  }

  return result;
}


// Drive code
console.log("My totally sweet testing script\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4   | IIII     | ", to_roman_old(4));
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
