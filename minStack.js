// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
 

// Example:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.





/**
 * initialize your data structure here.
 */
var MinStack = function() {
    //initialize the stack and minstack to hold min #
    this.stack = [];
    this.minstack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
//pushes element x onto the stack
MinStack.prototype.push = function(x) {
    //use the push method to add to stack
    this.stack.push(x);
    //if minstack is empty add the first number to the minstack or if x is less than than the last number in minstack add it to it
    if (!this.minstack.length || x <= this.minstack[this.minstack.length - 1]) {
        this.minstack.push(x)
    }
};

/**
 * @return {void}
 */
//removes the element on the top of the stack
MinStack.prototype.pop = function() {
    //use the pop method to pop from stack
    //check if empty first
    if (!this.stack.length) {
        return
    }
    const num = this.stack.pop();
    if (this.minstack[this.minstack.length -1] === num) {
        this.minstack.pop();
    }
    return num;
};

/**
 * @return {number}
 */
//gets the top element
MinStack.prototype.top = function() {
    //check if empty
    if (!this.stack.length) {
        return;
    }
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
//gets the minimum element in the stack
MinStack.prototype.getMin = function() {
    if (!this.minstack.length) {
        return;
    }
    return this.minstack[this.minstack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */