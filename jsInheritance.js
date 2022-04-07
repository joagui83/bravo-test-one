


// JavaScript Inheritance

// Parent Class - 
    // - more generic

// Chilid Class - 
    // - more specific
    // - child class extends from the parent class 
    // - method super() calls on the parent constructor 


// Class review 
class Animal{
    constructor(animalName) {
      this.name = animalName
      this.sleeping = false
      
      
    }
    sleep () {
        this.sleeping = true
    }
  }

  class Dog extends Animal {
      constructor(animalNameInChild) {
          super(animalNameInChild)
          this.playFetch = true
          this.barks = 0 
      }
      bark(number) {
          this.barks = number
      }
  }

  let canelo = new Dog("Canelo")
  canelo.bark(10)
  console.log(canelo)
//   canelo.sleep()
//   console.log("Go to sleep canelo")
//   console.log(canelo)



  class Bird extends Animal {
      constructor(animalNameInChild) {
          super(animalNameInChild)
          this.hasWings = true
          this.flying = false
      }
        fly () {
            this.flying = !this.flying
        }      
  }

  let tweety = new Bird("canary")
  console.log(tweety)
  
//   tweety.sleep()
tweety.fly()
  console.log(tweety)
  // calling new Engine() is just like sending the plans to the production floor to have it built
//   let engine = new Engine()
//   console.log(engine)
//   //--> Engine { oilLevel: 100, rpm: 0 }
  
//   // now that we have an instance of our engine to interact with
  
//   console.log("oil:", engine.oilLevel)
//   //--> "oil:" 100
  
//   console.log("rpm:", engine.rpm)
//   //--> "rpm:" 0