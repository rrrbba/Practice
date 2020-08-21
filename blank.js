// White Board Exercise
// What will be printed if you run the following code? Why?

// ----------------------------------------


var counter = 1;

function outerCounter(){
    counter++; //outputs 2, incrementing variable on line 1
    var counter = 2; //replaces var on line 1
  
    function innerCounter(){
        counter++; //outputs, incrementing variable on line 5
        var counter = 3; //replacing counter var on line 8
        console.log(counter); //outputs var on line 9
    }

    innerCounter();
}

outerCounter();



// What about if we remove the variable declarations inside the functions? Why?

// ----------------------------------------

var counter = 1;

function outerCounter(){
    counter++; //incrementing var on line 20 -> 2
    
    function innerCounter(){
        counter++; //incrementing var on line 20 ->3
        console.log(counter);
    }
    
    innerCounter();
}

outerCounter();



// For the top code: You will get 3 printed to the console. This is because in the inner counter function, the var counter = 3 is replacing the variable counter in the outerCounter function. So whatever the counter var is assigned to in the innerCounter function is what will get printed to the console.
// For the bottom code: You will get 3 as well. However this time it's because the counter is being correctly incremented instead of being overwritten like in the top code.