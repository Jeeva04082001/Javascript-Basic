// 🔹 What is a Promise?
// A Promise is an object that represents the future result of an asynchronous operation.
// It can be in one of three states:

// 1️⃣ Pending
// 2️⃣ Fulfilled
// 3️⃣ Rejected


// A Promise starts in Pending
// Then moves to either:

// ✅ Fulfilled
// ❌ Rejected

// 👉 Once settled (fulfilled or rejected), it cannot change again.

// ----------------------------------------------------

// 🔹 1️⃣ Pending State
// 📌 Meaning:

//     Initial state
//     Operation is still running
//     No result yet

// 🔥 Example
// let promise = new Promise((resolve,reject)=>{
//     console.log("Task started");
// });


// Here:

// Promise is created
// But neither resolve() nor reject() is called
// So it remains Pending


// ----------------------------------------------------
// 🔹 2️⃣ Fulfilled State
// 📌 Meaning:

//     Operation completed successfully
//     resolve(value) is called
//     .then() method runs


// 🔥 Example
// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Data received")
//     },2000)
// });

// promise.then((result)=>{
//     console.log(result);
//     console.log("2222");

// });


// Here:-
    // State changes from Pending → Fulfilled
    // result contains resolved value

// ----------------------------------------------------

// 🔹 3️⃣ Rejected State
// 📌 Meaning:

//     Operation failed
//     reject(error) is called
//     .catch() method runs


// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Error Occured")
//     },1000);
// });

// promise
// .then((result)=>{
//     console.log(result);
//     console.log("1111");
    
// })
// .catch((error)=>{
//     console.log(error);
//     console.log('2222');
// });

// State changes from:
// Pending → Rejected


// ----------------------------------------------------

// 🔥 Real API Example

// fetch("https://api.example.com/data")
// .then(response => response.json())
// .then(data=>console.log(data))
// .catch(error => console.log("Error:",error))

// If:

// Server responds → Fulfilled
// Network fails → Rejected


// ----------------------------------------------------

// 🔥 Important Concept: Settled State

// Once a Promise is:

//     Fulfilled ✅
//     Rejected ❌

// It is called Settled.
// ⚠ It can never go back to pending or change again.



// 🔥 Internal Flow
// new Promise((resolve, reject) => {
//    // Async operation
// });

// If success → resolve(value)
// If failure → reject(error)


// 🔥 Visual Timeline Example

// console.log("Start");

// let promise = new Promise((resolve)=>{
//     setTimeout(()=> resolve("Done"),1000);
// });

// promise.then(console.log);

// console.log("End");

// output:-

// Start
// End
// Done

// Why?

//     Promise starts → Pending
//     Code continues
//     After 2 seconds → Fulfilled
//     .then() runs (microtask queue)

// 🔥 Interview One-Line Answer

// “A Promise is an object representing the eventual completion or failure of an asynchronous operation, 
// and it can be in one of three states: pending, fulfilled, or rejected.”


//====================================================================

// 🔥 Advanced Interview Questions

// ❓ Can a promise change state?
// No. Once settled, it cannot change.

// ❓ What happens if both resolve and reject are called?
// Only the first one works.

// ❓ Is .then() synchronous or asynchronous?
// Asynchronous (runs in microtask queue).

//====================================================================

// 🔹 What is Promise Chaining?
// Promise chaining means:

//     👉 Executing multiple asynchronous operations
//     👉 One after another
//     👉 Using .then()

// Each .then() returns a new promise, allowing continuous chaining.


// 🔥 Why We Need Chaining?
// Imagine you want to:

//     Login user
//     Get user profile
//     Get user posts
//     Show posts

// Each step depends on previous result.

// Without chaining → Callback Hell
// With chaining → Clean & readable code



// function step1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Step 1 done");
//             resolve(10);
//         },1000)
//     });
// }
// function step2(value){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Step 2 done");
//             resolve(value * 2);
//         },1000);
//     });
// }
// function step3(value){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Step 3 done");
//             resolve(value+5);
            
//         },1000);
//     });
// }

// step1()
// .then((result1)=> step2(result1))
// .then((result2)=> step3(result2))
// .then((finalResult)=>{
//     console.log("Final Result: ",finalResult);
// })


// 🔥 How It Works Internally

// 1️⃣ step1() runs → returns promise
// 2️⃣ When resolved → .then() runs
// 3️⃣ It returns another promise
// 4️⃣ Next .then() waits for that promise

// Each .then():

//     Waits for previous promise
//     Returns a new promise

// ========================================================================

// 🔥 Real API Example

// fetch("https://api.example.com/user")
// .then(response=>response.json())
// .then(user => fetch(`https://api.example.com/posts/${user.id}`))
// .then(response => response.json())
// .then(posts => console.log(posts))
// .catch(error => console.log("Error",error));

// Each .then() waits for previous result.

// 🔥 Promise Chaining Flow
// Promise
//    ↓
// .then()
//    ↓
// .then()
//    ↓
// .then()
//    ↓
// .catch()

// 🔥 Interview One-Line Answer

