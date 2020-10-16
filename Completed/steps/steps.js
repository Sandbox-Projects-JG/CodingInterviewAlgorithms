// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/*****This solution uses recursion to build a string*****/
function steps(n, row = 0, stair = "") {
  if (n === row) return;

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  const add = stair.length <= row ? "#" : " ";

  steps(n, row, stair + add);
}

module.exports = steps;

/*****This solution uses dual loops to build a string*****/
// function steps(n) {
//     //we use one loop to store the rows, and another to store the columns
//     for (let row = 0; row < n; row++) {
//       //everytime we create a new row, we create a new stair string
//       let stair = "";
//       //for each iteration of 'col' we check if the value is less than or equal to row in that case we add a #
//       for (let col = 0; col < n; col++) {
//         if (col <= row) {
//           stair += "#";
//         } else {
//           //if it doesn't meet that condition then we add a space to the string
//           stair += " ";
//         }
//       }
//       console.log(stair);
//     }
//   }
