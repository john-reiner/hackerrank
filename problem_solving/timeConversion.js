function timeConversion(s) {
    var pastTwelve = false
    if (s.includes('PM')) pastTwelve = !pastTwelve
    let hour = +s.slice(0,2)
    if (hour === 12) hour = 0
    if (pastTwelve) hour += 12
    let minSec = s.slice(2,8)
    let hourString = hour.toString()
    if (!pastTwelve && hour < 10) {
        return '0' + hourString.concat(minSec)
    } else {
        return hourString.concat(minSec)
    }
}

console.log(timeConversion('01:05:45AM'))