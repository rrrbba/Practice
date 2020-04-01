//Iterative

function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      //if num from left arr at current index is less than num from right arr at current index
      if (left[leftIndex] < right[rightIndex]) {
        //add that num from left because we're looking for smaller number
        resultArray.push(left[leftIndex]);
        //increment left index
        leftIndex++; 
      //if that left num is larger that right  
      } else {
        //add right instead
        resultArray.push(right[rightIndex]);
        //increment right
        rightIndex++; 
      }
    }
  
    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
            // there is going to be left over numbers from either left or right and we know that they're already sorted, we add that to resultarray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }
testA = [2,3,5,7]
testB = [0,1,4,9]
console.log(merge(testA, testB))