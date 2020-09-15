// Given a string like '3+1+2*5*3+1*10' that can only contain numbers and signs + and *, find the answer to the equation without using eval function.
// Make sure to handle error cases like '3+2*' or 3+*2


// Test cases:

// '1+21' -> 22

// '3*12' -> 36

// '3+1+2*5*3+1*10' -> 44

// '1+21*5*2+7' -> 218

// '3**12' -> invalid input

// '3*12+' -> invalid input

// const eq = '3+1+2*5*3+1*10'

// const parts = eq.split('+').map(el => el.split('*')) 
//if nested array is because I split on multiplication sign, if single elements add them

function noEval(equationStr){
    let result = 0;
    const parts = equationStr.split('+').map(el => el.split('*')) 

    for(let i=0; i< parts.length; i++){
        if(parts[i] === '') return 'invalid string'

        let product = 1;
        for(let j=0; j<parts[i].length; j++){
            if(parts[i][j] === '') return 'invalid string'

            product = product * parts[i][j]
        }
        result = result + product
    }
    return result
}
console.log(noEval('3+2+4'))