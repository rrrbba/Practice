// Declare a character stack which will hold an array of all the opening parenthesis.
// Now traverse the expression string exp.
// If the current character is a starting bracket (‘(‘ or ‘{‘ or ‘[‘) then push it to stack.
// If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) then pop from stack and if the popped character is the matching starting bracket then fine else parenthesis are not balanced.
// After complete traversal, if there is some starting bracket left in stack then “not balanced”

  // On each input string, process it using the balance checker
  function balancedBrackets(string) {
    //use a stack for this to push and pop the character to the stack
    let stack = []

    let openb = {
        '[': ']',
        '(': ')',
        '{': '}',
        '|': '|'
    }
    let closingb = {
        ']': true,
        ')': true,
        '}': true,
        '|': true
    }

    //traverse through the string 
    for (let i = 0; i < string.length; i++) {
        let brac = string[i]

        //if there are open brackets
        if (openb[brac]) {
            //push the bracket to the stack
            stack.push(brac)
            //if there are closing brackets
        } else if (closingb[brac]) {
            //if there are some that are left over (one doesn't have a match)
            if (openb[stack.pop()] !== brac) {
                //return false
                return false
            }
        }
    }
    return stack.length === 0
}
// console.log(bb('{{||[]||}}'))

function balancedParenthesis(input) {
    //use a stack for this to push and pop the character to the stack
    let stack = []

    let openb = {
        '[': ']',
        '(': ')',
        '{': '}',
        '|': '|'
    }
    let closingb = {
        ']': true,
        ')': true,
        '}': true,
        '|': true
    }

    //traverse through the string 
    for (let i = 0; i < input.length; i++) {
        let brac = input[i]

        //if there are open brackets
        if (openb[brac]) {
            //push the bracket to the stack
            stack.push(brac)
            //if there are closing brackets
        } else if (closingb[brac]) {
            //if there are some that are left over (one doesn't have a match)
            if (openb[stack.pop()] !== brac) {
                //return false
                return false
            }
        }
    }
    return stack.length === 0

}
console.log(balancedParenthesis("[()]")) 
// => true
// balancedParenthesis('[()]{}{[()()]()}’) => true
// balancedParenthesis('[()]{’) => false
// balancedParenthesis('[(])’) => false