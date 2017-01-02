function to_roman_old(n) {
  var romawi = "";

  while(n!=0){

    if(n>=1000){
      romawi = romawi + "M";
      n = n-1000;
    }
    else if(n>=500){
      romawi = romawi + "D";
      n = n-500;
    }
    else if(n>=400){
      romawi = romawi + "CD";
      n = n-400;
    }
    else if(n>=100){
      romawi = romawi + "C";
      n = n-100;
    }
    else if(n>=50){
      romawi = romawi + "L";
      n = n-50;
    }
    else if(n>=40){
      romawi = romawi + "XL";
      n = n-40;
    }
    else if(n>=10){
      romawi = romawi + "X";
      n = n-10;
    }
    else if(n>=5){
      romawi = romawi + "V";
      n = n-5;
    }
    else{
      for(i=0; i<n; i++){
        romawi = romawi + "I";
        n = n-1;
      }
    }

  }
return romawi;
}

function to_roman(n) {
  var romawi = "";

  while(n!=0){

    if(n>=1000){
      romawi = romawi + "M";
      n = n-1000;
    }
    else if(n>=500){
      romawi = romawi + "D";
      n = n-500;
    }
    else if(n>=400){
      romawi = romawi + "CD";
      n = n-400;
    }
    else if(n>=100){
      romawi = romawi + "C";
      n = n-100;
    }
    else if(n>=50){
      romawi = romawi + "L";
      n = n-50;
    }
    else if(n>=40){
      romawi = romawi + "XL";
      n = n-40;
    }
    else if(n>=10){
      romawi = romawi + "X";
      n = n-10;
    }
    else if(n>=9){
      romawi = romawi + "IX";
      n = n-9;
    }
    else if(n>=5){
      romawi = romawi + "V";
      n = n-5;
    }
    else if(n>=4){
      romawi = romawi + "IV";
      n = n-4;
    }
    else{
      for(i=0; i<n; i++){
        romawi = romawi + "I";
        n = n-1;
      }
    }

  }
return romawi;
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
