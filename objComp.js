// Implement your own deep comparison function for objects.
// Let’s limit objects to contain only numbers as properties.
// Hint: use Object.keys() method - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

// As with the problem above, one level deep is OK; however, if you’re feeling adventurous try nested objects.


function compareTwoObjects(obj1, obj2) {

    const keyOne = Object.keys(obj1).sort()
    const keyTwo = Object.keys(obj2).sort()

    const valueOne = Object.values(obj1).sort()
    const valueTwo = Object.values(obj2).sort()

    if(keyOne.length !== keyTwo.length){
        return false;
    } 

    for(let i=0; i<keyOne.length; i++){
        if(keyOne[i] !== keyTwo[i]){
            return false
        }
    }
    
    for(let i=0; i<valueOne.length; i++){
        if(valueOne[i] !== valueTwo[i]){
            return false
        }
    }
    return true
}

// Test cases to verify
// true
const a = {a: 1, b: 2};
const b = {a: 1, b: 2};


// // true
// const a = {b: 2, a: 1};
// const b = {a: 1, b: 2};

// // false
// const a = {a: 100, b: 2};
// const b = {a: 1, b: 2};

// // false
// const a = {a: 1, b: 2, c:3};
// const b = {a: 1, b: 2};

// // false
// const a = {a: 1, b: 2};
// const b = {a: 1, b: 2, c:3};

console.log(compareTwoObjects(a,b))