// 9️⃣ Why JavaScript is Functional Language

// Because:

// Functions are first-class citizens
// Functions can be:

//     Assigned to variables
//     Passed as arguments
//     Returned from functions
//     Stored in variables

// JavaScript is considered a functional language because functions are first-class citizens. 
// This means functions can be stored in variables, passed as arguments to other functions, 
// returned from functions, and used like normal values.
// ============================================================

// 🔟 Types of Functions

// ----------Normal Function

// function add(a,b){
//     return a+b;
// }

// ---------Arrow (Fat Arrow) Function

// const add = (a,b) => a+b;

// Differences:

//     No this
//     No arguments
//     Short syntax


//--------------Anonymous Function (No name)


// arr.map(function(x) {
//     return x*2;
// })


// -----------------Callback Function


// setTimeout(()=>{
//     console.log("Done");
    
// },1000);

//------------------Higher Order Function

// Function that:

// Accepts a function OR
// Returns a function

// Examples:
//     map
//     filter
//     reduce


// =====================================================================

// 1️⃣1️⃣ Programming Types
// Synchronous:-
//     Blocking
//     Line-by-line execution
// Asynchronous:-
//     Non-blocking
//     Uses callbacks, promises, async/await



// 🔹 1️⃣ Synchronous Programming
// 📌 Definition

// Synchronous means:

//     Executes line by line
//     Each task must finish before the next starts
//     Blocking behavior

// 🧠 How It Works
    // JavaScript executes code using the Call Stack.
    // If one task takes time, everything after it must wait.


// console.log("Start");
// function heavyTask(){
//     for(let i=0; i<1000000; i++){}
//     console.log("Task Done");  
// }
// heavyTask();
// console.log("End");


// Output:
// Start
// Task Done
// End


// 👉 End waits until heavyTask() completes.
// This is blocking.



// 🚨 Problem with Synchronous Code

// If you do:
    // API call
    // Database request
    // File reading
    // 5-second timer

// The entire program freezes until it finishes.
// Bad for UI.

// ============================================================


// 🔹 2️⃣ Asynchronous Programming
// 📌 Definition

// Asynchronous means:

//     Non-blocking
//     Long tasks run in background
//     Code continues execution
//     Uses:
//         Callbacks
//         Promises
//         async/await


// How It Works
// Instead of blocking:

//     Long task goes to Web APIs
//     Rest of code continues
//     When task finishes → Event Loop handles result

// 🔥 Example 2: Asynchronous with setTimeout

// console.log("Start");
// setTimeout(()=>{
//     console.log("Task Done"); 
// },2000)
// console.log("End");

// 👉 The timer runs in background
// 👉 Code does not wait
// 👉 Non-blocking behavior

// 🔹 Asynchronous Methods
// 1️⃣ Callback

// Old method.

// function fetchData(callback){
//     setTimeout(()=>{
//         console.log("Data received");
        
//     },1000);
// }

// fetchData((data)=>{
//     console.log(data); 
// });

// ⚠ Problem:
// Callback Hell (Nested callbacks)

//----------------------------------------------------

// 2️⃣ Promise
// Improved version of callbacks.


// function fetchData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Data received")
//         },2000)
//     })
// }

// fetchData().then((data)=>{
//     console.log(data);
// });

//cleaner than callback

//-------------------------------------------------


// 3️⃣ async / await (Modern & Cleanest)

// function fetchData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Data received");
//         },1000)
//     });
// }

// async function getData(){
//     const data = await fetchData();
//     console.log(data); 
// }
// getData();


// Looks synchronous
// But actually asynchronous.

// =======================================================

// 🔥 Deep Comparison

// | Feature     | Synchronous    | Asynchronous         |
// | ----------- | -------------- | -------------------- |
// | Execution   | Line-by-line   | Does not wait        |
// | Blocking    | Yes            | No                   |
// | Performance | Slower for I/O | Better for I/O       |
// | Use Case    | Simple logic   | API, DB, File, Timer |
// | Complexity  | Simple         | Slightly complex     |



// 🔥 When to Use What?
// Use Synchronous:

//     Simple calculations
//     Small logic
//     No waiting tasks

// Use Asynchronous:

//     API calls
//     Database queries
//     File reading
//     Timers
//     Network requests



// =======================================================

// 🔥 Very Important Interview Question
// ❓ Is async/await synchronous?

// No.

// It looks synchronous,
// but it is built on Promises,
// and still non-blocking.

// =======================================================

// 🔥 Advanced Understanding
// Even though JavaScript is single-threaded:

// Asynchronous behavior is handled using:

//     Event Loop
//     Web APIs
//     Callback Queue
//     Microtask Queue

// =======================================================

// 🔥 Interview One-Line Answer

// “Synchronous programming executes code line by line in a blocking manner, 
// while asynchronous programming allows non-blocking execution using callbacks, promises, or async/await.”


// If you're serious about mastering JS, next important topics:

// 🔹 Callback Hell
// 🔹 Promise states (pending, fulfilled, rejected)
// 🔹 async/await internally
// 🔹 try/catch with async
// 🔹 Node.js vs Browser async difference

// Tell me which one you want next 💪










