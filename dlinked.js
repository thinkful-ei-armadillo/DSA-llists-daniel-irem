'use strict';

class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
    if(this.head.next === null) this.tail = this.head;
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } 
    else {
      let newNode = new _Node(item, null);
      let prevTail = this.tail;
      prevTail.next = newNode;
    //   newNode.next = null;


      newNode.prev = prevTail;
    //   prevTail.next = newNode; 
      
      this.tail = newNode;
      
    }
  }

  insertBefore(value, target) {
    if (!this.head) {
      console.log('nothing in the list');
      return null;
    }
    if (this.head.value === target) {
      this.insertFirst(value);
    }
    let previousNode = this.head;
    let currNode = this.head;

    while (currNode !== null && currNode.value !== target) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('item not found');
      return;
    }
    let newNode = new _Node(value, currNode);
    previousNode.next = newNode;
    currNode.previous = newNode;
  }

  insertAfter(value, target) {
    if (!this.head) {
      console.log('nothing in the list');
      return null;
    }

    let currNode = this.head;

    while (currNode !== null && currNode.value !== target) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('item not found');
      return;
    }
    let newNode = new _Node(value, currNode.next);
    currNode.next = new _Node(value, currNode.next);
  }

  insertAt(value, position) {
    if (!this.head) {
      console.log('nothing in the list');
      return null;
    }

    let previousNode = this.head;
    let currNode = this.head;

    for (let i = 0; i < position - 1; i++) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('item not found');
      return;
    }
    previousNode.next = new _Node(value, currNode);
  }

  find(item) {
    // starting the list
    let currNode = this.head;
    // if list is empty...
    if (!this.head) {
      return null;
    }
    // check for an item
    while (currNode.value !== item) {
      // if it's the end of the list, return null
      if (currNode.next === null) {
        return null;
      } else {
        // or, keep looking...
        currNode = currNode.next;
      }
    }
    // found it! return it.
    return currNode;
  }

  remove(item) {
    // if empty...
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // start at head
    let currNode = this.head;
    // keep track of the last node
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // save the last node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
    currNode.previous = previousNode;
  }
}

function main() {
  const DLL = new DoublyLinkedList();

  DLL.insertFirst('Aquaria');

  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaronn');

  DLL.insertLast('Tauron');

  DLL.remove('Picon');
  
  console.log(JSON.stringify(DLL, null, 2));
  // DLL.remove('Picon');

  // console.log(reverseList(DLL));
}

main();
