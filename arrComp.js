// Implement your own deep comparison function for arrays.
// Let’s limit them to only contain numbers or strings.
// One level deep is OK; however, if you have time you can try to make sure it can handle nested arrays.


function compareTwoArrays(arr1, arr2) {

    if(arr1 === null || arr2 === null) return false;
    if(arr1.length !== arr2.length) return false;

    for(let i =0; i<arr1.length; i++) {
        if(arr1[i] !== arr2[i]){
            return false
        }
    }
    return true

}
    
// Test cases to verify
console.log(compareTwoArrays([1,2,3], [1,2,3])); // true
console.log(compareTwoArrays([3,3,3], [1,2,3])); // false
console.log(compareTwoArrays([1,2,3,4], [1,2,3])); // false
console.log(compareTwoArrays([1,2,3], [1,2,3,4])); // false