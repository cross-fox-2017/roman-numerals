function to_roman_old(n) {
  // var roman1 =['I','IIII','V','VIIII','X','XL','L','XC','C','CD','D','DC','CM','M'];
  // var num1 = ['1','4','5','9','10','40','50','90','100','400','500','600','900','1000']
  var roman1 = ['M','CM','D','CD','C','XC','L','XL','X','VIIII','V','IIII','I']
  var num1 = ['1000','900','500','400','100','90','50','40','10','9','5','4','1']
  var result1 = '';
  for (var i = 0; i < roman1.length; i++) {
    while (n >= num1[i]) {
      result1 += roman1[i];
      n -= num1[i];
    }
  }
  return result1;
}

function to_roman(n) {
  var roman1 = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  var num1 = ['1000','900','500','400','100','90','50','40','10','9','5','4','1']
  var result1 = '';
  for (var i = 0; i < roman1.length; i++) {
    while (n >= num1[i]) {
      result1 += roman1[i];
      n -= num1[i];
    }
  }
  return result1;
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
