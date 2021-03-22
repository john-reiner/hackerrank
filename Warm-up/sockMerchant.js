function sockMerchant(n, ar) {
    
    socks = {}
    
    for (let i = 0; i < n; i ++) {
        if (socks[ar[i]]) {
            socks[ar[i]] += 1
        } else {
            socks[ar[i]] = 1
        }
    }
    socksCount = Object.values(socks)
    pairs = 0
    for (let i = 0; i < socksCount.length; i ++) {
        if (socksCount[i] % 2 === 0) {
            pairs += socksCount[i] / 2
        } else {
            pairs += (socksCount[i] - 1) / 2
        }
    }
    return pairs 
}

socksArray = [10, 20, 20, 10, 10, 30, 50, 10, 20]
console.log(sockMerchant(9, socksArray))