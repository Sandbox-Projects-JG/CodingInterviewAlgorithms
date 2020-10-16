// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  //counters stores the amount of nodes at a given level
  let counters = [0];
  //store each node we visit along with 's' to determine when we are traversing the next level
  let arr = [root, "s"];
  //we want to check if our array is greater than one since 's' will always be inside the array
  while (arr.length > 1) {
    let node = arr.shift();
    //if the element within 'arr' is 's' then we know we are done traversing that specific level
    if (node === "s") {
      //so we add a new number into the counters array and initiate it with 0
      counters.push(0);
      //add 's' to the end of the 'arr' array again
      arr.push("s");
    } else {
      //if we have not gotten to the end of the level then we add that node's children and increment the current counter element by one
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}

module.exports = levelWidth;
