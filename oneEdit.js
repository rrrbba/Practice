// Write a function that returns whether two words are exactly "one edit”.
// An edit is:
// * Inserting one character anywhere in the word (including at the beginning and end)
// * Removing one character
// * Replacing one character



function OneEditApart(word1, word2) {
    let diff = 0;                   

  for (let i=0, j=0; i<word1.length; i++,j++) {
    if (word1[i] !== word2[j]) {
        if (word1.length < word2.length){
            i--
        } else if (word1.length > word2.length){
            j--
        }
        diff += 1;
    }
  }
  return diff <= 1
}

console.log(OneEditApart("cat", "dog"))
// = false
console.log(OneEditApart("cat", "cats")) 
// = true
console.log(OneEditApart("cat", "cut")) 
// = true
console.log(OneEditApart("cat", "cast")) 
// = true
console.log(OneEditApart("cat", "at")) 
// = true
console.log(OneEditApart("cat", "act")) 
// = false