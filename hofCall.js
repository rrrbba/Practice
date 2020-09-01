//HOFs and callbacks

//Write a function that performs an action on an inputarray
function modifyArray(inputArray, action) {

    for(let i=0; i<inputArray.length; i++){
        //it's going to perform an action on each element in array
        inputArray[i] = action(inputArray[i])
    }
    return inputArray;
}

const subtract20 = input => input - 20;
const add100 = input => input + 100;

const result = modifyArray([100, 200, 310], add100)
//OR we can just pass the action in as a parameter
const result2 = modifyArray([100,200,310], input => input + 100)
console.log(result)
console.log(result2)

//HOF = a function that takes another function as a parameter(argument)
//HOF can also be a function that returns a function but we instead of calling HOFs, we call it closure
//Callback = a function that's being passed as a parameter (like on result2 with input => input +100 OR how action is on line 4) because we're going to call it back

//Simple example of HOF and callback
function ourHOF(callback) { //The HOF getting the callback passed in as a parameter
    console.log("do stuff")
    callback() //calling the callback
}

//Making the callback
function ourCall() {
    //Work for the callback
    console.log('Hello from callback')
}
ourHOF(ourCall) //calling the HOF with the callback(ourCall) passed in as a parameter
ourHOF(() => console.log("Hello from callback version2")) //another way to get call the callback


// Implement a function "rollCall" that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log ‘All present’.

function rollCall(namesArray) {
    let flag = false
    function callback() {
        
        if(!flag){ 
            flag = true
            for(let i=0; i<namesArray.length; i++){
                console.log(namesArray[i])
            }
        } 

        console.log('All present')
    }
    
    return callback
}


// test setup
const myRollCall = rollCall(['John', 'Mary', 'Jane', 'David']);
myRollCall(); // prints John
myRollCall(); // prints Mary
myRollCall(); // prints Jane
myRollCall(); // prints David
myRollCall(); // All present
myRollCall(); // All present



// Implement a function "multiMap" that takes two parameters. First - an array of elements (numbers or strings), second - an array of functions that take one argument, perform some action and then print the result. Both arrays have to be the same size. For each element in the first input array call the function in the second input array.

// See function definition and test cases for more clarification

function multiMap(inputArray, actionsArray) {
  
    return inputArray.reduce((accum, item) => {
        console.log(accum[item])
        accum[item] = actionsArray.map((fn) => fn(item));
        return accum;
      });
}


// testing setup

const input = [2, 3, 'desk'];
const actions = [elem => console.log(elem * 2),
                 elem => console.log(elem + 10),
                 elem => console.log(elem + 's')];


multiMap(input, actions);


/* your output should be:
4
13
desks
*/


// function majority(inputArray, callback) {
//     let trueCount = 0;
//     let falseCount = 0;
//     inputArray.forEach((item) => {
//       callback(item) ? trueCount++ : falseCount++;
//     });
//     return trueCount > falseCount ? true : false;
//   }

//   // testing setup
// // let input = [2, 3, 19, 13, 1, 55];


// // console.log(majority(input, elem => elem > 2)); // true
// // console.log(majority(input, elem => elem > 10)); // false
// // console.log(majority(input, elem => elem > 50)); // false



// // Implement a function called debounce that accepts a function and returns a new function that only allows invocation of the given function after interval milliseconds have passed since the last time the returned function ran.
// // If you try to call the function before the interval has passed it should print ’Too fast’
// // See function definition and testing setups for more clarifications

// function debounce(action, interval) {
//     let counter = 0;
//     let hasRan = false;

//     function closure() {
//       let id = undefined;
//       if (!hasRan) {
//         ///this is the first run
//         id = setInterval(() => counter++, 1);
//         hasRan = true;
//         return action();

//       } else {

//         //for future runs
//         if (counter < interval) {
//           // too fast
//           counter = 0;
//           clearInterval(id);
//           id = setInterval(() => counter++, 1);
//           console.log("Too fast");

//         } else {

//           //enough time has passed
//           counter = 0;
//           clearInterval(id);
//           id = setInterval(() => counter++, 1);
//           return action();
//         }
//       }
//     }
//     return closure
// }

// //testing setup
// const myDebounce = debounce(() => console.log('test'), 1000);

// // test 1
// // myDebounce(); // test
// // myDebounce(); // too fast

// // test 2
// myDebounce(); // test
// setTimeout(myDebounce, 2000); // test after 2 seconds

// // test 3
// myDebounce(); // test
// setTimeout(myDebounce, 900); // too fast