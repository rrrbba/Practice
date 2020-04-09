//Given an array of integers, find the sum of its elements.
//For example
    //ar = [1,2,3], 1+2+3 = 6, so it would return 6

function simpleArraySum(ar) {

    return ar.reduce(function(a,b){ //reduce reduces array to single value by applying a function to each element in the array

        return a+b //a is the accumulator(accumulates the sum), b is the current value being processed

    },0) //zero is the inital value we want to use
}
array1 = [1,2,3,55,366,73]
console.log(simpleArraySum(array1))