// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// SOLUTION #3 - Not ideal or best method, 
//       but works using the every() method.
//       and can also be a good talking point. 
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;

// MY SOLUTION - Longer method 
// function palindrome(str) {
  //   let reg = "/[\W]/g";
  //   let string = str.toLowerCase().replace(reg, ""); 
  //   let reversedStr = str.split("").reverse().join("");
  //   if (string === reversedStr) {
  //     return true; 
  //   } else {
  //     return false; 
  //   }
  // }


// SOLUTION #2 - shorter most direct way to solve
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed; 
// }