// Write a function that returns the factorial of a number. A factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
// Example factorial of 4 is 4*3*2*1 = 24
// Please use a recursive function to solve this.

function factorial(num) {
    //base case
    if(num === 1) {
        return 1 
    } 

    //recursive call
    return num * factorial(num - 1)
} 

console.log(factorial(1))

//using proper tail calls
function factorialPTC(num, result) {
  if(num === 1) return result

  return factorialPTC(num-1, result * num)

}

console.log(factorialPTC(4,1))

// Write a function called ‘contains' that searches for a value in a nested object. It returns true if the object contains that value.
// You could use Object.keys and iterate with Array#some.

function contains(object, value) {
    //iterate through keys
    for (let key in object) {

        let nestedValues = object[key];
        
        //if it's an object, recursively call function
        if (typeof nestedValues === 'object') {
            return contains(nestedValues, value);
         }
         //if the nested values contain the value I'm looking for return true
        if (typeof nestedValues === 'string' && nestedValues.indexOf(value) > -1) {
            return true
        }
         
    } 
    //if not found return false
    return false

}

var spaceXLaunch = { 
    launch: { 
      rocket: { 
        stage: { 
          core: {
            coreSerial: 'B1056',
            payload: 'CRS-17',
          },
        },
      },
    }
}

console.log(contains(spaceXLaunch, 'B1056')); //true
console.log(contains(spaceXLaunch, 'CRS-17')); //true
console.log(contains(spaceXLaunch, 'abc')); //false

//OR


function contains(obj, value) {

  const vals = Object.values(obj)
  //iterate through keys
  for (let i=0; i<vals.length; i++) {
    if(vals[i] === value) return true;

    if(typeof vals[i] === 'object'){

      let result = contains(vals[i], value)
      if (result) return true
    }
       
  } 
  
  return false

}
