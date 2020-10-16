// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/*****this solution sorts the string then compares them******/
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  //this chain will remove special characters and spaces, lower case, turn into an array, sort, then turn it back into a string
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;

/*****Uses Two Objects to compare Keys and Length of Objects*****/
// function anagrams(stringA, stringB) {
//   //we want to create two objects from each string
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   //if the length of these objects do not match, that means we do not have an anagram
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
//     return false;
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// //this helper function will build the char maps to store the keys and the amount of times those keys show up in the string
// function buildCharMap(str) {
//   const charMap = {};
//   //the regexp is used to only find the alphabetical characters (no spaces or special characters), make it lower case then add it to the object
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }
