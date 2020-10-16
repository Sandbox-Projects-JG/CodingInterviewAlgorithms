// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Math.sign(-20) returns -1, Math.sign(20) returns 1
function reverseInt(n) {
  //turn the number into a string, reverse it, rejoin it
  let reversed = n.toString().split("").reverse().join("");
  //parse it back into an integer then use Math.sign to determine if it's a positive or negative (returns 1 or -1 to multiply by)
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
