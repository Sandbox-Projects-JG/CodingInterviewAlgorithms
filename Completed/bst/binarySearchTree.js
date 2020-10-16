// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  insert(data) {
    //recursive function that will continue looking down the left side if a node currently exists
    if (data < this.data && this.left) {
      this.left.insert(data);
    }
    //otherwise we'll create a new node and assign it to the left
    else if (data < this.data) {
      this.left = new Node(data);
    }

    //recursive function that will continue looking down the right side if a node currently exists
    else if (data > this.data && this.right) {
      this.right.insert(data);
    }
    //otherwise we'll create a new node and assign it to the right
    else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    //if we found a node with the data then we'll return that node
    if (this.data === data) return this;
    //if the data is greater than our current node then we'll search down the left side if a node exist
    if (data < this.data && this.left) {
      return this.left.contains(data);
    }
    //otherwise we'll check the right side
    else if (data > this.data && this.right) {
      return this.right.contains(data);
    }
    //if we didn't find anything we'll return null;
    return null;
  }
}

module.exports = Node;
