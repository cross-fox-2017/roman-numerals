function to_roman_old(num) {

  var romanMap = ["I","V","X","XL","L","C","CD","D","DM","M"];
  var numeralMap = [1,5,10,40,50,100,400,500,900,1000];
  var romanResult = "";

  for(let i =  numeralMap.length ; i >= 0 ;i--){
    //let temp = num ;
    while(num >= numeralMap[i]){
     romanResult += romanMap[i];
     num -= numeralMap[i];
  }
}
console.log(romanResult);
return romanResult;
}

function to_roman(num) {

  var romanMap = ["I","IV","V","IX","X","XL","L","C","CD","D","CM","M"];
  var numeralMap = [1,4,5,9,10,40,50,100,400,500,900,1000];
  var romanResult = "";

  for(let i =  numeralMap.length ; i >= 0 ;i--){
    //let temp = num ;
    while(num >= numeralMap[i]){
     romanResult += romanMap[i];
     num -= numeralMap[i];
  }
}
console.log(romanResult);
return romanResult;
  // your implementation code here
}

//Drive code
console.log("My totally sweet testing script\n");
console.log("input | expected | actual");
console.log("———|—————|———");
 console.log("4     | IIII     | ", to_roman_old(4));
console.log("9     | VIIII    | ", to_roman_old(9));
 console.log("13    | XIII     | ", to_roman_old(13));
console.log("1453  | MCDLIII  | ", to_roman_old(1453));
console.log("1646  | MDCXLVI  | ", to_roman_old(1646));
// //
console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
