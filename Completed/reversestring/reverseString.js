// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//*****Using reduce helper*****
function reverse(str) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}

reverse("asdf");

module.exports = reverse;

//*****array reversal solution*****
// function reverse(str) {
//   //turns string into an array
//   const arr = str.split("");
//   //reverse the array
//   arr.reverse();
//   //then join them back as a string
//   return arr.join("");
// }

//*****Looping solution*****
// function reverse(str) {
//   let reversed = "";
//   //this adds the character one by one back to back which reverses the string
//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }
