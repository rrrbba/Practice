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


//Turning the above into a proper tail call (which is when the return statment is only a recursive call to the function)

function countChars(arr, letter, total) {
    let firstChar = arr.shift();
    let count = (firstChar === letter) ? 1 : 0;

    if (arr.length === 0) {
        return count + total; //adding the count to the total number of times the charcter appears
    }

    return countChars(arr, letter, count + total); 
    //this call looks like (myArr, 'g', 0 + 0) for the letter g
    //the second call looks like (myArr, 'o', 1+ 0 =1) for the letter o
    //the third call looks like (myArr, 'o', 1 + 1 =2) for the letter o
    //the fourth call (myArr, 'd', 0 + 2 = 2) for the letter d
}

console.log(countChars(myArr, 'o', 0)); //Must start total at 0