// “Promise chaining is a pattern where multiple asynchronous operations are executed sequentially by returning promises inside .then() methods.”


// 🔥 Promise Chaining vs async/await
// Promise Chaining

//     Uses .then()
//     Slightly harder to read for large chains

// async/await

//     Looks synchronous
//     Cleaner and easier



// function step1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Step 1 done");
//             resolve(10);
//         },1000)
//     });
// }
// function step2(value){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Step 2 done");
//             resolve(value * 2);
//         },1000);
//     });
// }
// function step3(value){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Step 3 done");
//             resolve(value+5);
            
//         },1000);
//     });
// }

// async function execute(){
//     const r1 = await step1();
//     const r2 = await step2(r1);
//     const r3 = await step3(r2);
//     console.log(r3); 
// }
// execute();

// 🔥 Common Interview Questions

// ❓ Does .then() return a promise?
// Yes.

// ❓ What if a promise inside chain fails?
// It skips remaining .then() and goes to .catch().

// ❓ Can we have multiple .then()?
// Yes, unlimited.


// ==============================================================================


// 🔥 Promise.all() in JavaScript (Detailed Explanation)
// 🔹 What is Promise.all()?

// Promise.all() is used to run multiple promises in parallel and wait until all of them complete successfully.

// 👉 If all promises resolve → it returns all results
// 👉 If any one promise rejects → it immediately rejects

// ------------------------------------------------------------------

// 🔹 Syntax

// Promise.all([promise1,promise2,promise3])

// It takes an array of promises
// Returns a single promise

// --------------------------------------------------

// 🔥 Basic Example

// const p1 = Promise.resolve(10);
// const p2 = Promise.resolve(20);
// const p3 = Promise.resolve(30);

// Promise.all([p1,p2,p3])
// .then((result)=>{
//     console.log(result);   
// })

// Output:
// [10, 20, 30]

// ✅ Results come in same order as array, not execution time.

// 🔥 Example with setTimeout (Parallel Execution)

// function task1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=> resolve("Task 1 done"),1000);
//     });
// }

// function task2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve("Task 2 done"),1000)
//     });
// }

// Promise.all([task1(),task2()])
// .then((result)=>{
//     console.log(result);   
// });

// Output after 2 seconds:
// ["Task 1 done", "Task 2 done"]

// Even though task2 finishes first,
// Result order stays same as array.

// 🔥 Important Behavior: If One Fails


// const p1 = Promise.resolve("Success");
// const p2 = Promise.reject("Failed");
// const p3 = Promise.resolve("Another Success");

// Promise.all([p1,p2,p3])
// .then((result)=>{
//     console.log(result);
    
// })
// .catch((error)=>{
//     console.log("Error:",error);
    
// })

// Output:
// Error: Failed

// 👉 Immediately stops
// 👉 Rejects with first error
// 👉 Other results are ignored

//------------------------------------------------------------

// 🔥 Real World Example (API Calls)

// Promise.all([
//     fetch("/user"),
//     fetch("/posts"),
//     fetch("/comments")
// ])
// .then(responses => Promise.all(responses.map(r => r.json())))
// .then(data => {
//     console.log(data); 
// })
// .catch(error => console.log(error));

// Used when:
// Multiple APIs are independent
// You need all results together


// 🔥 When to Use Promise.all()

//     ✅ Running tasks in parallel
//     ✅ Independent API calls
//     ✅ Improving performance
//     ✅ When all results are required


//------------------------------------------------------------

// 🔥 When NOT to Use

// ❌ If tasks depend on each other
// ❌ If you want partial success

// For partial success → use Promise.allSettled()

// 🔥 async/await Version

// async function runTasks(){
//     try {
//         const result = await Promise.all([
//             task1(),
//             task2()
//         ]);
//         console.log(result);
//     } catch (error){
//         console.log("Error",error);
//     }
// }
// runTasks();

// 🔥 Interview One-Line Answer
// “Promise.all() runs multiple promises in parallel and resolves only when all promises are fulfilled, but rejects immediately if any promise fails.”

// 🔥 Comparison

// | Feature              | Promise.all |
// | -------------------- | ----------- |
// | Runs in parallel     | ✅ Yes       |
// | Stops on first error | ✅ Yes       |
// | Returns array        | ✅ Yes       |
// | Order maintained     | ✅ Yes       |

// 🔥 Common Interview Questions

// ❓ Does Promise.all run promises sequentially?
// No. It runs them in parallel.

// ❓ What happens if one promise fails?
// Entire Promise.all rejects immediately.

// ❓ Does result order change?
// No. Order remains same as input array.

//---------------------------------------------------------------------------

// 🔥 Promise.allSettled() in JavaScript (Detailed Explanation)
// 🔹 What is Promise.allSettled()?

// Promise.allSettled() runs multiple promises in parallel and waits until all of them finish, regardless of whether they:

//     ✅ Fulfill
//     ❌ Reject

// Unlike Promise.all(), it never fails immediately.


// 🔹 Syntax
// Promise.allSettled([promise1, promise2, promise3])
// Returns a single promise that resolves with an array of results.

// 🔥 Basic Example

