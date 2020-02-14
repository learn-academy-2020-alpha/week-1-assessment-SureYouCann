// ASSESSMENT 1: INTRO TO JAVASCRIPT TESTING WITH JEST
// Coding practical questions

// To set up the testing environment run the following commands in terminal
// $ npm -g install yarn
// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum
// creating a function called addThemUp and add two numbers
 describe("addThemUp", () => {
    test("a function called addThemUp that will take two numbers as an argument and then returns the sum", () => {
     expect(addThemUp(4,6)).toEqual(10)
    })
 })





// // // // --------------------1b) See the test fail. THEN write the code to make the test pass.
// // test has falied and now try to make it pass
const addThemUp = (num1, num2) => {
    return num1 + num2
}


// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.
//  describe("triangleArea", () => {
//      test("taking the base and the height of a triange and returns the area", () => {
//          expect(triangleArea(2,4)).toEqual(2)
//      })
//  })
 




// --------------------2b) See the test fail. THEN write the code to make the test pass.
//  triangleArea = (b, h) => {
//      return b*h/2
//  }