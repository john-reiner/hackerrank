function plusMinus(arr) {
    let returnedArray = [0,0,0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            returnedArray[0] ++
        } else if (arr[i] < 0) {
            returnedArray[1] ++
        } else {
            returnedArray[2] ++
        }
    }
    console.log((returnedArray[0] / arr.length).toFixed(6))
    console.log((returnedArray[1] / arr.length).toFixed(6))
    console.log((returnedArray[2] / arr.length).toFixed(6))
}