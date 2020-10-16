// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertFirst(data) {
    //replaces the current head
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) return null;
    let last = this.head;
    let current = this.head;
    while (last) {
      current = last;
      last = last.next;
    }
    return current;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return null;

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return null;

    if (!this.head.next) {
      this.head = null;
      return null;
    }

    let prev = this.head;
    let node = this.head;

    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
    return prev;
  }

  insertLast(data) {
    if (!this.head) this.head = new Node(data);
    else {
      let last = this.getLast();
      last.next = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) return null;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let previous = this.getAt(index - 1);
    let after = this.getAt(index + 1);
    if (!previous) return;
    previous.next = after;
  }

  insertAt(data, index) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    if (index === 0) {
      //this.head = new Node(data, this.head);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let prevNode = this.getAt(index - 1) || this.getLast();
    let currentNode = this.getAt(index);
    if (!prevNode) return;
    newNode.next = currentNode;
    prevNode.next = newNode;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
