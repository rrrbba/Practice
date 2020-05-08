// function firstNotRepeatingCharacter(s) {
//     //initialize an object
//     //add the letters to it and the number of times they appear as you add them
//     //the first one that doesn't have a number greater than 1 return it
//     //if no none repeating, return _

//     const hash = {}

//     for(char in s){
//         hash[char] += 1
//         console.log(hash)
//     }
// }


function firstNotRepeatingCharacter(s) {
    //initialize an object
    //add the letters to it and the number of times they appear as you add them
    //the first one that doesn't have a number greater than 1 return it
    //if no none repeating, return _

    for(let i = 0; i<s.length; i++) {
        console.log(s[i])
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])){ //looking for if the index is the same in both cases essentially
            //indexOf returns first index at which an elem. can be found in the array or -1 if not present
            //lastIndexOf returns the index within the calling string obj of the last occur of the specified value, searching backwards from fromIndex. Returns -1 if the value isn't found
            // console.log(s.indexOf(s[i]))
            console.log(s.lastIndexOf(s[i]))
            return s[i]
        }
    }
    return '_'
}
s = "abacabad"
console.log(firstNotRepeatingCharacter(s))