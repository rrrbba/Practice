function isPali(word){
    
    for(let i=0; i<word.length; i++) {
        if(word[i] !== word[word.length - i- 1]) {
            console.log(word[word.length-i -1])
            return false
        }
        
    }
    return true
}
const wordArr = 'racecars'
console.log(isPali('sracecars'))