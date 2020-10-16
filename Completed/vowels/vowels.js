// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  //the regexp uses brackets to denote which characters we're looking for
  //the g ensures we don't stop if we find one match, i means 'case insensitive' so this works for both upper and lower case characters
  const matches = str.match(/[aeiou]/gi);
  //if not matches are found we'll get 'null', otherwise we get an array of characters
  return matches !== null ? matches.length : 0;
}

module.exports = vowels;

/*****This uses an array to find vowels*****/
// function vowels(str) {
//     let count = 0;
//     const checker = ["a", "e", "i", "o", "u"];
//     for (let char of str.toLowerCase()) {
//       //if the character is found within the checker array
//       if (checker.includes(char)) count++;
//     }
//     return count;
//   }
