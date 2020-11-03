function migratoryBirds(arr) {
    let types = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
    for (let i = 0; i < arr.length; i++) types[arr[i]] ++
    let typesArray = Object.values(types) 
    let maxValue = Math.max(...typesArray)
    return typesArray.indexOf(maxValue) + 1
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))