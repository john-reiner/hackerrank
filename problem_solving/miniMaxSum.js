function miniMaxSum(arr) {
    let minValue = arr.reduce((a,b) => a + b, 0) - Math.max(...arr)
    let maxValue = arr.reduce((a,b) => a + b, 0) - Math.min(...arr)
    console.log(minValue, maxValue)
}