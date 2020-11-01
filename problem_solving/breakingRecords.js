function breakingRecords(scores) {
    let highLow = [0,0]
    let high = scores[0]
    let low = scores[0]
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > high) {
            high = scores[i]
            highLow[0] ++
        } else if (scores[i] < low) {
            low = scores[i]
            highLow[1] ++
        }
    }
    return highLow
}
