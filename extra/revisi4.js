/* Revisi :
1. ABCD jangan di hard code
*/

function getCoordinates(arr) {
  var kordinat = [];
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == "x") {
        kordinat.push(j.toString() + i.toString());
      }
    }
  }
  var result = [];
  for (var k = 0; k < kordinat.length; k++)
    for (var l = 0; l < alphabet.length; l++) {
      if (kordinat[k][0] == [l]) {
        result.push(alphabet[l - 1] + kordinat[k][1]);
      }
    }
  return result;
}

var array = [
  [" ", "A", "B", "C", "D"],
  ["1", " ", " ", "x", " "],
  ["2", " ", "x", " ", " "],
  ["3", " ", " ", " ", "x"],
  ["4", " ", " ", "x", " "]
];
console.log(getCoordinates(array));
// [ 'C1', 'B2', 'D3', 'C4' ]

var array2 = [
  [" ", "A", "B", "C"],
  ["1", "x", " ", "x"],
  ["2", " ", "x", " "],
  ["3", "x", " ", "x"]
];
console.log(getCoordinates(array2));
// [ 'A1', 'C1', 'B2', 'A3', 'C3' ]
