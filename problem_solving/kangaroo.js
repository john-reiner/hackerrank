function kangaroo(x1, v1, x2, v2) {
    let k1JumpCount = 0
    let k1Pos = x1
    let k2Pos = x2 
    let running = true
    while (running) {
        k1JumpCount ++
        k2JumpCount ++
        k1Pos += v1
        k2Pos += v2
        if (k1Pos === k2Pos) {
            return "YES"
        }
        if (k1JumpCount >= 10000) {
            running = false
            return "NO"
        }
    }
}