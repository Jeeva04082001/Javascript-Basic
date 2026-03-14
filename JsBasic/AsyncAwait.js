// 1️⃣4️⃣ Async & Await

// Cleaner syntax over promises
// Cleaner way to write async code
// Uses try, catch, finally



// async function getData(){
//     try{
//         const res = await fetch(url);
//         const data = await res.json();
//     } catch(e){
//         console.error(e);
//     } finally{
//         console.log("Done");
//     }
// }

// ✅ More readable
// ✅ Looks like synchronous code
// ✅ Easier error handling


// 🔹 1. What is async?
// When you add async before a function:

// async function test(){
//     return "Hello";
// }
// 👉 It always returns a Promise.

// So internally:
// test().then(res=>console.log(res))

// Even if you return a normal value, JavaScript wraps it inside a Promise.


// ------------------------------------------------------------------

// 🔹 2. What is await?
// await is used inside async function only.
// It pauses the function execution until the Promise is resolved.

// function delay(){
//     return new Promise(resolve =>{
//         setTimeout(()=> resolve("Done"),1000)
//     })
// }

// async function run(){
//     console.log("start");
//     const res = await delay()
//     console.log(res);
//     console.log("End");  
// }
// run()

    

// 👉 await pauses ONLY inside that async function
// 👉 It does NOT block the entire JavaScript thread


// ------------------------------------------------------------------

// 3. Error Handling in Async/Await

// Use try...catch

// async function getData() {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// Instead of:

// fetchData()
//   .then(...)
//   .catch(...)



// ------------------------------------------------------------------

// 🔹 4. Without Await (Important Interview Point)
// If you don’t use await:

// function delay(){
//     return new Promise(resolve=>{
//         setTimeout(()=> resolve("Done"),1000);
//     });
// }

// async function test(){
//     const data = delay();
//     console.log(data);
    
// }
// test();

// output:-
// Promise { <pending> }

// 👉 It prints Promise object, not actual data.
// Because delay() is asynchronous.

// ------------------------------------------------------------------


// 🔹 5. Multiple Await Example

// function task1(){
//     return new Promise(resolve=>{
//         setTimeout(()=>resolve("task 1"),1000)
//     })
// }

// function task2(){
//     return new Promise(resolve=>{
//         setTimeout(()=>resolve("task 2"),2000)
//     })
// }


// async function run(){
//     const a = await task1();
//     const b = await task2();
//     console.log(a,b);
    
// }
// run()

// async function promise(){
//     const [a,b]= await Promise.all([task1(),task2()])

//     console.log(a,b,"promiseeee");
    
// }
// promise()


// async function example() {
//   const a = await task1();
//   const b = await task2();
//   const c = await task3();
//   console.log(a, b, c);
// }
// ⚠️ This runs one after another (sequential)

// If you want parallel execution:



// async function example() {
//   const [a, b, c] = await Promise.all([
//     task1(),
//     task2(),
//     task3()
//   ]);
//   console.log(a, b, c);
// }
// ✅ Faster (runs in parallel)

// ------------------------------------------------------------------

// 🔹 6. Real Example (API Call)

// async function getUsers(){
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users")
//         const users = await res.json();
//         console.log(users);
    
//     } catch (error){
//         console.error("Error fetching users: ",error);
//     }
// }
// getUsers();


// ------------------------------------------------------------------


// 🔹 7. Important Interview Points

// ✔ async function always returns Promise
// ✔ await works only inside async function
// ✔ await pauses execution (not blocking entire JS)
// ✔ Use try/catch for error handling
// ✔ For parallel execution use Promise.all
// ✔ Async/await is syntactic sugar over Promises

// 🔥 Simple Definition (Interview Answer)

// Async/Await is a modern way to handle asynchronous operations in JavaScript.
// It is built on top of Promises and provides cleaner and more readable syntax.

// ------------------------------------------------------------------


