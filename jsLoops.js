// Tying together loops and arrays to make dynamic and complex functions 


// Ex: Create a function that multiplies each number in an array of numbers by 5

let numArray = [2, 3, 4, 5, 6]
//Expected outpu [10, 15, 20, 25, 30]


// Iteration is the process of performing an action repedeatly until a condition is met

const mult5 = (array) => {

let newArray = []

for (let i = 0; i < array.length; i++) {

       newArray.push(array[i] * 5)
}
    return newArray
}
console.log(mult5(numArray))



//----------------------------------------//

// Create a function that takes a set of data and adds each item to a sentence

let coffees = ["black", "Latte", "mocha", "cold brew",]
// expected output: "I would like a latte", etc. 
let size = ["small", "medium", "large"]
let teas = ["chai", "matcha", "earl gray", "green"]
// expected output: "I would like a chai", etc.
// input an array of strings 
// output: array of strings that are with each sentence that include the index values

// Create a function that takes in an array
// set up an empty array to store new strings 
// .push() new string into new array 
// fucntion should access each item in the array
// modify string of each item
// return a new array 

const coffeeOrder = (array) => {
    let orders = []
        for (let index = 0; index < array.length; index++) {
            orders.push(`I would like a ${array[index]}`)
    
        }
        return orders
}
console.log(coffeeOrder(coffees))
console.log(coffeeOrder(teas))