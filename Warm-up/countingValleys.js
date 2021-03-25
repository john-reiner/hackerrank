function countingValleys(steps, path) {

    const pathArray = path.split('')
    let elevation = 0 
    let valleyCount = 0 
    for (let i = 0; i < steps; i ++) {
        if (pathArray[i] === 'U') {
            elevation ++
        } else {
            if (elevation === 0) {
                valleyCount ++
            }
            elevation --
        }
    }
    return valleyCount

}


// calculate when a hiker enters a valley and then leaves a valley

console.log(countingValleys(12,"DDUUDDUDUUUD"))