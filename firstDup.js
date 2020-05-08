// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

function firstDuplicate(a) {
    //initialize an obj
    const hash = {}

    //go through every element in the array a
    for (const number of a) {
        //if the element is already in the hash, we found found our first duplicate
        if(hash[number]) {
           //return it
            return number
        //else element wasn't in the hash
        } else {
            //we save it by marking that it appears 1 one time
            hash[number] = 1
        }
    }
    //if no duplicate found we return -1
    return -1
}

a = [2, 1, 3, 5, 3, 2]
console.log(firstDuplicate(a))

// For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.
// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.