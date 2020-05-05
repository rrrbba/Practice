// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.




function adjacentElementsProduct(inputArray) {
    // check if nums next to each other produce the largest product
        let largest = inputArray[0] * inputArray[1]
        for (let i =0; i<inputArray.length; i++){
            let current = inputArray[i]
            let next = inputArray[i+1]
            if (current * next >= largest){
                largest = current * next
            }
        }
        return largest
    }