


function fibonacci(n) {
    //base case
    if (n === 0) {
        return []
    } else if (n === 1) {
        return [0]
    } else if (n === 2) {
        return [0, 1]
    } else {
        let ar = fibonacci(n - 1);
        return ar.concat(ar[n - 2] + ar[n - 3])

    }
}