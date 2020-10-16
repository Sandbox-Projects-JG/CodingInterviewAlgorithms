// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/*****This solution looks for spaces to the left of a character to deterime if it needs to be capitalized, then return a string */
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;

// function capitalize(str) {
//     //this array will store the completed string with uppercase characters
//     let words = [];
//     //this for loop will split the string into chunks based off the spaces between words
//     for (let word of str.split(" ")) {
//       //we then take the first element within that array chunk and uppercase it,
//       //then add it back to the rest of the string for that word
//       words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     //we then join the words array into a string with spaces
//     return words.join(" ");
//   }
