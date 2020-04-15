// Complete the plusMinus function in the editor below. It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.

// plusMinus has the following parameter(s):

// arr: an array of integers


function plusMinus(arr) {
    //get the total numbers in the array
    let totalnum = arr.length
    //make a counter for pos, neg, and zero #s
    let posn = 0
    let negn = 0
    let zeron = 0

    //go through the array and increment the respective counter depending on the type of number it is
    arr.forEach(num => {
        if(num >0) {
            posn++
        } else if (num < 0) {
            negn++
        } else{
            zeron++
        }
    })

    //divide each total by the length of the array and have so it returns it by 6 decimal places and print them
    console.log ( (posn/totalnum).toFixed(6) )
    console.log ( (negn/totalnum).toFixed(6) )
    console.log ( (zeron/totalnum).toFixed(6) )
}