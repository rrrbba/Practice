//Count the number of certain characters in a string (Recursive method)

const myStr = 'Good night, goOd night! parting is such a sweet sorrow';
const myArr = myStr.toLowerCase().split(''); //use to lowercase to ensure we're counting the chars no matter the casing

function countChar(arr, letter) {
    let first = arr.shift() //removes the first character from array
    let count = (first === letter) ? 1 : 0; //if first elem is the character we're looking for increment count else do nothing

    if(arr.length === 0) return count; //base case (once arr is 0 return the count)

    return count + countChar(arr, letter); //we want to return the count plus the call to the function 
}

console.log(countChar(myArr, 'o'))