function to_roman_old(n) {
  var holdI ='';
  var hold2 ='';
  var modulo ='';
  //satuan
  if (n < 10) {
    if (n < 5 ) {
      for (var i = 0; i < n; i++) {
        holdI += 'I';
      }
    }
    else if (n >= 5) {
      holdI += 'V';
      modulo = n % 5;
      for (var j = 0; j < modulo; j++) {
        holdI += 'I';
      }
    }
  }
  //puluhan
  else if (n >=10 && n < 100 ) {
    if (n < 50) {
      holdI += 'X';
      modulo = n % 10;
      for (var k = 0; k < modulo; k++) {
        holdI += 'I';
      }
    }
  }

  return holdI;
}

function to_roman(n) {
  var hold2 = '';
  var modulo = 0;
  //if ribuan
  if (n >= 1000) {
    var ribuan = Math.floor(n / 1000);
    for (var i = 0; i < ribuan; i++) {
      hold2 += 'M';
    }
    n = n - (ribuan * 1000);
    if (n >= 100) {
      var ratusan = Math.floor(n / 100);
      // >500
      if (n >=500) {
        // 900
        if (ratusan == 9) {
          hold2 += 'CM';
        }
        // 800 - 500
        else {
          hold2 += 'D';
          modulo = ratusan % 5;
          for (var j = 0; j < modulo; j++) {
            hold2 += 'C';
          }
        }
      }
      // < 500
      if (n < 500) {
        if (ratusan == 4) {
          hold2 += 'CD';
        }
        else {
          for (var j = 0; j < ratusan; j++) {
            hold2 += 'C';
          }
        }
      }
    }
    n = n - (ratusan * 100);

    // >10
    if (n >= 10) {
      var puluhan = Math.floor(n / 10);

      if (n >= 50) {
        // 90
        if(puluhan == 9){
          hold2 += 'XC';
        }
        //80-50
        else{
          hold2 += 'L';
          modulo = puluhan % 5;
          for (var k = 0; k < modulo; k++) {
            hold2 += 'X'
          }
        }
      }
      if (n < 50) {
        if (puluhan == 4) {
          hold2 += 'XL';
        }
        else {
          for (var l = 0; l < puluhan; l++) {
            hold2 += 'X';
          }
        }
      }
    }
    n = n - (puluhan * 10);

    if (n < 10) {
      if (n < 5 ) {
        if (n == 4) {
          hold2 += 'IV';
        }
        else {
          for (var i = 0; i < n; i++) {
            hold2 += 'I';
          }

        }
      }
      else if (n >= 5) {
        if (n == 9 ){
          hold2 += 'IX';
        }
        else {
          hold2 += 'V';
          modulo = n % 5;
          for (var j = 0; j < modulo; j++) {
            hold2 += 'I';
          }
        }
      }
      n = 0;
    }
  }

  // IF ratusan

  if (n >= 100) {
    var ratusan = Math.floor(n / 100);
    // >500
    if (n >=500) {
      // 900
      if (ratusan == 9) {
        hold2 += 'CM';
      }
      // 800 - 500
      else {
        hold2 += 'D';
        modulo = ratusan % 5;
        for (var j = 0; j < modulo; j++) {
          hold2 += 'C';
        }
      }
    }

    // < 500
    if (n < 500) {
      if (ratusan == 4) {
        hold2 += 'DC';
      }
      else {
        for (var j = 0; j < ratusan; j++) {
          hold2 += 'C';
        }
      }
    }
    n = n - (ratusan * 100);
  }

  // >10
  if (n >= 10) {
    var puluhan = Math.floor(n / 10);

    if (n >= 50) {
      // 90
      if(puluhan == 9){
        hold2 += 'XC';
      }
      //80-50
      else{
        hold2 += 'L';
        modulo = puluhan % 5;
        for (var k = 0; k < modulo; k++) {
          hold2 += 'X'
        }
      }
    }
    if (n < 50) {
      if (puluhan == 4) {
        hold2 += 'XL';
      }
      else {
        for (var l = 0; l < puluhan; l++) {
          hold2 += 'X';
        }
      }
    }
    n = n - (puluhan * 10);
  }

  // if puluhan
  if (n >= 10){

    var puluhan = Math.floor(n / 10);

    if (n >= 50) {
      // 90
      if (puluhan == 9){
        hold2 += 'XC';
      }
      // 80 - 50
      else {
        hold2 += 'L';
        modulo = puluhan % 5;
        for (var a = 0; a < modulo; a++) {
          hold2 += 'X';
        }
      }
    }
    // < 50
    if (n < 50) {
      if (puluhan == 40) {
        hold2 += 'XL'
      }
      else {
        for (var d = 0; d < puluhan; d++) {
        hold2 += 'X';
        }
      }
    }
    n = n-(puluhan * 10);
  }


  if (n > 0 && n < 10) {
    if (n < 5) {
      if (n == 4) {
        hold2 += 'IV';
      }
      else {
        for (var b = 0; b < n; b++) {
          hold2 +=  'I';
        }
      }
    }
    else if (n >= 5) {
      if (n == 9){
        hold2 += 'IX';
      }
      else {
        hold2 += 'V';
        modulo = n % 5;
        for (var c = 0; c < modulo; c++) {
          hold2 += 'I';
        }
      }
    }
  }

  return hold2;
}

// Drive code
console.log("My totally sweet testing script\n");
console.log("input | expected | actual");
console.log("———|—————|———");
// console.log("4     | IIII     | ", to_roman_old(4));
// console.log("9     | VIIII    | ", to_roman_old(9));
// console.log("13    | XIII     | ", to_roman_old(13));
// console.log("1453  | MCDLIII  | ", to_roman_old(1453));
// console.log("1646  | MDCXLVI  | ", to_roman_old(1646));

console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
