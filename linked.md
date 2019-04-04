# linked lists

no built-in linked lists in JS, but we can build our own with a class.

## structure

head
L
next
I
next
N
next
K  ---- fourth value
next
D
next
NULL

## Insertion at the end
* Traverse to the end
* Create the new node
* Set the new node's next pointer to null
* Set the end node's next pointer to the node

head
L
next
I
next
N
next
K       D
next    next
NULL    NULL

becomes....

head
L
next
I
next
N
next
K      
next
D
next
NULL


## Insertion at the start
* Create the new node
* Set the new node's next pointer to the head's next pointer
* Set the head pointer to the new node

head    head
I       L
next    next
N
next
K      
next
D
next
NULL

## Insertion in the middle
* Traverse to the insertion point
* Create the node
* Set the new node's next pointer to the insertion node's next pointer
* Set the insertion node's next pointer to the new node

head
L
next
I
next
N
next
K      
next -- E
D    -- next
next
NULL

becomes...

head
L
next
I
next
N
next
K      
next
E
next
D
next
NULL


## Deletion from the start
* Replace the head pointer with the head node's next pointer

head
L
next
I    -- head
next
N
next
K      
next
D
next
NULL

becomes...

head
I
next
N
next
K      
next
D
next
NULL


## Deletion from the middle or end
* Navigate to the node before the node to delete
* Set the next pointer of the node before to the next pointer of the node to delete

head
L
next
I
next
N       next
next
K      
next
D    --
next
NULL

becomes...

head
L
next
I
next
N
next
D
next
NULL


## Arrays vs Linked Lists (in theory)

for random accessing, arrays are better.

                    Arrays  | Linked Lists
Sequential Access |    y          y
Random Access     |    y          n
Resizing          |    n          y
Reordering        |    n          y


## Cache locality

* CPU reading values directly from RAM is slow
* CPUs introduced caches
  * Don't just load in one piece of information, but load in all of the stuff around it too
  * Assumption: you are likely to use also data in memory addresses near the current memory address
* Arrays are stored in contiguous memory
  * Great for caches - all of the data is close together
* Linked lists are stored in non-contiguous memory
  * Bad for caches - the data is spread throughout the RAM


## Linked Lists vs Arrays

* **Linked lists are preferred to Arrays**
  * The list needs to grow or shrink
  * Insert or delete items in the middle of the list
  * Don't need random access to the data
  * Preserve ordered list
  * Need insertion/deletion to be fast

* **Arrays are preferred to Linked lists**
  * Need frequent random access to data
  * Number of items doesn't change during execution
  * Fast access to items


## Doubly linked list

* links values in both directions

HEAD-
-NULL
L
next-
-prev
I
next-
-prev
N
next-
-prev
K      
next-
-prev
E
next-
-prev
D
next-
NULL-
-TAIL

* inserting and deletion is the same concept/procedure as single linked list