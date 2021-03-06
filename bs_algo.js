
//Binary Search
const binary_search = (arr, target) => {

    //if array is empty
    if (arr.length == 0) {
        return -1 
    }

    //initialize variables
    let low = 0
    let high = arr.length-1

    //while haven't narrowed down to one element
    while (low <= high) {
        //initialize middle
        let mid = Math.floor((low + high)/2) //or (low + high) // 2
        //set variable guess
        let guess = arr[mid]

        //if guess equals the target
        if (guess === target) {
            //return mid
            return mid
        }
        //if guess is too large
        if (guess > target) {
            //move down
            high = mid - 1
        } else { //if guess is too small
            //move up
            low = mid + 1 
        }
    }
    //if element not in array
    return -1
}

my_list = [2,3,5,7,9]
console.log(binary_search(my_list, 9))

//Recursive version of binary search
const bs_recursive = (arr, target, low, high) => {

    let mid = Math.floor((low + high)/2)
    let guess = arr[mid]

    if (arr.length == 0) {
        return -1
    }
    if (low > high) {
        return -1
    }

    if (guess === target) {
        return mid
    }

    if (guess > target) {
        return bs_recursive(arr, target, low, mid-1)
    } else {
        return bs_recursive(arr, target, mid+1, high)
    }

} 
console.log(bs_recursive(my_list, 9, 2,9))