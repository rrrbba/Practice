function outer(){
    let counter = 0;

    function add() {
        let number = 1;
        counter = counter + number;
        console.log(counter)
    }
    return add;
}

const addFunc = outer() //this creates a closure. This comes with the extra stuff (backpack/ persistant lexical(static = function gets it's scoped from where it's writte not where it's run) scope referenced data) that comes with the variables of the outer function
// addFunc() // returns 1
// addFunc() //returns 2 because the first call has persistant memory

// const addFunc2 = outer() // creating a new closure
// addFunc2() //returns 1 because this closure comes with different stuff. Even though they're calling the same outer function. Addfunc and addFunc exist in different realities

//Write a function that we can only run once
//If you run it a first time it should print a timestamp with the label 'First run'
//If you try to run it again it shouldn't do anything
//Function with memory = closure

function outer() {
    //Has to remember it's been called once so we have to store the variable here. This will be the stuff that comes in the backpack (this stuff comes from the outer function)
    let didRun = false;

    function once(){
        //if it hasn't run 
        if(!didRun){
            //set memory that its run 
            didRun = true
            console.log("first run", Date.now())
        }
    }
    return once;
}

const ourOnceFunc = outer(); //when we run outer, it's going to run once() and return once that will come with the variable didRun

ourOnceFunc()
ourOnceFunc()
ourOnceFunc()

//Practical application of a closure is a gaming app where the first player gets the payout and the rest of the players get nothing

// Implement function "after" that takes the number of times the callback can be executed as the first parameter and the callback function as the second parameter.

function after(timesToCall, callback) {
  let numberLock = timesToCall
    let stopRunning = false;
    function callback() {
        if(!stopRunning){
            stopRunning = true;
            for(let i=0; i<numberLock; i++){
                console.log('test')
            }
        }
  }
    return callback
    
}


// test setup
const myAfterFunc = after(3, () => console.log('test'));


myAfterFunc(); // prints test
myAfterFunc(); // prints test
myAfterFunc(); // prints test
myAfterFunc(); // nothing is printed



// Implement a function "rollCall" that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log ‘All present’.

// function rollCall(namesArray) {
//     let counter = 0;
//     function callback() {
//       if (counter < namesArray.length) {
//         console.log(namesArray[counter]);
//         counter++;
//       } else {
//         console.log("All present");
//       }
//     }
//     return callback;
    
    
// }


// // test setup
// const myRollCall = rollCall(['John', 'Mary', 'Jane', 'David']);
// myRollCall(); // prints John
// myRollCall(); // prints Mary
// myRollCall(); // prints Jane
// myRollCall(); // prints David
// myRollCall(); // All present
// myRollCall(); // All present




// Create a function "cycleIterator" that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

function cycleIterator(input) {
    let counter = 0;
    function cyclingItems() {
      counter++;
      console.log(input[(counter - 1) % input.length]);
    }
    return cyclingItems;
}


const myFunc = cycleIterator(['John', 'Mary', 'Jane', 'David']);
myFunc(); // prints John
myFunc(); // prints Mary
myFunc(); // prints Jane
myFunc(); // prints David
myFunc(); // prints John
myFunc(); // prints Mary




// Implement a function "makeHistory" that returns a function (that will accept a string). The returned function will save a history of strings passed into the returned function (one per invocation only). Every time a string is passed into the function, the function should return that same string with the word 'done' after it. However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that deleted string with the word 'undone' after. If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'.

function makeHistory(limit) {
    const memory = [];
    function closureFn(input) {
      if (input !== "undo") {
        if (memory.length >= limit) memory.shift();
        memory.push(input);
        return input + " - done";
      } else {
        if (memory.length === 0) return "nothing to undo";
        let remove = memory.pop();
        return remove + " - undone";
      }
    }
    return closureFn;

}

// testing setup
const myHistory = makeHistory();


console.log(myHistory('exercise')); // exercise - done
console.log(myHistory('study')); // study - done
console.log(myHistory('cook')); // cook - done
console.log(myHistory('eat')); // eat - done
console.log(myHistory('sleep')); // sleep - done
console.log(myHistory('undo')); // sleep - undone
console.log(myHistory('undo')); // eat - undone
console.log(myHistory('watch tv')); // watch tv - done
console.log(myHistory('undo')); // watch tv - undone
console.log(myHistory('undo')); // cook - undone
console.log(myHistory('undo')); // study - undone
console.log(myHistory('undo')); // exercise - undone
console.log(myHistory('undo')); // nothing to undo
console.log(myHistory('undo')); // nothing to undo