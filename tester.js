
//Write a loop that makes 7 calls to console.log to output a triangle
for(let line="#"; line.length < 8; line+="#"){
    console.log(line)
}


//Write a program that console.logs the numbers 1-100. If they're divisible by 3 print Fizz, if divisible by 5 print Buzz and if divisible by both 3 & 5 print FizzBuzz
for(let i=1; i<=100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    } else if (i % 5 === 0){
        console.log("Buzz")
    } else if (i % 3 === 0 ){
        console.log("Fizz")
    } else {
        console.log(i)
    }
}
    
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

let size = 8;
let board = "";

for(let i=0; i<size; i++){
    for(let j=0; j<size; j++){
        if((j+i) % 2 == 0)
            board += " ";
        else 
            board += "#";
    }
    board += "\n"
    
}
console.log(board)


// You can build the string by starting with an empty one ("") and repeatedly adding characters. A newline character is written "\n".

// To work with two dimensions, you will need a loop inside of a loop. Put braces around the bodies of both loops to make it easy to see where they start and end. Try to properly indent these bodies. The order of the loops must follow the order in which we build up the string (line by line, left to right, top to bottom). So the outer loop handles the lines, and the inner loop handles the characters on a line.

// You’ll need two bindings to track your progress. To know whether to put a space or a hash sign at a given position, you could test whether the sum of the two counters is even (% 2).

// Terminating a line by adding a newline character must happen after the line has been built up, so do this after the inner loop but inside the outer loop.



const hummus = factor => {
    const ingredient = (amount, unit, name) => {
        let ingredientAmount = amount * factor;
        if(ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    }
    ingredient(1, "can", "chickpeas");
}

console.log(hummus(3))


// White Board Exercise
// What will be printed if you run this? Why?


function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test();

// It will print undefined and 2. The reason for the undefined for console logging the a variable is because of hoisting. When you hoist a variable that declared using var, it is initialized and assigned undefined.