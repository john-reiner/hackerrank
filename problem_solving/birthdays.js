function birthday(s, d, m) {
    let output = 0 
    for (let i = 0; i < s.length; i++) {
        let test = s.slice(i, i + m)
        if (test.length === m && test.reduce((a,b) => a + b, 0) === d) output ++
    }
    return output
}
// go through the array 
console.log(birthday([ 1, 2, 1, 3, 2 ], 3, 2))