/*Revisi :
1. Jangan pakai substr
2. Disederhanakan 
3. Satu kali looping
*/

function calculateNumber(strNum) {
  var arrNum = [];
  var temp = "";

  // buat string ke array, simbol +/- menjadi pemisah value
  for (let i = 0; i < strNum.length; i++) {
    if (i === strNum.length - 1) {
      temp += strNum[i];
      arrNum.push(temp);
      temp = "";
    } else if (strNum[i] === "+") {
      arrNum.push(temp);
      arrNum.push(strNum[i]);
      temp = "";
    } else if (strNum[i] === "-") {
      arrNum.push(temp);
      arrNum.push(strNum[i]);
      temp = "";
    } else {
      temp += strNum[i];
    }
  }

  //Calculate
  var hasil = 0;
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] === "+") {
      hasil = hasil + Number(arrNum[i - 1]);
    } else if (arrNum[i] === "-") {
      hasil = hasil - Number(arrNum[i - 1]);
    } else if (i === arrNum.length - 1) {
      return hasil + Number(arrNum[i]);
    }
  }
}

console.log(calculateNumber("1+10+100")); // 111
console.log(calculateNumber("100")); // 100
console.log(calculateNumber("200-200+100")); // 100
