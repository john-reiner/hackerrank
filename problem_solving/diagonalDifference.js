function diagonalDifference(arr) {
    var primary = 0
    var secondary = 0
    for (let i = 0; i < arr.length; i++) {
        primary += arr[i][i]
        secondary += arr[i][arr.length - 1 - i];
    }
    return Math.abs(primary - secondary)
}

console.log(diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]))