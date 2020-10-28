function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0
    let orangeCount = 0
    for (let i = 0; i < apples.length; i++) {
        let appleTravel = apples[i] + a 
        if (appleTravel >= s && appleTravel <= t) appleCount ++
    }
    for (let i = 0; i < oranges.length; i++) {
        let orangeTravel = oranges[i] + b
        if (orangeTravel <= t && orangeTravel >= s) orangeCount ++
    }
    console.log(appleCount)
    console.log(orangeCount)
}

console.log(countApplesAndOranges(7, 11, 5, 15, [ -2, 2, 1 ], [ 5, -6 ]))
console.log(countApplesAndOranges(7, 10, 4, 12, [ 2,3,-4 ], [ 3,-2,-4]))