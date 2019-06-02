// un = ar^n-1

function tentukanDeretGeometri(arr) {
  var r = arr[1]/arr[0];
  var hasil ='';
  for (var i= 0; i<arr.length; i++){
    var rLain = arr[i]/arr[i-1];
    if (r == rLain){
      hasil = 'true'
    }
    else {
      hasil = 'false'
    }
  }
  return hasil
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false