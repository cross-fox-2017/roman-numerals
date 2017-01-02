function to_roman_old(n) {
  // your code here
  let str = '';
  let romanD = 0;
  let sisa = 0;

  // Get Thousand Roman
  romanD = Math.floor(n / 1000);

  for(let i = 0 ; i < romanD ; i++){
    str += 'M';
  }
  sisa = n % 1000;

  // Get 500 Roman
  romanD = Math.floor(sisa / 500);
  for(let i = 0 ; i < romanD ; i++){
    str += 'D';
  }
  sisa = n % 500;

  // Get 100 Roman
  romanC = Math.floor(sisa / 100);
  if(romanC > 3){
    str += 'CD';
  }
  else {
    for(let i = 0 ; i < romanC ; i++){
      str += 'C';
    }
  }
  sisa = n % 100;

  // Get 50 Roman
  romanL = Math.floor(sisa / 50);
  for(let i = 0 ; i < romanL ; i++){
    str += 'L';
  }
  sisa = n % 50;

  // Get 10 Roman
  romanX = Math.floor(sisa / 10);
  if(romanX > 3){
    str += 'XL';
  }
  else {
    for(let i = 0 ; i < romanX ; i++){
      str += 'X';
    }
  }

  sisa = n % 10;
  // console.log(romanL, sisa);

  // Get 5 Roman
  romanV = Math.floor(sisa / 5);

  for(let i = 0 ; i < romanV ; i++){
    str += 'V';
  }
  sisa = n % 5;

  // Get Ones Roman
  romanI = Math.floor(sisa / 1);
  for(let i = 0 ; i < romanI ; i++){
    str += 'I';
  }
  sisa = n % 1;

  return str;
}

function to_roman(n) {
  // your code here
  let str = '';
  let romanD = 0;
  let sisa = 0;

  // Get Thousand Roman
  romanD = Math.floor(n / 1000);

  for(let i = 0 ; i < romanD ; i++){
    str += 'M';
  }
  sisa = n % 1000;

  // Get 500 Roman
  romanD = Math.floor(sisa / 500);
  for(let i = 0 ; i < romanD ; i++){
    str += 'D';
  }
  sisa = n % 500;

  // Get 100 Roman
  romanC = Math.floor(sisa / 100);
  if(romanC > 3){
    str += 'CD';
  }
  else {
    for(let i = 0 ; i < romanC ; i++){
      str += 'C';
    }
  }
  sisa = n % 100;

  // Get 50 Roman
  romanL = Math.floor(sisa / 50);
  for(let i = 0 ; i < romanL ; i++){
    str += 'L';
  }
  sisa = n % 50;

  // Get 10 Roman
  romanX = Math.floor(sisa / 10);
  if(romanX > 3){
    str += 'XL';
  }
  else {
    for(let i = 0 ; i < romanX ; i++){
      str += 'X';
    }
  }

  sisa = n % 10;
  // console.log(romanL, sisa);

  // Get 5 Roman
  romanV = Math.floor(sisa / 5);
  romanVCustom = sisa / 5;

  if(romanVCustom > 1.6){
    str += 'IX';
  }
  else {
    for(let i = 0 ; i < romanV ; i++){
      str += 'V';
    }

    sisa = n % 5;

    // Get Ones Roman
    romanI = Math.floor(sisa / 1);

    if(romanI > 3){
      str += 'IV';
    }
    else {
      for(let i = 0 ; i < romanI ; i++){
        str += 'I';
      }
    }
    sisa = n % 1;
  }



  return str;
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
