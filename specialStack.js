// Implement a special stack data structure with the standard push and pop functions. In addition, we want to add a getMin function. Imagine that a caller has an instance of your stack in memory. They’ve called push and pop a bunch of times, and now they can call getMin to get the smallest value on the stack. Ideally, we’d like each of these methods to be run at constant complexity.

class CoolStack {
  
  constructor() {
    this.stack = []
    this.minStack = []
  }


  pop() {
   // your code here - ideally O(1)
   let x = this.stack.pop();
    if (x === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
    
  }


  push(item) {
    // your code here - ideally O(1)
    this.stack.push(item);
    if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(item);
    }
  }
  
  getMin() {
    // your code here - ideally O(1)
    return this.minStack[this.minStack.length - 1];
  }
  
  
  
}


// Test case

let newStack = new CoolStack();
newStack.push(2);
newStack.push(789);
newStack.push(6);
console.log('Min', newStack.getMin());
newStack.push(1);
newStack.push(26);
console.log('Popped off', newStack.pop());
console.log('Min', newStack.getMin());
console.log(newStack)
console.log('Popped off', newStack.pop());
newStack.push(18);
newStack.push(24);
console.log('Popped off', newStack.pop());
console.log('Min', newStack.getMin());
console.log(newStack)
/* Output
Min 2
Popped off 26
Min 1
Popped off 1
Popped off 24
Min 2
*/

class CoolStack {
  
    constructor() {
      this.stack = []
      this.minStack = []
    }
  
  
    pop() {
     // your code here - ideally O(1)
     this.minStack.pop()
     return this.stack.pop()
  //    let x = this.stack.pop();
  //     if (x === this.minStack[this.minStack.length - 1]) {
  //         this.minStack.pop();
  //     }
      
    }
  
  
    push(item) {
      // your code here - ideally O(1)
      this.stack.push(item);
      if (this.minStack.length === 0 || item < this.minStack[this.minStack.length - 1]) {
          this.minStack.push(item);
      } else {
          this.minStack.push(this.minStack[this.minStack.length - 1])
      }
    }
    
    getMin() {
      // your code here - ideally O(1)
      return this.minStack[this.minStack.length - 1];
    }
    
    
    
  }