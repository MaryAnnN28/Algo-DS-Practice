function capitalize(str) {
  const words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}

// SOLUTION #2 - Avoids splitting into an array, however odd as first letter of first word will not have a space.  

// function capitalize(str) {
//   let result = str[0].toUpperCase();  // create a string and uppercase the letter
  
//   for (let i = 1; i < str.length; i++) { 
//     if (str[i - 1] === ' ') {    // if at the left of string character is a space
//       result += str[i].toUpperCase();   // then upperCase letter & add to result
//     } else {
//       result += str[i];   // if there is no space before letter, add to result
//     }
//   }
//   return result;         // return entire result 
// }