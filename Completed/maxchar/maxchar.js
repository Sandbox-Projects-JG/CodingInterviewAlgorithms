// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //we'll store each character in an object
  let charMap = {};
  let max = 0;
  let maxChar = "";
  //the character is the 'key' and the value is the amount of times it appears
  for (let char of str) {
    //if that key exists then we increment it's value
    if (charMap[char]) charMap[char]++;
    //otherwise we create the key and assign a value of 1
    else charMap[char] = 1;
  }
  //we use a for loop through iterate through the charMap object
  for (let char in charMap) {
    //we check to see if the value of that key (the character) is greater than the current max value if so we assign a new max/maxChar
    if (charMap[char] > max) {
      console.log(`${char} has appeared ${charMap[char]} times`);
      max = charMap[char];
      maxChar = char;
    }
  }
  //return the character with the highest count
  return maxChar;
}

maxChar("Jonathan");

module.exports = maxChar;
