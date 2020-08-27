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