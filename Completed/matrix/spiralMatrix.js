// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let results = [];

  //we loop through and create an empty array within the results array (essentially a row of empty arrays)
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1;
  //starting values are 0 while the end values are n - 1 (similar to array.length -1)
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    //fills in the top row
    for (let i = startColumn; i <= endColumn; i++) {
      //we assign the 'i' element of the first array in the results array (eg. if 'i' is '1' , [[1,null, null]])
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    //Instead of filling an entire row, we're filling the last two elements of the next two rows
    //[null, null, counter]
    //[null, null, counter]
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    //[null, null, counter]
    //[null, null, counter]
    //Once we filled in all the last elements we need to decrement the end column
    endColumn--;

    //We fill out the bottom row, but only the remaining elements going from right to left (the last element has been filled in up above)
    for (let i = endColumn; i >= startColumn; i--) {
      //we want to only work on the last row (endRow)
      results[endRow][i] = counter;
      counter++;
    }
    //After we filled in the bottom row, we just need to work on the row above it, so we decrement the end row by one
    endRow--;

    //start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    //after we fill in the array we increment the start column which should be at the endColumn spot ending the loop
    startColumn++;
  }
  //return the array of arrays
  return results;
}

module.exports = matrix;
