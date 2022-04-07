// Objects 

// const { functionTypeAnnotation } = require("@babel/types")


// Primitive Data Types
//- strings
//-arrays
//-symbol: a unique identifier
//-number
//-null
// undefined


// {key: "value"}
// {symbol: "data type"}

// let myObject = {key: "value", key2: "another value", key3: true, key4: 4}
// console.log(myObject)
// // [3, 4, 5, 6] select one item via index
// console.log(myObject.key4)
// // select one value using "dot notation" and referencing the key 
// console.log(myObject.key3)

// let breakfast = {
//     item1:   "waffles",
//     item2:    "oatmeal",
//     item3:    "protein",
//     item4:     "eggs",
//     item5:    "pizza",
//     fruit: ["strawberry", "blueberry", "orange"],
//     beverage: {
//         bev1: "coffee",
//         bev2: "English breakfast tea",
//         bev3: "orange juice",
//     }
// }

// console.log(breakfast.item1)
// console.log(breakfast.fruit[1])
// console.log(breakfast.beverage.bev1)
// console.log(breakfast.beverage.bev2)
// console.log(breakfast.beverage.bev3)



//Destructuring assigning a key the pathway thorugh an object
// let {bev1, bev2, bev3} = breakfast.beverage

// console.log(bev1)
// console.log(bev2)
// console.log(bev3)


// Methods - functions that belongs to an object

//.toUpperCase() - belongs to data type string method 

//Objects - data and behavior - information, methods

// let numberObjects = {
//     num1: 5,
//     num2: 10,
//     num3: 15,
//     addUp: function(){
//         return this.num1 + this.num2 + this.num3
//     }
// }

// console.log(numberObjects)
// console.log(numberObjects.num2)
// console.log(numberObjects.addUp())

// this- keyword in javascript that referenced the object inside itself

// let pets = [
//     {name: "Mulan", type: "mix", age: 2}, 
//     {name: "Pantera", type: "mix gs", age: 3},
//     {name: "canelo", type: "doberman", age: 4},
//     {name: "Makia", type: "german sheppard", age: 5}
// ]

// console.log(pets.length)
// console.log(pets[1].name)


// Create a function that returns an array of pet names

// Create a function - petNames
// parameter - array 
// iteration - HOF - .map - the lenth fo the array will be the same
// use dot notation to reference the name key and get the value 

// const petNames = (array) => {
//     return array.map(obj =>{
//         return obj.name
//     })
// }
//

// const mixedArr = [
//     "hello", 5, true, "Makiah", 0, "Jose"]


// const sifter = (array, dataType) => {
//     return array.filter(value => {
//         return typeof value === dataType
//     })
// }
// console.log(sifter(mixedArr,"string"))





// Challenges
// Consider this variable:

// const person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",
//   where: function(){
//       return "Arthur Dent is from Earth"
//   }
//}
// Write the code that accesses the first name of the person object.

//console.log(person.firstName)

// Write the code that accesses the last name of the person object.
//console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
//console.log(person)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
//console.log(person.where())

// Consider this variable:

// const product = {
//   name: "chair",
//   price: 24.99
// }
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// const product = {
//     name: "chair",
//     price: 24.99,
//     describeProduct: function(){
//     return `The product is a ${this.name}. It costs ${this.price}`
// }
// }
// console.log(product.describeProduct())
// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// const product = {
//     name: "chair",
//     price: 24.99,
//     tax: .07,
//     describeProduct: function(){
//     return ((this.price * this.tax) + this.price).toFixed(2)
// }
// }
// console.log(product.describeProduct())


// Consider this variable:

// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }
// Write the code that accesses the ingredients property.

// console.log(lunch.ingredients())

// Write the code that access the third ingredient of the lunch object.

// console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
//
// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }
//
// const makeLunch = () => {
//   return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients}`
// }
// console.log(makeLunch(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"],
//   str : function () {
//     return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients}`
//   }
// }
// console.log(lunch.str())


// Consider this variable:

// const animals = [
//   { name: "Waffles", type: "dog", age: 7 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 }
// ]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
//Create a function

//Expected Output: array with

// const onlyCats = animals.filter(value => value.type === "cat")
// console.log(onlyCats)


// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.

// const petNames = (array) => {
//   return array.map(obj => {
//     return obj.name
//   })
// }
// console.log(petNames(animals))

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

// const petAge = animals.filter(value => value.age > 10)
// console.log(petAge)

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.

// const animals = [
//   { name: "Waffles", type: "dog", age: 7 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 }
// ]
// const animalFacts = animals.map (animal => {
//   return `The ${animal.type} named ${animal.name} and is ${animal.age} years old`
// })
// console.log(animalFacts)


// Consider this variable:

// const author = {
//   name: "H. G. Wells",
//   genre: "science fiction"
// }
// Write the code that destructures the author object so that the following code snippet will run successfully:
// const {name, genre} = author




//  console.log(`${author.name} is a ${author.genre} author`)
// // Output: "H. G. Wells is a science fiction author"




// Consider this variable:

// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }

// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

// const {species, pokemon_type} = pokeOne
// const describePokemon = () => {
//     return `${species} is ${pokemon_type} pokemon`
// }

// console.log(describePokemon(pokeOne))
// Output: "Charmandar is a Fire pokemon"

// const {species, pokemon_type} = pokeTwo
// const describePokemon = () => {
//     return `${species} is ${pokemon_type} pokemon`
// }

// console.log(describePokemon(pokeTwo))

// console.log(describePokemon(pokeTwo))
// // Output: "Magikarp is a Water pokemon"
// Consider this variable:



// const triangleDimensions = {
//   base: 2,
//   height: 5,
//   area: function () {
//       return (this.base * this.height) * .5
//   }
// }
// console.log(triangleDimensions.area())
// Modify the triangleDimensions object to have a method that returns the area of the triangle.

// Write the code that will update the base to be the value of 6.


// const newDimension = triangleDimensions.map (obj => {
//     if (obj.base === 2) {
//         return {...obj, base: 6}
//     }
//     return obj;
// })
// console.log(newDimension)



// Consider this variable:

let learn = {
    cohorts: {
      cohort1: ["Alpha", "Zulu", "Charlie", "Delta", "Echo"],
      cohort2: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"],
      newArr: function() {
          return [`cohort1 ${this.cohort1} cohort2 ${this.cohort2}`]
      }
    }
  }

  console.log(learn.cohorts.newArr())

  // Write the code that logs the name of your cohort.
  
  
  // Write the code that uses destructuring to log the name of your cohort.
  // let { cohort1, cohort2 } = learn.cohorts
  // console.log(cohort2[1])
  // Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
  
  // Output: ["cohort1 Alpha", "cohort1 Bravo", "cohort1 Charlie", "cohort1 Delta", "cohort1 Echo", "cohort2 Alpha", "cohort2 Bravo", "cohort2 Charlie", "cohort2 Delta", "cohort2 Echo", "cohort2 Foxtrot"]
  
 
  
//   const propertyNames = Object.values(learn);
  
//   console.log(propertyNames);
  
  // const animalFacts = animals.map (animal => {
  //   return `The ${animal.type} named ${animal.name} and is ${animal.age} years old`
  // })
  // console.log(animalFacts)