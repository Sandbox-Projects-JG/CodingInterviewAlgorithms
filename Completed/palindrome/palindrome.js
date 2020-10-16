// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//*****Reverse array then join to make string and compare*****
function palindrome(str) {
  let reversed = str.split("").reverse().join("");
  return reversed === str;
}

module.exports = palindrome;

//*****Using an array helper "every"*****
// function palindrome(str) {
//     //loops through the string checking the first character with the last and moving inward
//     return str.split("").every((char, i) => {
//       return char === str[str.length - i - 1];
//     });
//   }
