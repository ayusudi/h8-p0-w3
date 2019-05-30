function palindrome(kata) {
  var kataBalik= ''
  for (var i = 0; i<=kata.length-1; i++){
    kataBalik = kata[i] + kataBalik
  }
  return kata == kataBalik
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false