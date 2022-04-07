// const makeCoffee = () => {
//     return "Coffee is made!"
// }
// console.log(makeCoffee())


// Parameter and Arguments 
//--------------------

// const makeCoffee = (coffeeType) => {
//     return `Enjoy your ${coffeeType}!`
// }
// console.log(makeCoffee("black roast"))
// Pseudo coding

// create function
// input- coffeeType, size
// use conditional statement to make an evaluation on the size
// if size = large it is 5 dollars
// if size = medium it is 4 dollars
// if size = small it is 3 dollars

const makeCoffee = (coffeeType, size) => {
    if (size === "large") {
        return `Your ${size} ${coffeeType} is $5`
    }else if(size === "medium"){
        return `Your ${size} ${coffeeType} is $4`
    }else if(size === "small"){
        return `Your ${size} ${coffeeType} is $3`
    }
}
console.log(makeCoffee("chai", "small"))