/// un = a+b(n-1)

function tentukanDeretAritmatika(arr) {
var b = arr[1]-arr[0]
var hasil = '';
for(var i = 1; i<arr.length; i++){
if (b == arr[i]-arr[i-1]) {
  hasil ='true';
  }
else {
  hasil = 'false';
  }
}
return hasil
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false