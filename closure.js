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