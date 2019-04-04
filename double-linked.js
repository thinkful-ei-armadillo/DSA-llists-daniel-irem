'use strict';

class _Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

// 9. Doubly linked list
// Implement a doubly linked list.

// The primary functions of the doubly linked list would be insert
// (First, Last, Before, After, and At), remove, and find.

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }


  insertFirst(item) {
    this.head = new _Node(item, this.head);
    this.tail === null ? this.tail = this.head : this.tail = this.tail.next;
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      const newNode = new _Node(item, null);
      tempNode.next = newNode;
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
      return 'item not found';
    }
    const newNode = new _Node(value, currNode, previousNode);
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

    let nextNode = currNode.next;
    const newNode = new _Node(value, nextNode, currNode);
    currNode.next = newNode;
    nextNode.previous = newNode;
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
      return 'item not found';
    }
    const newNode = new _Node(value, currNode, previousNode);
    previousNode.next = newNode;
    currNode.previous = newNode;
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
    // save the next node and move thru
    let nextNode = currNode.next;
    nextNode.previous = currNode.previous;
    previousNode.next = currNode.next;
  }
}

// Write a function mainDLL, and within it create the doubly linked list DLL and add the following items to it:
// Aquaria, Caprica, Gemenon, Picon, Sagittaron.

// Add Tauron to the list
// Remove Picon from the list

function mainDLL() {
  const DLL = new DoubleLinkedList();

  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  DLL.insertLast('Tauron');
  DLL.remove('Picon');

  console.log(DLL);
  console.log((reverseDll(DLL)));
}

mainDLL();


// 10. Reverse a DLL
// Given the doubly linked list above,
// write a program that reverses the doubly linked list.

function reverseDll(dll) {
  if (!dll.head) {
    return 'nothing in list';
  }

  let previousNode = dll.head;
  let currNode = dll.head;

  while (currNode !== null) {
    let wasNext = currNode.next;
    let wasPrev = currNode.previous;

    previousNode = currNode;
    currNode = currNode.next;

    previousNode.next = wasPrev;
    previousNode.previous = wasNext;
  }

  let wasHead = dll.head;
  let wasTail = dll.tail;

  dll.head = wasTail;
  dll.tail = wasHead;

  return dll;
}

// How is this implementation different than reversing the singly linked list?

// this implementation has to take into account both directions of each node - 
// previous as well as next. it also has to switch the head and tail values.