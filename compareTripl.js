// Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.

// compareTriplets has the following parameter(s):

// a: an array of integers representing Alice's challenge rating
// b: an array of integers representing Bob's challenge rating


function compareTriplets(a, b) {
    //make an array that holds the totals and counters for a and b
    const total = []
    let countera = 0
    let counterb = 0
    //loop through a 
    for (let i =0; i< a.length; i++) {
        //compare if one is greater than the other
        //whomever is larger gets the point 
        if (a[i] > b[i]){
            countera++
        //if they're equal no one gets the point
        } else if (a[i] === b[i]) {
            continue
        } else {
            counterb++
        }   
    }
    //return an array with sum of points acquired from a and b a is [0] and b is [1]
    total.push(countera, counterb)
    return total
}
a = [5, 6, 7]
b = [3, 6, 10]

console.log(compareTriplets(a, b))