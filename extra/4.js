/*
GET COORDINATES
=======================

fungsi getCoordinates adalah sebuah fungsi untuk mendapatkan koordinat
dari setiap titik "x". Output yang dikembalikan pada fungsi ini adalah
sebuah array dengan koordinat dengan format "<huruf><angka>" pada board.

EXAMPLE:
var array = [
  [" ", "A", "B", "C"],
  ["1", " ", "x", " "],
  ["2", " ", " ", " "],
  ["3", "x", " ", " "],
]
console.log(getCoordinates(array))
// ["B1", "A3"]
*/
function getCoordinates(arr) {
  var kordinat = [];
  for (var i= 0; i<arr.length; i++){
    for (var j=0; j<arr[i].length; j++){
      if (arr[i][j]=='x'){
        kordinat.push(j.toString() + i.toString())
      }
    }
  }
  //console.log(kordinat)
  var result = [];
  for(var k  = 0; k<kordinat.length; k++){
    if(kordinat[k][0].toString() == '1'){
      result.push('A' + kordinat[k][1])
    }
    if(kordinat[k][0].toString() == '2'){
      result.push('B' + kordinat[k][1])
    }
    if(kordinat[k][0].toString() == '3'){
      result.push('C' + kordinat[k][1])
    }
    if(kordinat[k][0].toString() == '4'){
      result.push('D' + kordinat[k][1])
    }
  }
  return result
}

var array = [
  [" ", "A", "B", "C", "D"],
  ["1", " ", " ", "x", " "],
  ["2", " ", "x", " ", " "],
  ["3", " ", " ", " ", "x"],
  ["4", " ", " ", "x", " "],
]
console.log(getCoordinates(array))
// [ 'C1', 'B2', 'D3', 'C4' ]

var array2 = [
  [" ", "A", "B", "C"],
  ["1", "x", " ", "x"],
  ["2", " ", "x", " "],
  ["3", "x", " ", "x"],
]
console.log(getCoordinates(array2))
// [ 'A1', 'C1', 'B2', 'A3', 'C3' ]