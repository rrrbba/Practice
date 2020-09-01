//Given an array of n+1 numbers between 1 and n, find the duplicate. There will only be one duplicate

//For example, with an array of 5 numbers, it implies that each number will have a value between 1 and 4 (included). This means there will automatically be at least one duplicate


//Example
//Input: [1,2,2,3,4]
//Output: 2


//Time complexity => O(n^2)
//Space complexity => O(1) because the space stays the same as we add input, not adding any new space as we're outputting (not creating another array)

function findDupe(input){ //lines 12-16 => O(3n) * line 11 => O(n) ==> O(3n^2) ==> O(n^2)
    for (let i=0; i<input.length; i++){//O(n)
        for(let j=0; j<input.length; j++){//O(n)
            if(i != j && input[i] === input[j]){ //O(1)
                //i != j to ensure not comparing the same indices
                console.log('Found it', input[i]); //O(1)
                return; //O(1)
            }
        }
    }
}

findDupe([2,2,4,6,1])


//Time complexity => O(n)
//Space complexity => O(n) If the dupe is all the way at the end, the number of properties is going to match the size of the array or be really close to it
function findDupe2(input){
    const numbers = {};

    for (let i=0; i<input.length; i++){ //O(n)
        if(numbers[input[i]] === 'exists') {//O(1)
            console.log("Found it:", input[i])//O(1)
            return;//O(1)
        } else { //O(1)
            numbers[input[i]] = 'exists' //O(1)
            //this says whatever input[i] is, make it the key and the value set to exists

        }
        
    }
}

findDupe2([4,3,2,4,6,1])


//Complexity
//Either time complexity = how fast is the algorithm (Big O, how many operations is it going to take in relationt to input)
//Or space complexity = how much memory is this going to require
//Always in relation to the size of the input, more particulary the rate of input growth

//O(n), for loop, every element in array you're performing one operation [linear] as the input grows the number of operations grow at a similar rate
//O(n) includes: traversing an array, linear/naive search, comparing two strings/arrays
//O(n^2), double for loop [quadratic]
//O(n^2) includes: some sorting algorithms, traversing a 2D(nested) array
//O(logn), splitting the input in half and continue doing that until you find the desired output [logarithmic]
//O(log n) includes: searching in a sorted array
//O(1) [constant] includes: accessing array index, push and pop on a stack, insert and remove from a queue

function myFunc(){ //since the for loops are side by side instead of nested, the complexity is O(2n) =>O(n)
    let i = x+2; //this is constant => O(1)
    for(){ //O(n)
        
    }
    for(){//O(n)
            
    }
}
function myFunc(){ //since the for loops are nested, the complexity is O(n^2) =>O(n); if there was a third for loop nested inside of it it would be O(n^3)
    let i = x+2; //this is constant => O(1)
    for(){
        for(){
            
        }  
    }
    
}