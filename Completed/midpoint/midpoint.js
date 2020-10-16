// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  //we start off with the starting node
  let fast = list.getFirst();
  let slow = list.getFirst();

  //while our 'fast' point has two nodes in front of it we'll continue looping
  while (fast.next && fast.next.next) {
    //move 'slow' up to the next node
    slow = slow.next;
    //move 'fast' up two nodes
    fast = fast.next.next;
  }
  //once we break out of the while loop we know we found the middle point by looking at the node for 'slow'
  return slow;
}

module.exports = midpoint;
