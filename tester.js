
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
    