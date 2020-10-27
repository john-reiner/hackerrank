// Function Description

// Complete the function compareTriplets in the editor below.

// compareTriplets has the following parameter(s):

// int a[3]: Alice's challenge rating
// int b[3]: Bob's challenge rating
// Return

// int[2]: Alice's score is in the first position, and Bob's score is in the second.
// Input Format

// The first line contains 3 space-separated integers, a[0], a[1], and a[2], the respective values in triplet a.
// The second line contains 3 space-separated integers, b[0], b[1], and b[2], the respective values in triplet b.

function compareTriplets(a, b) {
    let returnArray = [0,0]
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            returnArray[0] ++
        } 
        if (a[i] < b[i]) {
            returnArray[1] ++
        } 
        
    }
    return returnArray
}

console.log(compareTriplets([1,2,3] , [99,99,99]))
console.log(compareTriplets([100,2,3] , [99,99,99]))