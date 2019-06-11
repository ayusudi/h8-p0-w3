/* Revisi : 
1. Hilangkan console.log
2. Var deskriptif (tadinya namanya var rvrs, diganti jadi var numDibalik)
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
    var numDibalik = "";
    for (var j = numStr.length - 1; j >= 0; j--) {
      numDibalik += numStr[j];
    }

    if (number == numDibalik) {
      isPalindrome = false;
      return number;
    }
  }
}

console.log(palindromeChanger([117, 9, 20, 30, 42]));
// [ 121, 9, 22, 33, 44 ]
