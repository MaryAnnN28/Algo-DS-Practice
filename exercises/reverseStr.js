// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION #3 - More Advanced 

// function reverse(str) {
//   return str.split('').reduce((reversed, char) => {
//     return char + reversed; 
//   }, '');
// }


// SOLUTION #4 (same as #1)
function reverse(str) {
  let reversedStr = str.split('').reverse().join('');
  return reversedStr; 
}


module.exports = reverse;


// SOLUTION #1 - Easy 
// function reverse(str) {
//   return str.split("").reverse().join("");
// }


// SOLUTION #2 - more work, using for of method 
// function reverse(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed; 
//   }
//   return reversed; 
// }