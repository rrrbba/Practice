function diagonalDifference(arr) {  
    let primDiag = 0
    let secDiag = 0
    let n = arr.length

    for (var i = 0, j = n - 1; i < n; i++, j--) {
            primDiag += arr[i][i]
            secDiag += arr[i][j]  
    }
    return Math.abs(primDiag - secDiag)
}