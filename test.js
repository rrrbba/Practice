//making anagrams
    function makeAnagrams(a, b) {
        //use object to hold the letters and the times they appear
        let letterfreq = {};

        //for the each char in a
        a.split('').forEach(char => 
            //go through and increment the chars are there in a 
            letterfreq[char] = (letterfreq[char] || 0) + 1); // increment
            // console.log(letterfreq) // { c: 1, d: 1, e: 1 }

        //for each char in b
        b.split('').forEach(char => 
            //go through and if they're there decrement it, if not do nothing
            //want to decrement so we can get a correct answer from the sum
            letterfreq[char] = (letterfreq[char] || 0) - 1); // decrement
            console.log(letterfreq) //{ c: 0, d: 1, e: 1, a: -1, b: -1 }
        
        //get the values from the obj and use the reduce method on them to get the number of deletions that were made. If the strings share a similar value the value in the obj would be zero 
        //sum is total, key is currentValue
        // console.log(Object.values(letterfreq))
        let answer = Object.values(letterfreq).reduce((sum, values) => 
           //go through and get the absolute value sum for the values
            sum + Math.abs(values), 0);
        
        
        return answer
}
   
a = 'cde'
b = 'abc'

console.log(makeAnagrams(a, b))


//possible time complexity is 2n because there are one O(n) foreach string and then using the reduce on the values is O(1)








//REVERSE WITHIN PARENTHESES

// Loop the whole string and push into a stack for non-")" character.
// If we get a ")" in the loop, we pop all characters until meets "(", and push them into stack again in sequence to reverse them.

const reverseParentheses = s => {
//need to reverse the chars in parentheses, rest can stay same order
    //can use stack because of LIFO (last in first out)
    //loop through the string
    //if the come to a )
    //pop all chars until we get (
    //then push them back onto the stack to reverse them

    const stack = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== ")") { //if the char isn't )
        stack.push(s[i]); //push it onto stack
        console.log(`\nLOOPING THROUGH`, stack)
        continue;
      }
      let char = stack.pop();
      let revwords = []; //for the words that need to be reversed
      while (char !== "(") { //while we haven't encountered an open parentheses
        revwords.push(char); //push the revwords onto the array
        console.log(`\nThis is getting pushed to revwords:`, char) 
        console.log(`\nThis is revwords`, revwords)
        char = stack.pop();
        console.log(`POPPING OFF:`, char)
      }
      //what this is doing is pushing the words within the parentheses onto the revwords array. Once it encounters a ( it's going to pop them right in the order that they were pushed, there by reversing them. This continues on until the while loop breaks



      while (revwords.length) { //while there is something in array
        console.log(`\nPUSHING THIS BACK TO STACK`, revwords )
        stack.push(revwords.shift()); //push those charac onto the stack until there's nothing left, without the shift there is an infinite loop
        
        console.log(`\nThis is the stack,`, stack)
      }
      //what this is doing is checking if there is somehting in the revwords array, we're going to push
    }
    //join the stac back to a string
    return stack.join("");

  };

console.log(reverseParentheses('foo(bar)baz(blim)boo'))

//First we start by looping through the array and pushing everything to the stack until we encounter a )
//Next we're going to push every letter between the parentheses to an array called revwords and we're going to know to stop once we encounter a (, we don't want to push any parentheses onto the stack so as it won't be used in the final word
// Then we're going to want to push those letters from the revwords array to the stack in the order they appear to reverse them, we do this by running a while loop on the length of the revwords array.
// Finally we're going to want to use .join to join the words back together and return it

//using a stack is O(n)
//doing a for loop is O(n)
//pop is O(1)
//push is O(1)
//shift is O(n)