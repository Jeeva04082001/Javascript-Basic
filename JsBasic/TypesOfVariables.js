// JavaScript Core Concepts – Detailed Explanation


// 1️⃣ Variables
// Variables are containers to store data.

// let temp = 30;
// const name = "JS";

// Used to store:

// numbers
// strings
// objects
// functions


// 2️⃣ Types of Variables

// var

//     Function scoped
//     Hoisted with undefined
//     Can redeclare & reassign
//     ❌ Not recommended

// let

//     Block scoped
//     Hoisted (TDZ)
//     Cannot redeclare
//     Can reassign

// const

    // Block scoped
    // Must initialize
    // Cannot reassign
    // Objects/arrays can be mutated

// 👉 Best practice:

// Use const by default
// Use let if value changes
// Avoid var

// 3️⃣ Data Types
// Primitive
// Stored by value:-

//     string
//     number
//     boolean
//     null
//     undefined
//     symbol
//     bigint

// Non-Primitive
// Stored by reference

    // object
    // array
    // function

// ======================================================================================================


// Types of Variables in JavaScript

// JavaScript provides three ways to declare variables:

// var
// let
// const

// 1. var
// Definition
// var is the old way of declaring variables in JavaScript (before ES6).

// Scope
// var is function-scoped, NOT block-scoped.

// What is Scope?
// Scope means:
// 👉 Where a variable can be accessed (used) in the code.

// “Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during the compilation phase.”
// Explanation:- variable and functions declarations are moved to the top of their scope during compilation

// function test(){
//     // console.log(x); //var is hoisted and initialized as undefined.
    
//     if (true){
//        var x=10
//        var x=20  //Allowed Redeclaration ❌ (dangerous)
//        x=30      //Allowed Reassignment
//     }
//     console.log(x)
// }
// test()

// ❌ Block ({}) does NOT matter for var.

// Problems with var ;-

// No block scope
// Can be redeclared accidentally
// Causes bugs in loops & async code

// for(var x=0; x<3; x++){
//     setTimeout(()=>{
//         console.log(x); 
//     },10000)
// }

// Output:
// 3
// 3
// 3

// Reason 👉 same memory location shared

// ================================================================================================

// 2. let
// Definition

// let is a modern variable (ES6) used when value can change.

// Scope
// let is block-scoped.


// if(true){
//     let x=10;
// }
// console.log(x); // ❌ ReferenceError

// let is hoisted BUT not initialized
// This creates a Temporal Dead Zone (TDZ).

// 🔹 Temporal Dead Zone (TDZ)
// TDZ = The time between
// 👉 entering scope
// 👉 and variable declaration

// console.log(y);
// var y=10;

// TDZ 👉 Time between hoisting and initialization.

// Redeclaration Not allowed ❌

// let x=10;
// let x=20; //SyntaxError: Identifier 'x' has already been declared

// console.log(x);


// Reassignment Allowed ✅

// let x= 10;
// x=20;

// console.log(x);


// Loop Behavior (Fixes var issue)

// for(let x=0; x<3; x++){
//     setTimeout(()=>{
//         console.log(x);
        
//     },1000)
// }

// Output:
// 0
// 1
// 2

// Reason 👉 new memory per iteration


// ================================================================================================


// 3. const
// Definition

// const is used when value should not change.

// Scope
// Same as let → block-scoped

// Hoisting
// Hoisted but in Temporal Dead Zone

// console.log(x); //ReferenceError: Cannot access 'x' before initialization
// const x=10;

// Initialization:-  Must be initialized ❗
// const x; // ❌ Error

// Redeclaration Not allowed ❌
// Reassignment Not allowed ❌

// const x=20;
// x=30;
// console.log(x);  //TypeError: Assignment to constant variable.


// Important Interview Point ⚠️
// const does NOT mean immutable objects.


// const obj={name:"jeee"};
// console.log(obj);

// obj.name = "reee";
// console.log(obj);

// obj={}
// console.log(obj); //TypeError: Assignment to constant variable.



// Comparison Table (Interview Gold 🏆)



// | Feature         | var             | let       | const     |
// | --------------- | --------------- | --------- | --------- |
// | Scope           | Function        | Block     | Block     |
// | Hoisting        | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
// | Redeclare       | ✅               | ❌         | ❌         |
// | Reassign        | ✅               | ✅         | ❌         |
// | Must initialize | ❌               | ❌         | ✅         |
// | Safe to use     | ❌               | ✅         | ✅         |


// Best Practices (What Interviewers Expect)

// ✅ Use const by default
// ✅ Use let if value changes
// ❌ Avoid var


// One-Line Interview Answers:-

// var → function scoped, hoisted with undefined
// let → block scoped, TDZ, reassignable
// const → block scoped, cannot reassign

//  One-Line Interview Answer

// 👉 Function scope: Variable accessible only inside the function
// 👉 Block scope: Variable accessible only inside {} block

