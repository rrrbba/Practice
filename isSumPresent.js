// Given two pieces of information: an array of numbers and another number representing a sum, find if there is a pair of numbers in the array that add up to the given sum.

// If there is at least one pair return the pair of numbers,
// If not return false.

// Try to find the most optimal solution 
// Hint: this can be solved in linear time.


function isSumPresent(input, sum) {
  
    let sums = [];

    // check each element in array
    for (let i = 0; i < input.length; i++) { 
  
      // check each other element in the array
      for (let j = i + 1; j < input.length; j++) {
  
        // if these two elements add up to sum
        if (input[i] + input[j] === sum) {
          sums.push([input[i], input[j]]);
          return sums
        }
  
      }
  
    }
  
    //so sums found
    return false
  
}


// Test cases


console.log(isSumPresent([1, 8, 23, 3, 7, 9], 8)) // return [1,7]  (b/c 1 and 7 add up to 8)

console.log(isSumPresent([1, 8, 23, 3, 7, 9], 11)) // return [8,3] (b/c 8 and 3 add up to 11)

console.log(isSumPresent([1, 8, 23, 3, 7, 9], 19)) // false (b/c no two numbers add up to 19)