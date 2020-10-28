function staircase(n) {
    let hashCount = 1
    for (let i = n; i > 0; i--) {
        let spaceCount = i -1
        if (spaceCount >= 0) {
            var spaceRow = 'X'.repeat(spaceCount) 
            var hashRow = '#'.repeat(hashCount)
            var row = spaceRow.concat(hashRow)
            hashCount ++
        }
        console.log(row)
    }
}

console.log(staircase(100))