function getTotalX(a, b) {
    count = 0 
    for (let i = 0; i <= 100 ; i++) {
        if (a.every(number => number % i === 0) && b.every(number => number % i === 0)) {
            count ++
        }
    }
    return count
}

console.log(getTotalX([ 2, 4 ], [ 16, 32, 96 ]))