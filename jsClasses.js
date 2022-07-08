
// ****************** JavaScript Classes **********************

// PascalsCase- first word is capitalized

// constructo-Js method specifically for defining variables that belong to a class

// new- JS keyword that instantiates a class (an object), like invoking a function 
// Class:
// - classes are always capitlized
//  -is used as a template for declaring and creating an object.
//  - only needs to ne declared once, creating the object. They are dynamic 
// - instance of a class is a new object 
// Objects:
// - is an instance of a class.
// - can be created as many times as per required

// Function:
// - is a block of code written to perform a specific set of tasks 

// Method: 
// - are functions stored as object properties 
// - is a property of an object that contains a function definition.
// - consist of a code that can be called by the name of its object and its method name using dot notation or square bracker notation 

//******************* Class Anatomy ******************


// class DoingMath {
//     constructor () {
//         this.num1 = 5,
//         this.num2 = 10,
//         this.num3 = 15
//     }
//     addUp(){
//         return this.num1 + this.num2 + this.num3
//     }
// }
// console.log(new DoingMath)

// //--------------------------------------------------------

// class DoingMath {
//     constructor () {
//         this.num1 = 5,
//         this.num2 = 10,
//         this.num3 = 15
//     }
//     addUp(){
//         return this.num1 + this.num2 + this.num3
//     }
// }


// const math = new DoingMath
// const math2 = new DoingMath


// console.log(math.addUp())
// //--> output: 30

//------------------------------------------------------------------

// class DoingMath {
//     constructor (num1, num2, num3) {
//         this.num1 = num1,
//         this.num2 = num2,
//         this.num3 = num3
//     }
//     addUp(){
//         return this.num1 + this.num2 + this.num3
//     }
// }

// const math1 = new DoingMath(5, 10, 15)
// console.log(math1)
// console.log(math1.addUp())
// const math2 = new DoingMath(3, 7, 2)
// console.log(math2)
// console.log(math2.addUp())
//---------------------------------------------------------

// class DoingMath {
//     constructor (num2, num3) {
//         this.num1 = 5,
//         this.num2 = num2,
//         this.num3 = num3
//     }
//     addUp(){
//         return this.num1 + this.num2 + this.num3
//     }
//     largerNum (){
//         return Math.max(this.num1, this.num2, this.num3)
//     }
// }

// const math1 = new DoingMath(10, 15)
// console.log(math1.largerNum())
// console.log(math1.addUp())

// const math2 = new DoingMath(3, 2)
// console.log(math2.largerNum())
// console.log(math2.addUp())

//-------------------------------------------------------------
// class User {
//     constructor (firstName, lastName, credit) {
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.credit = credit
//     }
//     getFullName () {
//         let FullName = `${this.firstName} ${this.lastName} has ${this.credit} credits.`
//         return FullName 
//     }
// }


// const jose = new User("Jose", "Aguilar", 44)
// console.log(jose)
// console.log(jose.getFullName())
const words = ["Apple", "Banana", "Plum", "Orange", "Kiwi"];
const words2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
 const letterA = "a"
 const letterE ="e"
// const letterE = "e"
  
const find = (arr, letter) =>{
    const solution = []
    arr.forEach((word) => {
      if(word.includes(letter.toLowerCase())){
        solution.push(word)
      }
      if(word.includes(letter.toUpperCase())){
        solution.push(word)
      }
    })
    return solution
  }

// const match = find(words,letterA)

console.log(find(words,letterA))