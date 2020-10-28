function timeConversion(s) {
    var pastTwelve = false
    if (s.includes('PM')) pastTwelve = !pastTwelve
    if (pastTwelve) {
        var openingHour = +(s[0].concat(s[1]))
        var newHour = openingHour + 12
        var newString = []
        for (let i = 2; i < s.length - 2; i++) {
            newString.push(s[i])
        }
        let arrToString = newString.join('')
        let newHourToString = newHour.toString()
        return newHourToString.concat(arrToString)
    } else {
        var newString = []
        for (let i = 0; i < s.length - 2; i++) {
            newString.push(s[i])
        }
        return newString.join('')
    }
}

console.log(timeConversion('11:05:45AM'))