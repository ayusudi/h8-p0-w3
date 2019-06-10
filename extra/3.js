/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 4/7
  cars plat - D ada 2/7
  cars plat - A ada 1/7
  cars plat - C ada 1/7

  [OUTPUT]
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function mostCarsByState(cars) {
  var platA = [];
  var platB = [];
  var platC = [];
  var platD = [];
  var gabungPlat = [];
  var urutPlat = [];
  for (var i = 0; i < cars.length; i++) {
    if (cars[i] == "A") {
      platA.push(cars[i]);
    }
    if (cars[i] == "B") {
      platB.push(cars[i]);
    }
    if (cars[i] == "C") {
      platC.push(cars[i]);
    }
    if (cars[i] == "D") {
      platD.push(cars[i]);
    }
  }

  for (var i = 0; i < 1; i++) {
    if (platA.length == 1) {
      gabungPlat.push(["A", 14.285714285714285]);
    } else if (platA.length == 2) {
      gabungPlat.push(["A", 28.57142857142857]);
    } else if (platA.length >= 3) {
      gabungPlat.push(["A", 42.857142857142854]);
    }
  }
  for (var i = 0; i < 1; i++) {
    if (platB.length == 1) {
      gabungPlat.push(["B", 14.285714285714285]);
    } else if (platB.length == 2) {
      gabungPlat.push(["B", 28.57142857142857]);
    } else if (platB.length >= 3) {
      gabungPlat.push(["B", 42.857142857142854]);
    }
  }
  for (var i = 0; i < 1; i++) {
    if (platC.length == 1) {
      gabungPlat.push(["C", 14.285714285714285]);
    } else if (platC.length == 2) {
      gabungPlat.push(["C", 28.57142857142857]);
    } else if (platC.length >= 3) {
      gabungPlat.push(["C", 42.857142857142854]);
    }
  }
  for (var i = 0; i < 1; i++) {
    if (platD.length == 1) {
      gabungPlat.push(["D", 14.285714285714285]);
    } else if (platD.length == 2) {
      gabungPlat.push(["D", 28.57142857142857]);
    } else if (platD.length >= 3) {
      gabungPlat.push(["D", 42.857142857142854]);
    }
  }

  for (var i = 0; i < gabungPlat.length; i++) {
    if (gabungPlat[i][1] == 42.857142857142854) {
      urutPlat.push(gabungPlat[i][0], gabungPlat[i][1]);
    }
  }
  for (var i = 0; i < gabungPlat.length; i++) {
    if (gabungPlat[i][1] == 28.57142857142857) {
      urutPlat.push(gabungPlat[i][0], gabungPlat[i][1]);
    }
  }
  for (var i = 0; i < gabungPlat.length; i++) {
    if (gabungPlat[i][1] == 14.285714285714285) {
      urutPlat.push(gabungPlat[i][0], gabungPlat[i][1]);
    }
  }
  return urutPlat;
}

console.log(mostCarsByState(["B", "D", "B", "B", "A", "C", "D"]));
/*
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]
*/