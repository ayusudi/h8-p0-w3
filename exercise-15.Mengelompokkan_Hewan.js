//Diberikan sebuah function groupAnimals(arr) 
//yang menerima satu parameter berupa array yang berisi string. 
//Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok
//array yang dikumpulkan sesuai dengan abjad depannya. 
//Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

//Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

//maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

//Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

console.log('CARA I')
function groupAnimals(hewan) {
  var a = []
  var c = []
  var k = []
  var u = []
  var urut =[];
  for (var i =0; i<hewan.length; i++){
    if (hewan[i][0]== 'a'){
      a.push(hewan[i])
    }
    if (hewan[i][0]== 'c'){
      c.push(hewan[i])
    }
    if (hewan[i][0]== 'k'){
      k.push(hewan[i])
    }
    if (hewan[i][0]== 'u'){
      u.push(hewan[i])
    }
  }
  if (a.length> 0){
    urut.push (a)
  }
  if (c.length> 0){
    urut.push (c)
  }
  if (k.length> 0){
    urut.push (k)
  }
  if (u.length> 0){
    urut.push (u)
  }
  return urut
  }
  
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]