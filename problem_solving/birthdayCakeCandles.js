function birthdayCakeCandles(candles) {
    let maxValue = Math.max(...candles)
    let count = 0
    for (let i = 0; i < candles.length; i++) {
        candles[i] === maxValue && count ++
    }
    return count 
}