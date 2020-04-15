// Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers


function miniMaxSum(arr) {
    //sort array first in ascending order
    let sortarr = arr.sort(function(a,b){
        return a - b
    })
    console.log(sortarr)
    //find the max number (the last number)
    let topnum = sortarr.slice(1,5)
    //find the min number (the first number)
    let bottomnum = sortarr.slice(0,4)
    //sum the max up to the highest(not including)
    let topsum = topnum.reduce(function(a,b){
        return a + b
    })
    //sum the min down to the lowest (not including)
    let bottomsum = bottomnum.reduce(function(a,b) {
        return a + b
    })
    //consolelog the sums
    console.log(bottomsum, topsum)
}

arr = [17, 69, 2, 221, 8974]
console.log(miniMaxSum(arr))