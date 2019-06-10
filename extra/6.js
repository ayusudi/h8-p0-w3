/*

CALCULATE NUMBER
================

Calculate number adalah sebuah fungsi untuk melakukan operasi matematika.
Fungsi akan menerima input berupa persamaan matematika dan mengembalikan nilai
berupa hasil kalkulasi.

RULES:
  - fungsi hanya menghandle operasi tambah dan kurang saja
  - fungsi dapat menerima angka satuan, puluhan, dan ratusan

EXAMPLE:
  console.log(calculateNumber("2+3+4+5-4-3-2"))
  OUTPUT: 5

*/
function calculateNumber(strNum) {
  var arrNum = "";
  var min = [];
  var plus = [];
  var jumlahP = 0;
  var jumlahM = 0;
  var hasil;

  // buat strNum ke array di arrNum
  for (var i = 0; i < strNum.length; i++) {
    if (strNum[i] === "+") {
      arrNum += " " + strNum[i];
    } else if (strNum[i] === "-") {
      arrNum += " " + strNum[i];
    } else {
      arrNum += strNum[i];
    }
  }
  // console.log(arrNum)

  // Kelompokkan angka minus dan plus
  var arr = arrNum.split(" ");
  plus.push("+" + arr[0]);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == "-") {
        min.push(arr[i]);
      }
      if (arr[i][j] == "+") {
        plus.push(arr[i]);
      }
    }
  }

  // Hilangkan simbol + dan -
  for (let i = 0; i < plus.length; i++) {
    if (plus[i].substr(0, 1) == "+") {
      plus[i] = plus[i].substr(1);
    }
  }
  for (let i = 0; i < min.length; i++) {
    if (min[i].substr(0, 1) == "-") {
      min[i] = min[i].substr(1);
    }
  }

  //calculate
  for (let i = 0; i < plus.length; i++) {
    jumlahP = jumlahP + Number(plus[i]);
  }
  for (let i = 0; i < min.length; i++) {
    jumlahM = jumlahM + Number(min[i]);
  }
  hasil = jumlahP - jumlahM;

  return hasil;
}

console.log(calculateNumber("1+10+100")); // 111
console.log(calculateNumber("100")); // 100
console.log(calculateNumber("200-200+100")); // 100

/* 
//Cara magic 
function calculateNumber(strNum) {
  var calculate = eval(strNum);
  return calculate
}

console.log(calculateNumber("1+10+100")) // 111
console.log(calculateNumber("100")) // 100
console.log(calculateNumber("200-200+100")) // 100
*/
