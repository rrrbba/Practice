// Complete the staircase function in the editor below. It should print a staircase as described above.

// staircase has the following parameter(s):

// n: an integer



function staircase(n) {
    //for the number(n) print the # on the lines 1 for 1 line two for 2 etc.
    //The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
    //The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
    for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padStart(n));
    }

}

staircase(22)