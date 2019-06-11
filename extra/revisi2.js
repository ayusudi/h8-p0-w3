/* Revisi :
1. Hilangkan console.log
*/

function winner(cars, totalKM) {
  var urut = [];
  var waktu = [];
  var jarakSisa = [];
  var carKe0 = [];
  var carKe1 = [];
  var carKe2 = [];
  var carKe3 = [];
  for (var i = 0; i < cars.length; i++) {
    if (totalKM - cars[i][2] >= 0) {
      jarakSisa.push(totalKM - cars[i][2]);
      waktu.push([cars[i][0], jarakSisa[i] / cars[i][1]]);
    }
    if (waktu[i][1] < 1) {
      carKe0.push(waktu[i][0]);
    }
    if (waktu[i][1] == 2.25) {
      carKe1.push(waktu[i][0]);
    }
    if (waktu[i][1] >= 2.34 && waktu[i][1] < 2.5) {
      carKe2.push(waktu[i][0]);
    }
    if (waktu[i][1] == 2.5) {
      carKe3.push(waktu[i][0]);
    }
  }
  for (var i = 0; i < carKe0.length; i++) {
    urut.push(carKe0[i]);
  }
  for (var i = 0; i < carKe1.length; i++) {
    urut.push(carKe1[i]);
  }
  for (var i = 0; i < carKe2.length; i++) {
    urut.push(carKe2[i]);
  }
  for (var i = 0; i < carKe3.length; i++) {
    urut.push(carKe3[i]);
  }

  return urut;
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
