// Given two strings, determine if they share a common substring. A substring may be as small as one character.

// For example, the words "a", "and", "art" share the common substring . The words "be" and "cat" do not share a substring.

// Function Description

// Complete the function twoStrings in the editor below. It should return a string, either YES or NO based on whether the strings share a common substring.

// twoStrings has the following parameter(s):

// s1, s2: two strings to analyze .

function twoStrings(s1, s2) {

    //loop through s1
        for (let i = 0; i<s1.length; i++){
            //check if s1 in s2
            if(s2.includes(s1[i])) {
                //if so return yes
                return "YES"
            }   
        }
        //if not return no
        return "NO"
}
string1 = "hungry"
string2 = "helping"
console.log(twoStrings(string1,string2))