// const p1 = Promise.resolve("Success 1");
// const p2 = Promise.reject("Error 2");
// const p3 = Promise.resolve("Success 3");

// Promise.allSettled([p1,p2,p3])
// .then((result)=>{
//     console.log(result);
// })

// 🔥 Output

// [
//   { status: 'fulfilled', value: 'Success 1' },
//   { status: 'rejected', reason: 'Error 2' },
//   { status: 'fulfilled', value: 'Success 3' }
// ]

// 🔥 Important Difference from Promise.all()
// Promise.all()

//     ❌ Fails immediately if one rejects
//     Does not return other results

// Promise.allSettled()

//     ✅ Waits for all promises
//     Returns both success and failure results

// 🔹 Structure of Result Object
// Each result contains:

// If fulfilled:
//     {
//     status: "fulfilled",
//     value: result
//     }
// If rejected:
//     {
//     status: "rejected",
//     reason: error
//     }



// 🔥 Real-World Example (Multiple API Calls)
// Imagine loading:

//     User profile
//     Posts
//     Notifications

// Even if one fails, you still want others.


// Promise.allSettled([
//     fetch("/user"),
//     fetch("/posts"),
//     fetch("/comments")
// ])
// .then((results)=>{
//     results.forEach((result)=>{
//         if(result.status === "fulfilled"){
//             console.log("Success", result.value);
//         }
//         else{
//             console.log("Failed", result.reason);
//         }
//     });
// });



// 🔥 Practical Example with Delays 

// Waits for all promises, even if some fail.

// _ means "I am not using this parameter".
// In task2 you only need reject, because the promise will fail.
// _  = unused parameter

// function task1() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve("Task 1 done"), 1000)
//   );
// }

// function task2() {
//   return new Promise((_, reject) =>
//     setTimeout(() => reject("Task 2 failed"), 1500)
//   );
// }

// Promise.allSettled([task1(),task2()])
// .then((result)=> console.log(result))

// After 1.5 seconds:

// [
//   { status: "fulfilled", value: "Task 1 done" },
//   { status: "rejected", reason: "Task 2 failed" }
// ]


// 🔥 When Should You Use Promise.allSettled()?

// ✅ When tasks are independent
// ✅ When partial success is acceptable
// ✅ When you want full report of all operations
// ✅ In dashboards loading multiple widgets


// 🔥 async/await Version


// function task1() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve("Task 1 done"), 1000)
//   );
// }

// function task2() {
//   return new Promise((_, reject) =>
//     setTimeout(() => reject("Task 2 failed"), 1500)
//   );
// }

// async function runTasks(){
//     const result = await Promise.allSettled([
//         task1(),
//         task2()
//     ]);
//     console.log(result);
    
// }
// runTasks()

// Output:-

// [
//   { status: 'fulfilled', value: 'Task 1 done' },
//   { status: 'rejected', reason: 'Task 2 failed' }
// ]


// 🔥 Comparison Table

// | Feature                    | Promise.all | Promise.allSettled |
// | -------------------------- | ----------- | ------------------ |
// | Runs in parallel           | ✅           | ✅                  |
// | Stops on first error       | ✅           | ❌                  |
// | Returns all results        | ❌           | ✅                  |
// | Useful for partial success | ❌           | ✅                  |

// 🔥 Interview One-Line Answer
// “Promise.allSettled() executes multiple promises in parallel and returns the result of all promises, whether they are fulfilled or rejected.”


// 🔥 Common Interview Questions

// ❓ Does it ever reject?
// No. It always resolves with an array.

// ❓ Does order change?
// No. Order remains same as input array.

// ❓ When should you use it instead of Promise.all?
// When partial results are required.


// =====================================================================================



// Promise.race()--------

// Promise.race() returns the result of the first promise that finishes.

// It does not wait for other promises.
// The first promise can be fulfilled or rejected.



// function task1(){
//     return new Promise(resolve => 
//         setTimeout(()=> resolve("Task1 done"),1000)
//     )
// }

// function task2(){
//     return new Promise(resolve => {
//         setTimeout(()=> resolve("Task2 done"),1000)
//     })
// }

// function task3(){
//     return new Promise((resolve,reject)=>
//         setTimeout(()=>reject("Task 3 failed"),3000)
//     )
// }

// Promise.race([task1(),task2(),task3()])
// .then(res=>console.log(res))


// 4️⃣ Promise.any()

// Promise.any() returns the first successful promise.

// It ignores rejected promises.


// Promise.any([task1(),task2(),task3()])
// .then(res=> console.log(res))

// If all promises fail
// AggregateError means all promises failed.


// | Method             | Behavior                        |
// | ------------------ | ------------------------------- |
// | Promise.all        | All promises must succeed       |
// | Promise.allSettled | Returns results of all promises |
// | Promise.race       | First promise to finish wins    |
// | Promise.any        | First successful promise wins   |






const promise = new Promise((resolve, reject) => {
  if(true){
    resolve("Success")
  } else {
    reject("Error")
  }
})

promise.then((res)=>{
    console.log(res);  
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=> console.log("Finished"))

