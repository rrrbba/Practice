//BFS





//Binary Search
const binary_search = (arr, target) => {

    if (arr.length == 0) {
        return -1 //means empty array
    }

    let low = 0
    let high = arr.length-1

    while (low <= high) {
        let mid = Math.floor((low + high)/2)

        let guess = arr[mid]

        if (guess === target) {
            return mid
        }

        if (guess > target) {
            high = mid - 1
        } else {
            low = mid + 1 
        }
    }
    return -1
}

my_list = [2,3,5,7,9]
console.log(binary_search(my_list, 9))