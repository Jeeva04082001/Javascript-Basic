// 1️⃣2️⃣ Callback Hell

// 1️⃣ What is a Callback?

// A callback is a function passed as an argument to another function and executed later.

// function greet(name,callback){
//     console.log("Hello" + name);
//     callback();  
// }
// function sayBye(){
//     console.log("Bye!");
// }
// greet("Jeeva", sayBye);


// 2️⃣ What is Callback Hell?

// When many asynchronous operations depend on each other, 
// developers sometimes nest callbacks inside callbacks.


// getUser(function(user){
//     getOrder(user.id, function(orders){
//         getOrderDetails(orders[0], function(details){
//             processPayment(details, function(payment){
//                 console.log("Payment Done");
//             });
//         });
//     });
// });


// 3️⃣ Why Callback Hell is Bad

    // Code becomes hard to read
    // Debugging becomes difficult
    // Error handling becomes messy
    // Code maintenance becomes difficult

// 4️⃣ How Modern JavaScript Solves This
// Instead of callback hell, we use:

// 1️⃣ Promises

// getUser()
// .then(user => getOrder(user.id))
// .then(orders => getOrderDetails(orders[0]))
// .then(details => processPayment(details))
// .then(()=> console.log("Payment Done")
// )


// 2️⃣ Async / Await (cleanest)


// async function process(){
//     const user = await getUser();
//     const order = await getOrder(user.id);
//     const details = await getOrderDetails(order[0]);
//     await processPayment(details);
//     console.log("Payment Done!");
    
// }

// Simple Interview Answer (Very Important)
// If interviewer asks Callback Hell, say:

//     Callback hell is a situation where multiple asynchronous callbacks
//     are nested inside each other, making the code difficult to read, 
//     maintain, and debug. It is commonly solved using Promises or Async/Await.



// Nested callbacks → unreadable code

// 🔥 Callback Hell in JavaScript (Detailed Explanation)
// 🔹 What is Callback Hell?
// Callback Hell happens when:

//     Multiple asynchronous operations
//     Nested inside each other
//     Creating deeply nested code
//     Hard to read, maintain, and debug

// It looks like a pyramid structure (also called "Pyramid of Doom").

// 🔥 Basic Callback Example

// function step1(callback){
//     setTimeout(()=>{
//         console.log("step 1 completed");
//         callback();
//     },1000)
// }

// function step2(callback){
//     setTimeout(()=>{
//         console.log("step 2 completed");
//         callback()
//     },1000);
// }

// function step3(callback){
//     setTimeout(()=>{
//         console.log("step 3 completed");
//         callback()
//     },1000);
// }

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("All steps done");
//         });
//     });
// });

// 🔥 Output
// Step 1 completed
// Step 2 completed
// Step 3 completed
// All steps done

//---------------------------------------------------------------------------

// 🔺 Pyramid of Doom Example

// loginUser(username, password, function(user) {
//    getUserPosts(user.id, function(posts) {
//       getPostComments(posts[0].id, function(comments) {
//          sendNotification(comments, function() {
//             console.log("Done");
//          });
//       });
//    });
// });

// This is Callback Hell.


// 🔥 Real World Scenario

// Imagine:

//     Login user
//     Get user data
//     Get posts
//     Get comments
//     Send email

// Each depends on previous result → leads to nesting.

//---------------------------------------------------------------------------

// 🔥 How to Solve Callback Hell
// ✅ 1️⃣ Using Promises

// Convert callbacks into promises.



// function step1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Step 1");
//             resolve();
//         },1000);
//     });
// }

// function step2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Step 2");
//             resolve();
//         },1000);
//     });
// }

// function step3(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Step 3");
//             resolve();
//         },1000);
//     });
// }

// step1()
// .then(step2)
// .then(step3)
// .then(()=> console.log("All Done"))

// Cleaner. No nesting.

// Output:-
// Step 1
// Step 2
// Step 3
// All Done



// ====================================================

// ✅ 2️⃣ Using async / await (Best Way)

// function step1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Step 1");
//             resolve();
//         },1000);
//     });
// }

// function step2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Step 2");
//             resolve();
//         },1000);
//     });
// }

// function step3(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Step 3");
//             resolve();
//         },1000);
//     });
// }


// async function executeSteps(){
//     await step1();
//     await step2();
//     await step3();
//     console.log("All Done");
    
// }
// executeSteps();

// Looks like synchronous code
// But it’s asynchronous internally.


//---------------------------------------------------------------------------

// 🔥 Comparison

// | Method      | Structure | Readability |
// | ----------- | --------- | ----------- |
// | Callback    | Nested    | ❌ Poor      |
// | Promise     | Chained   | ✅ Better    |
// | async/await | Linear    | ✅✅ Best     |


// 🔥 Interview One-Line Answer

// “Callback Hell is a situation where multiple nested callbacks make the 
// code hard to read and maintain, forming a pyramid-like structure.”


// 🔥 Why Promises Were Introduced?

// To:

//     Avoid nested callbacks
//     Improve readability
//     Better error handling
//     Chain asynchronous tasks


// 🔥 Important Interview Follow-Up
// ❓ What is Inversion of Control in Callbacks?

// When we pass a function to another function and lose control over when/how it executes.

// Promises solve this issue.

// ====================================================================================================


// 1️⃣ Microtask Queue vs Callback Queue

// Microtask Queue
//     Promise.then()
//     Promise.catch()
//     Promise.finally()
//     MutationObserver
//     queueMicrotask()


// Callback Queue (Macrotask Queue)
//     setTimeout
//     setInterval
//     DOM Events (click, input, etc)
//     setImmediate (Node.js)
//     I/O operations

// So your statement is correct:

// Promise callbacks go to the Microtask Queue, 
// while setTimeout, setInterval, and DOM events go to the Callback Queue (Macrotask Queue).

// =======================================================================

// 2️⃣ Promise vs setTimeout inside Event Loop

// Promise → Microtask Queue
// setTimeout → Callback Queue (Macrotask Queue)

// Because Microtasks execute before Macrotasks.


// =======================================================================


// 3️⃣ Why Promise runs before setTimeout

// When the call stack becomes empty, 
// the event loop first executes all tasks in the Microtask Queue (like Promise.then). 
// After that, it processes tasks in the Callback Queue (like setTimeout).


