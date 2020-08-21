function first(){
    second();
    console.log('first')
}

function second(){
    third()
    console.log('second')
}

function third() {
    console.log('third')
}


first() //the output is third, second, first

//This is because when first is called, it creates a stack frame then it moves on to second where a second stack frame is created and then it moves on to third where a third stack frame is created
//Once the third stack frame is finished (after it prints 'third' to the console) it moves on to the second stack frame and after its finished (after it prints 'second' to the console) it moves on the first stack frame where it prints 'first' to the console.