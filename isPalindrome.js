function isPalindrome(s) {
    const reverse_string = s.split('').reverse().join('');
    
    if (s === reverse_string) {
        return true
    } else {
        return false
    }
}

// function isPalindrome(s) {
//     const half = Math.floor(s.length / 2);
//     let num = 0;
//     for (let i = s.length - 1; i > half; i--){
//         let first = s[num]
//         let last = s[i]
//         num++;
//         if (first !== last) {
//             return false;
//         } 
//     }
//     return true
// }
// console.log(isPalindrome('racecar'))


//Recursive method
const myStr = 'abcdcba'
const myArr = myStr.split('') //turns string into an array

function isPal(arr) {
    if(arr.length <= 1) return true; //base case #1 (a palidrome can be both a string consisting of one character or and empty string)

    let first = arr.shift(); //removes the first element from the array
    let last = arr.pop(); //removes the last element from the array

    if(first !== last) return false; //base case #2 (comparing the first and last character in the array. If they're not similar that means that it isn't a palindrome. Since first and last removes the characters from the array this check continues running until either false is returned because the two characters aren't similar or you hit base case #1)

    return isPal(arr) //recursive call of function
}

console.log(isPal(myArr));