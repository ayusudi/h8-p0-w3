/* Revisi :
1. Jangan hardcode
2. Pembaruan disini, dibuat code presentase-nya

Yang gak bisa di code ini kalo plat mobilnya 2 huruf atau lebih 
*/

function mostCarsByState(cars) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var avaiblePlat = [];
  var urutPlat = [];

  // Untuk ngecheck ada huruf apa aja di 'Plat Cars'
  for (let i = 0; i < cars.length; i++) {
    avaiblePlat.push([]);
  }
  for (var i = 0; i < cars.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
      if (cars[i] === alphabet[j]) {
        avaiblePlat[j].push(cars[i]);
      }
    }
  }

  /* Mengelompokkan plat yang sama dalam satu array. 
     Lalu plat kosong dihapus/tidak dimasukkan */
  for (var a = 0; a < avaiblePlat.length; a++) {
    if (avaiblePlat[a].length > 0) {
      urutPlat.push(avaiblePlat[a]);
    }
  }

  // Calculate Presentase
  var hasil = [];
  for (var b = 0; b < urutPlat.length; b++) {
    var hitungPresentase = (urutPlat[b].length / cars.length) * 100;
    hasil.push([urutPlat[b][0], hitungPresentase]);
  }

  // Diurutkan, tapi array dalam array.
  for (let i = hasil.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (hasil[i][1] > hasil[j][1]) {
        var temp = hasil[i];
        hasil[i] = hasil[j];
        hasil[j] = temp;
      }
    }
  }

  // Array dalam array diubah jadi 1 array aja
  temp = [];
  for (let i = 0; i < hasil.length; i++) {
    temp.push(hasil[i][0], hasil[i][1]);
  }
  hasil = "";
  hasil = temp;

  return hasil;
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
