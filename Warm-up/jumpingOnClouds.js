function jumpingOnClouds(c) {
    let jumpCount = 0
    var jumpLength
    for (let j = 0; j < c.length; j += jumpLength) {
        jumpLength = 1
        if (c[j + 2] === 0) {
            jumpLength = 2
        }
        jumpCount ++
    }
    return jumpCount - 1
}

console.log(jumpingOnClouds([0, 0, 1, 0]))