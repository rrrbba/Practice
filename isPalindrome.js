// function isPalindrome(s) {
//     const reverse_string = s.split('').reverse().join('');
    
//     if (s === reverse_string) {
//         return true
//     } else {
//         return false
//     }
// }

function isPalindrome(s) {
    const half = Math.floor(s.length / 2);
    let num = 0;
    for (let i = s.length - 1; i > half; i--){
        let first = s[num]
        let last = s[i]
        num++;
        if (first !== last) {
            return false;
        } 
    }
    return true
}
console.log(isPalindrome('rretr'))