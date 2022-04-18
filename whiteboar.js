// white board

// fucntion of a string to check if its a palladrim 
//input = racecar
//ouput = true
// hello = false
//ouput = false
// compare inputs
// if they are the same return true
// if they are diff return false 
// string.split
// feel free to ask questions

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// b) Create the function that makes the test pass.

// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
// program to merge and remove duplicate value from an array

function getUniqueAfterMerge(...arr){

    // merge two arrays
    let newArr = [...testArray1, ...testArray2];

    // removing duplicate
    let uniqueArr = [...new Set(newArr)];

    console.log(uniqueArr);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5]

// calling the function
getUniqueAfterMerge(testArray1, testArray2);

