//First, make node class
//this handles node creation
//the node is the basic building block to store the data and the next pointer
//everytime the class is instantiated, the constructor needs to initialize the two properities: data and next

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

//Creating nodes
let node1 = new Node(5)
let node2 = new Node(10)
let node3 = new Node(20)
let node4 = new Node(1)

//Connecting nodes
node1.next = node2
node2.next = node3
node3.next = node4

//Next, make the ll class that handles the main operations of the linked list and next pointer property
//This class initializes the head property to store the first node and size property
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //Add ability to insert at head
    insertToHead(data) {
        this.head = new Node(data, this.head);
        this.size++
    }
    //Add ability to insert at tail
    insertToTail(data) {
        //create new instance of the Node class
        const node = new Node(data);
        let tail = null;
        //check if list is empty, if so add this as the head
        if (!this.head) {
            this.head = node;
        } else {
            tail = this.head;
            //loop through ll to find tail and update the tail's next pointer
            while (tail.next) {
                tail = tail.next //setting tail to true tail, if tail has next
            }
            //else set tail.next to the node
            tail.next = node
        }
        //increase the size of ll after all of this
        this.size++
    }
    //Add ability to insert randomly
    insertAt(data, index) {
        //check if ll is empty
        if (!this.head) {
            this.head = new Node(data);
            return
        }
        //if it needs add to the front of the list
        if (index === 0) {
            this.insertToHead(data);
            return;
        }
        let node = new Node(data);
        let current, previous;
        let count = 0;
        //current will be first
        current = this.head;
        //check to see if count less than index
        while (count < index) {
            //iterate through list while moving pointer
            previous = current;
            count++;
            current = current.next;
        }
        //traverse the list until reaching desired position node
        //then assign the node next pointer to current 
        node.next = current;
        //then move previous down one to node
        previous.next = node;
        //increase the size
        this.size++
    }
    //Add ability to delete the first
    deleteFirst() {
        if(!this.head){
            return;
        }
        //make the next node to the head as the new head
        this.head = this.head.next;
        this.size--
        return this.head;
    }
    //Add ability to delete last node
    deleteLast() {
        if(!this.head) {
            return null;
        }
        //if there is only one node in the list
        if(!this.head.next) {
            this.head = null;
            return;
        }
        //to remove last node, will have to traverse list to find it while maintaining an extra pointer to point at the node before the last node
        let previous = this.head;
        let tail = this.head.next;

        while (tail.next !== null) {
            previous = tail;
            tail = tail.next;
        }
        //to delete last node, set the next pointer of the node before the last node to null
        previous.next = null;
        this.size--
        return this.head;
    }

}

const linkedList = new LinkedList();
linkedList.insertToHead(100);
linkedList.insertToHead(200);
linkedList.insertToHead(300);
linkedList.insertToTail(400);
linkedList.insertAt(600, 2);
// linkedList.deleteFirst();

console.table(linkedList);
console.log(linkedList.head)