// Implement Queue data structure with the standard enqueue and dequeue methods.
// What is the complexity of each method?

class MyQueue {
  
  constructor() {
    this.queue = {}; 
    this.size = 0;
    this.first = 0;
  }

  enqueue(item) {
    this.queue[this.size] = item;
    this.size++
  }

  dequeue() {
    const elem = this.queue[this.first]
    delete this.queue[this.first]
    this.first++
    return elem
  }
  
}