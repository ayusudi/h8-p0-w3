/*
  PALINDROME CHANGER

  Palindrome changer adalah sebuah fungsi untuk mengubah semua isi
  array of numbers menjadi angka palindrome. Palindrome adalah sebuah kata atau angka
  yang sama nilainya ketika dibalik.

  EXAMPLE:
  console.log(palindromeChanger([102, 12, 47]))
  // [ 111, 22, 55]
*/
function palindromeChanger(numbers) {
  var result = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i].toString().length > 1) {
      result.push(palindrome(numbers[i]));
    } else {
      result.push(numbers[i]);
    }
  }
  return result;
}

function palindrome(number) {
  var isPalindrome = true;
  while (isPalindrome) {
    number++;
    var numStr = number.toString();
    var rvrs = "";
    for (var j = numStr.length - 1; j >= 0; j--) {
      rvrs += numStr[j];
    }
    //console.log(number, rvrs)
    if (number == rvrs) {
      isPalindrome = false;
      return number;
    }
  }
}

console.log(palindromeChanger([117, 9, 20, 30, 42]));
// [ 121, 9, 22, 33, 44 ]
