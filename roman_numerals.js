function to_roman_old(n) {
  // your code here
  var numeral = ["M","CM","D","CD","C","XC","L","XL","X","V","I"]
  var arabic  = [1000,900,500,400,100,90,50,40,10,5,1];
  var string = "";

  for(var i = 0; i < arabic.length; i++){
    while(n >= arabic[i]){
      string += numeral[i];
      n -= arabic[i];
    }
  }

  return string;
}

function to_roman(n) {
  // your implementation code here
  var lookup = {
    M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1
  }, roman = '', i;

  for(i in lookup){
    while(n >= lookup[i] ) {
      roman += i;
      n -= lookup[i];
    }
  }
  return roman;
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
