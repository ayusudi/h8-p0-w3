/*

  TOL JAKARTA BANDUNG

  Karena adanya mudik lebaran maka pemerintah menerapkan sistem beberapa jalur prioritas.
  disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan yang paling cepat
  sampai ke tujuan.

  Plat nomor kuning paling cepat sampai, dilanjutkan merah, dan terakhir hitam.
  Jam keberangkatan sesuai urutan dalam array.

  [INPUT]
  [['B 1171 BA', 'merah'], ['B 1172 BA', 'kuning'], ['B 1173 BA', 'hitam'], ['B 1174 BA', 'hitam']]

  [PROCESS]
  kuning => 'B 1172 BA'
  merah => 'B 1171 BA'
  hitam => 'B 1173 BA', 'B 1174 BA'

  [OUTPUT]
  [ 'B 1172 BA', 'B 1171 BA', 'B 1173 BA', 'B 1174 BA' ]  

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function firstArrived(cars) {
  var urut =[];
  var kuning =[];
  var merah =[];
  var hitam =[];
  for (var i= 0; i<cars.length; i++){
    if(cars[i][1]=='kuning'){
      kuning.push(cars[i][0])
    }
    if (cars[i][1]=='merah'){
      merah.push(cars[i][0])
    }
    if (cars[i][1]=='hitam'){
      hitam.push(cars[i][0]) 
     }
    
  }

  for (var i = 0; i < kuning.length; i++) {
    urut.push(kuning[i])
  }
  
  for (var i = 0; i < merah.length; i++) {
    urut.push(merah[i])
  }
  for (var i = 0; i < hitam.length; i++) {
    urut.push(hitam[i])
  }

  return urut
}; 

//TEST CASE

console.log(firstArrived([['B 1171 BA', 'merah'], ['B 1172 BA', 'kuning'], ['B 1173 BA', 'hitam'], ['B 1174 BA', 'hitam']]));
/*
  [ 'B 1172 BA', 'B 1171 BA', 'B 1173 BA', 'B 1174 BA' ]
*/
//console.log(firstArrived([['B 1174 BA', 'hitam'], ['B 1171 BA', 'merah'], ['B 1173 BA', 'hitam'], ['B 1172 BA', 'kuning']]));
/*
  [ 'B 1172 BA', 'B 1171 BA', 'B 1174 BA', 'B 1173 BA' ]
*/
