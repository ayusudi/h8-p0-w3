/* coba jangan hard code 

hitungWaktu = ( totalKM - cars[i][2] )/ cars[i][1]
sort winner dari hasil hitungWaktu*/

function winner(cars, totalKM) {
  var urutMobil = [];
  var arr = [];
  var hitungWaktu = [];

  for (let i = 0; i < cars.length; i++) {
    hitungWaktu = (totalKM - cars[i][2]) / cars[i][1];
    arr.push([cars[i][0], hitungWaktu]);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (arr[i][1] < arr[j][1]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  // Array dalam array diubah jadi 1 array aja
  temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i][0]);
  }
  arr = "";
  arr = temp;

  return arr;
}

console.log(
  winner(
    [
      ["B 1171 BA", 100, 200],
      ["B 1172 BA", 200, 0],
      ["B 1173 BA", 98, 220],
      ["B 1174 BA", 80, 400]
    ],
    450
  )
);
/*
    [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]
  */
