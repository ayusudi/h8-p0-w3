
function angkaPalindrome(num) {
  let isPalindrome = true
  while (isPalindrome) {
    num++;
    let str = num.toString();
    let diBalik = '';
    for (let i= str.length-1; i>=0;  i--){
      diBalik += str[i];
    }
    //untuk ngecheck 
    //console.log(num, diBalik)
    if (num==diBalik){
      isPalindrome = false
      return num;
    } 
  }
  }  
  
  
  // TEST CASES
  
  console.log(angkaPalindrome(8)); // 9
  
  console.log(angkaPalindrome(10)); // 11
  
  console.log(angkaPalindrome(117)); // 121
  
  console.log(angkaPalindrome(175)); // 181
  
  console.log(angkaPalindrome(1000)); // 1001
  