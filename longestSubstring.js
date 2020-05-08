//MEDIUM DIFFICULTY
//Given a string, find the length of the longest substring without repeating characters.

// The idea is that as we iterate through the Array, 
//we keep track of the longest length we've seen so far. 
    //Each time we find a duplicate character, 
        //we slice the builder string at the previous occurence of said character. 
    //We then check if the result is longer than the current longest length.

const lengthOfLongestSubstring = (s) => {
    let longestStr = "";
    let longestLen = 0;

    for(i = 0; i < s.length; i++){
        
        const occIndex = longestStr.indexOf(s[i]);
        console.log(occIndex)
        longestStr = longestStr.concat(s[i]);
        console.log(longestStr)
        if(occIndex >= 0) { // found - slice at index of last occurence
            longestStr = longestStr.slice(occIndex + 1);
        }
        
        // longestLen = longestStr.length > longestLen ? longestStr.length : longestLen;

        if(longestStr.length > longestLen) {
            longestLen = longestStr.length
        } else {
            longestLen = longestLen
        }
    }
    
    return longestLen
};
const s = "pwwkew"
console.log(lengthOfLongestSubstring(s))


// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.