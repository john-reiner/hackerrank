function gradingStudents(grades) {
    let returnedArray = []
    for (let i = 0; i < grades.length; i++) {
        let nextFive = Math.ceil(grades[i] / 5) * 5
        if (grades[i] < 38) {
            returnedArray.push(grades[i])
        }   else if (nextFive - grades[i] < 3) {
            returnedArray.push(nextFive)
        }   else  {
            returnedArray.push(grades[i])
        } 
    }
    return returnedArray
}

console.log(gradingStudents([ 73, 67, 38, 33 ]))