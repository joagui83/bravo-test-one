// Testing considers 3 things 
// Input
// The resutls of the value you received form your functions
// Expected ouput 

// const { it, expect } = require("@jest/globals");
// const { describe } = require("yargs");

//---------------------------JEST-----------------------

// Red-green refactor process 
//1. Wrtie test first
// A DESCIBE METHOD that lists name of the function 
describe("soup", () => {
    it("returns a sting that says Alohoa Bravo, here's some soup!", () =>{
        expect(soup()).toEqual("Alohoa Bravo, here's some soup!")
 })
 })

///2 RUn your testing suit to see a failing test
// $ yarn yest

//3. Write the code

const soup = () => {
    return "Alohoa Bravo, here's some soup!"
}




//4. Rung your testingsuit to see your


// Write a test for a function that logs "eat food" if you are hungry and "keep working" if you are not hungry

describe("areYouHungry", () => {
    it("returns eat food or keep working based on input", () => {
      expect(areYouHungry("yes")).toEqual("eat food")
      expect(areYouHungry("no")).toEqual("keep working")
    })
  })

  const areYouHungry = (string) => {
    if(string === "yes"){
    return "eat food"
    } else if(string === "no") {
      return "keep working"
    }
  }