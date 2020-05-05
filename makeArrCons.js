// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example

// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.




function makeArrayConsecutive2(statues) {
    sortedArr = statues.sort((a,b)=> b-a); //sorts in ascending order
    let counter = 0;

    for(let i = 0; i<sortedArr.length - 1; i++){
    // console.log(sortedArr)
    //check if the diff between current number and next number is greater than 1, if so that means a number is missing
        if(sortedArr[i] - sortedArr[i+1] > 1){
            counter += (sortedArr[i] - sortedArr[i+1]) - 1 //ex 6-3 = 2
        }
    }
    return counter
}
statues = [6,2,3,8]
console.log(makeArrayConsecutive2(statues))