"use strict";

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// ASSIGNMENT

// 1. Create a linked list class
// Walk through the linked list code in the curriculum and understand it well.
// Then write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(value, target) {
    if (!this.head) {
      console.log("nothing in the list");
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
      console.log("item not found");
      return;
    }
    previousNode.next = new _Node(value, currNode);
  }

  insertAfter(value, target) {
    if (!this.head) {
      console.log("nothing in the list");
      return null;
    }

    let currNode = this.head;

    while (currNode !== null && currNode.value !== target) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("item not found");
      return;
    }
    currNode.next = new _Node(value, currNode.next);
  }

  insertAt(value, position) {
    if (!this.head) {
      console.log("nothing in the list");
      return null;
    }

    let previousNode = this.head;
    let currNode = this.head;

    // while ( (currNode !== null) && (currNode.value !== target) ) {
    //   previousNode = currNode;
    //   currNode = currNode.next;
    // }

    for (let i = 0; i < position - 1; i++) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("item not found");
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
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

// 2. Create a singly linked list

// Write a function main. Within the function, using the linked list class above, create a linked list
// with the name SLL and add the following items to your linked list:
// Apollo, Boomer, Helo, Husker, Starbuck.
// Add Tauhida to the list.
// Remove squirrel from the list.
// Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
// Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
// Implement a function called insertAt() that inserts an item at a specific position in the linked list.
// Add Athena before Boomer using your insertBefore() function.
// Add Hotdog after Helo using the insertAfter() method.
// Using the insertAt() method insert Kat in the 3rd position of the list.
// Remove Tauhida from the list.

function main() {
  const SLL = new LinkedList();

  SLL.insertFirst("Apollo");

  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");

  SLL.insertLast("Tauhida");

  // SLL.remove('squirrel');

  SLL.insertBefore("Athena", "Boomer");
  SLL.insertAfter("Hotdog", "Helo");

  SLL.insertAt("Kat", 3);

  SLL.remove("Tauhida");

  // console.log(JSON.stringify(SLL, null, 2));
  // display(SLL);
  // console.log(size(SLL.head));
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL, 'Hotdog'));
  console.log(findLast(SLL.head));

}

main();

// 3. Supplemental functions for a linked list
// Implement the following functions that operate on your linked list class.
// Note that these should be free functions instead of methods of the linked list class,
// so implement them outside the linked list class. Test each function using the list created in exercise 1.

// display: displays the linked list
// size: returns the size of the linked list
// isEmpty: finds if the list is empty or not (without using the size() function)
// findPrevious: finds the node before the item you are looking for
// findLast: returns the last node in the linked list
function display(ll) {
  let currentNode = ll.head;
  // if empty...
  if (!ll.head) {
    return null;
  }
  while(currentNode !== null){
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}

function size(head){
  if(head.next === null) return 1;
  return size(head.next)+1;
}

function isEmpty(ll){
  return (ll.head === null);
}

function findPrevious(ll, target){
  if (!ll.head) {
    console.log("nothing in the list");
    return null;
  }
  if (ll.head.value === target) {
    console.log("nothing before; you're at head");
    return;
  }
  let previousNode = ll.head;
  let currNode = ll.head;

  while (currNode !== null && currNode.value !== target) {
    previousNode = currNode;
    currNode = currNode.next;
  }
  if (currNode === null) {
    console.log("item not found");
    return;
  }
  return previousNode.value;
}

function findLast(head){
  if(head.next === null){
    return head.value;
  }
  return findLast(head.next);
}




// 4. Mystery program
// Analyze the following function (without running it in an IDE)
// to determine what problem it is trying to solve.
// What is thetime complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      } else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

// 5. Reverse a list
// Write an algorithm to reverse a linked list.
// The time complexity of your algorithm should be linear (O(n)).
// For this exercise, notice we are not asking you just to print the linked list
// in reverse or use another linked list to store the value in reverse order.
// Your program should reverse the direction of a given singly linked list. In other words,
// all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.

// 6. 3rd from the end
// Write an algorithm to find the 3rd element from the end of a linked list.
// Note You may be tempted to add a length property to your linked list class.
// The length property is not a typical property of linked list, therefore
// don't make any modification to the linked list class that is provided to you.

// 7. Middle of a list
// Write an algorithm to find the middle element
// of a linked list. Note You may be tempted to
// add a length property to your linked list class.
// The length property is not a typical property of linked list,
// therefore don't make any modification to the linked list class
// that is provided to you. Also, finding the size of the linked list
// using the size() function and dividing it by half will not find the correct middle of the linked list.
// So, don't use either of these approaches.

// 8. Cycle in a list
// Write an algorithm to find whether a linked list has a cycle
// (i.e., whether a node in the list has its next value pointing to an earlier node in the list).
// For this exercise, create a linked list with the name CycleList. Be sure to insert nodes in
// the list so that it has a cycle. Then test your program with a cycleList function.

// 9. Doubly linked list
// Implement a doubly linked list.

// The primary functions of the doubly linked list would be insert
// (First, Last, Before, After, and At), remove, and find.

// Write a function mainDLL, and within it create the doubly linked list DLL and add the following items to it:
// Aquaria, Caprica, Gemenon, Picon, Sagittaron.

// Add Tauron to the list
// Remove Picon from the list

// 10. Reverse a DLL
// Given the doubly linked list above,
// write a program that reverses the doubly linked list.
// How is this implementation different than reversing the singly linked list?
