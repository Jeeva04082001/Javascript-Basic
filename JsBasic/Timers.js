// 1️⃣6️⃣ Timers

// setTimeout(fn, 1000);
// setInterval(fn, 1000);

// clearTimeout(id);
// clearInterval(id);

// 🔹 1️⃣ setTimeout()
// ⏳ Executes a function once after a delay

// setTimeout(()=>{
//     console.log("Hello after 2 seconds");
    
// },2000)

// 👉 Runs only once
// 👉 Delay is in milliseconds (1000 ms = 1 second)

// ============================================================
// ✅ Store Timeout ID

// const id = setTimeout(()=>{
//     console.log("This will not run");
// },3000)
// clearTimeout(id)

// ============================================================


// 🔹 2️⃣ setInterval()

// 🔁 Executes a function repeatedly at fixed intervals


// setInterval(()=>{
//     console.log("Runs every 1 second");
// },1000);

// 👉 Runs again and again every 1 second.

// ===============================================================
// ✅ Stop Interval

// const intervalId = setInterval(()=>{
//     console.log("Running........");
    
// },1000)

// clearInterval(intervalId);


// ===============================================================


// let count = 0;
// const id = setInterval(()=>{
//     count++;
//     console.log("Count:",count);

//     if(count === 5){
//         clearInterval(id)
//     }
    
// },1000)

// 👉 Prints 1 to 5
// 👉 Then stops automatically.

// 🧠 Important Interview Concept

// ❓ Are Timers Blocking?
// No ❌
// They work with Event Loop.

// -------------------------------------------------

// Even if you write:

// setTimeout(()=>{
//     console.log("Timer");
// },0)
// console.log("Hello");

// Output:-
    // Hello
    // Timer

// 👉 Because setTimeout goes to Web APIs → Callback Queue → Event Loop
// It never runs immediately.


// 🔹 Minimum Delay Myth

// Even if you set:
//     setTimeout(fn, 0);

// It does NOT run instantly.

// There is always:

//     Call Stack
//     Event Loop
//     Queue processing


// 🔥 setTimeout vs setInterval

// | Feature         | setTimeout   | setInterval   |
// | --------------- | ------------ | ------------- |
// | Runs once       | ✅            | ❌             |
// | Runs repeatedly | ❌            | ✅             |
// | Cancel method   | clearTimeout | clearInterval |


// 🧠 Simple Interview Answer

// setTimeout executes a function once after a specified delay.
// setInterval executes a function repeatedly at fixed intervals.
// clearTimeout and clearInterval are used to cancel them.










