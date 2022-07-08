// Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// const people = [
//     { name: "ford prefect", occupation: "a hitchhiker" },
//     { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//     { name: "arthur dent", occupation: "a radio employee" }
//   ]  
  
//   const uppercaseWords = (arrOfPeople) => {
     //3 objects, enter each object
     //2 properties, access [0].name, now have string
     //capitalize and concatenation with first letter and rest of letter
     //concatenation with name property, (after manip) and occ. property
    //now completed string, push into arr
    //return arr outside of the for loop
    //for loop completes the work and pushes results into the array
//     const arr = []
//     for(let i = 0; i < arrOfPeople.length; i++){
       //for each object, extract the name and occupation
//     let name = arrOfPeople[i].name
//     let occupation = arrOfPeople[i].occupation
      //split name into two words
//     name = name.split(' ')
//     let firstName = name[0]
//     let toCapital = firstName[0].toUpperCase()
//     firstName = toCapital + firstName.substring(1)
//     let lastName = name[1]
//     toCapital = lastName[0].toUpperCase()
//     lastName = toCapital + lastName.substring(1)
      //string = ${ add all words together}
      //new arr []
       //arr.push(string)
//     let str = `${firstName} ${lastName} is ${occupation}.`
//     arr.push(str)
    
      // console.log(firstName, lastName, "is"+ " " + occupation) 
//     }
     // console.log(arr)
//     return arr
// }  

 //   uppercaseWords(people)
   // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// console.log(uppercaseWords(people))
//Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]

// const ifNum = (arr) => {
//   let numFil = arr.filter(element => typeof element === 'number').map(
//     number => number % 3
//   )
//     return numFil
// }

// console.log(ifNum(hodgepodge1))
// console.log(ifNum(hodgepodge2))
//Create a function that takes in an array of numbers and returns the sum of all the numbers cubed
const cubeAndSum1 = [2, 3, 4]
const cubeAndSum2 = [0, 5, 10]
// const ans = (arr) => {
//     let initialValue = 0
//     return arr.reduce((prev, curr) => {
//     return prev + (curr*curr*curr)
//     }, initialValue)
// }
// console.log(ans(cubeAndSum1))
// const ans = (arr) => {
//   let initialValue = 0
//   return arr.reduce((prev, curr) => {
//     if(initialValue ==  0){
//       prev * prev * prev
    //}
    // console.log(prev, curr)
//     return prev + (curr*curr*curr)
//   }, initialValue)
    /*
    for ( let i = 0; i <= element.length;i++) {
    let cube = element[i] = element[i];
        return cube
    }*/

//}
