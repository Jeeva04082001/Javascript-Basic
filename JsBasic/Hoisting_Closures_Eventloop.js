// 5️⃣ Hoisting
// JavaScript moves declarations to top.

// “Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during the compilation phase.”
// Explanation:- variable and functions declarations are moved to the top of their scope during compilation


// console.log(a);
// var a=10;

// var → initialized as undefined

//---------------------------------------------

// console.log(b);
// let b=20;
// Cannot access 'b' before initialization

//---------------------------------------------

// console.log(c);
// const c=30;

// Cannot access 'c' before initialization
// ⚠️ let and const are hoisted but not accessible before declaration.

// =============================================================================


// 6️⃣ Scope
// Scope = where variable is accessible

// Function Scope

//     var
//     Accessible inside function only

// Block Scope

//     let, const
//     Accessible only inside {}

// ===================================================================


// 7️⃣ Closures

// A function that remembers variables from its outer scope.
// even after that outer function has finished executing.


// function outer(){
//     let count=0;

//     return function inner(){
//         count++;
//         return count
//     }
// }

// function outer(){
//     let count = 0;
//     return function inner(){
//         count++;
//         return count

//     }
// }
// const counter = outer();
// console.log(counter());


// Used in:

//     Data hiding
//     Callbacks
//     React hooks


// ======================================================================

// 8️⃣ Event Loop

// The event loop handles asynchronous operations.
// Handles asynchronous execution

// javaScript is single-threaded but uses an event loop 
// to handle async tasks without blocking.



// Flow:

// Call Stack
// Web APIs
// Microtask Queue (Promises)
// Callback Queue
// Event Loop pushes to stack

// setTimeout(() => console.log("Hi"), 0);



// ✅ Why Event Loop is Needed?

// JavaScript is:

//     🧵 Single-threaded
//     📦 Has one Call Stack
//     ⚡ Non-blocking (asynchronous)

// But how does JS handle:

//     setTimeout
//     Promise
//     fetch
//     DOM events

// 👉 That’s where the Event Loop comes in.


// 🧠 Core Components
// 1️⃣ Call Stack

//     Executes synchronous code
//     LIFO (Last In First Out)


// function one(){
//     two();
//     console.log('ffffffffffffff');
    
// }

// function two(){
//     console.log("Hellowwww");
    
// }


// Stack flow:

// one()
// two()
// console.log()

// --------------------------------------------------------------

// 2️⃣ Web APIs (Browser APIs)

// These are provided by the browser:

// setTimeout
// setInterval
// fetch
// DOM events

// They run outside the call stack.

// --------------------------------------------------------------


// 3️⃣ Callback Queue (Macrotask Queue)

// Stores:

//     setTimeout
//     setInterval
//     DOM events



// --------------------------------------------------------------

// 4️⃣ Microtask Queue
// Stores:

//     Promise.then()
//     catch
//     finally
//     queueMicrotask

// ⚠ Microtasks have higher priority than macrotasks.

// 🔁 What is Event Loop?

// The Event Loop continuously checks:

// Is Call Stack empty?
// If yes → move tasks from queues into stack
// First check Microtask Queue
// Then check Callback (Macrotask) Queue


// 1. Code execution starts in Call Stack
// 2. Async operations like setTimeout,fetch, or DOM events move to web API's
// 3. When completed, their callbacks go to the Callback Queue
// 4. The Event loop constantly checks if the call stack is empty
// 5. If empty, it pushes tasks from the queue to the Call Stack


// --------------------------------------------------------------
// 🔥 Example 1 (Classic Interview Question)


// console.log("Start");

// setTimeout(()=>{
//     console.log("Timeout");
// },0)

// console.log("End");

// Output:
// Start
// End
// Timeout


// Why?
//     Start → Call Stack → print
//     setTimeout → goes to Web API
//     End → print
//     Stack empty
//     Event Loop moves timeout callback to stack
//     Timeout prints

// Even if delay is 0, it waits for stack to clear.

// --------------------------------------------------------------

// 🔥 Example 2 (Microtask vs Macrotask)

// console.log("Start");
// setTimeout(()=>{
//     console.log("Timeout");
    
// },0)

// Promise.resolve().then(()=>{
//     console.log("Promise");
// });
// console.log("End");

// Output:
// Start
// End
// Promise
// Timeout



// Why?
// Order of execution:

// Synchronous → Start
// setTimeout → Macrotask queue
// Promise.then() → Microtask queue
// End
// Stack empty
// Event Loop checks Microtask first
// Promise
// Then Macrotask → Timeout

// 🔥 Execution Priority Order
// 1️⃣ Synchronous Code
// 2️⃣ Microtasks (Promises)
// 3️⃣ Macrotasks (setTimeout)

// “The Event Loop is a mechanism that allows JavaScript to handle 
//  asynchronous operations by moving tasks from queues to the call stack when it is empty.”

// --------------------------------------------------------------

// 🔥 Common Interview Questions

// ❓ Is JavaScript multi-threaded?
// No. Single-threaded but async via Event Loop.

// ❓ Why does setTimeout(0) not run immediately?
// Because it waits until the call stack is empty.

// ❓ What runs first: Promise or setTimeout?
// Promise (Microtask queue has higher priority).

// --------------------------------------------------------------

// What is event loop ?

// The event loop manages asynchronous operations by checking the call stack 
// and moving tasks from the callback queue to execution.

// Call Stack → Web APIs → Callback Queue → Event Loop

// 1. Call Stack

// The Call Stack is where JavaScript executes functions.
// JavaScript is single-threaded, so it can run only one task at a time.


// function a(){
//     console.log("A");
// }
// function b(){
//     console.log("B");
    
// }
// a();
// b();


// 2. Web APIs
// Some operations take time:

//     setTimeout
//     fetch
//     DOM events
//     addEventListener

// These are not handled by the JavaScript engine directly.
// They are handled by browser Web APIs.


// console.log("start");

// setTimeout(()=>{
//     console.log("Timeout");
// },2000);

// console.log("End");


// 3. Callback Queue

// When Web API finishes its work, it sends the callback function to the Callback Queue.

// Example:

// Callback Queue
// ----------------
// console.log("Timeout")

// But it cannot execute yet.
// Because JavaScript must first check the Call Stack.


// 4. Event Loop

// The Event Loop continuously checks:

    // Is the Call Stack empty?
    // If yes → take function from Callback Queue
    // Push it into Call Stack

// So the event loop moves callbacks from queue → stack.


// Call Stack
//    ↓
// Web API
//    ↓
// -------------------------
// Microtask Queue (High Priority)
// Promise.then()
// -------------------------
// Callback Queue (Low Priority)
// setTimeout
// setInterval
// -------------------------
// Event Loop



// console.log("1");
// setTimeout(()=>{
//     console.log("2");
// },0);

// Promise.resolve().then(()=>{
//     console.log("3");
// })
// async function test(){
//     console.log("4");
//     await Promise.resolve();
//     console.log("5");
    
// }
// test();
// console.log("6");

// “Async functions run synchronously until the first await. 
// After await, the remaining code is scheduled as a microtask 
// and executed after the call stack becomes empty.”

// 1️⃣ Synchronous code (Call Stack)

// 2️⃣ Microtasks
//    - Promise.then
//    - async/await
//    - queueMicrotask

// 3️⃣ Macrotasks
//    - setTimeout
//    - setInterval
//    - DOM events


//             JavaScript Engine
//            -------------------
//                 Call Stack
//            -------------------
//                  |
//                  | async tasks
//                  ↓
//               Web APIs
//       (setTimeout, fetch, DOM events)
//                  |
//                  | task finished
//                  ↓
//       ------------------------------
//         Microtask Queue (HIGH)
//         - Promise.then()
//         - catch / finally
//         - async/await
//         - queueMicrotask()
//       ------------------------------
//                  |
//                  ↓
//       ------------------------------
//         Callback Queue (LOW)
//         - setTimeout
//         - setInterval
//         - DOM events
//       ------------------------------
//                  |
//                  ↓
//              Event Loop
//    (moves tasks to Call Stack when empty)





