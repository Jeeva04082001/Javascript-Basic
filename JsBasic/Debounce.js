// Debounce
//     Executes after delay
//     Used for search input, API calls

// 📌 What is Debounce?

// 👉 Debounce delays execution of a function
// 👉 It runs the function only after the user stops triggering it for a specified time


// Simple meaning:
// “Wait until user stops typing, then execute.”



// 🧠 Why We Need Debounce?

// Imagine search input:

// If user types:

// J
// Je
// Jee
// Jeev
// Jeeva

// Without debounce ❌
// 👉 5 API calls

// With debounce ✅
// 👉 Only 1 API call (after user stops typing)



// 🔹 How Debounce Works

// User triggers event
// Start timer
// If event happens again before timer ends → reset timer
// Only run function after delay completes

// 🔥 Basic Debounce Implementation

// function debounce(fn, delay) {
//   let timer;

//   return function (...args) {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }


// 🔹 Example: Search Input
// function search(value) {
//   console.log("API Call:", value);
// }

// const debouncedSearch = debounce(search, 1000);

// // Simulating typing
// debouncedSearch("J");
// debouncedSearch("Je");
// debouncedSearch("Jee");
// debouncedSearch("Jeeva");



// 🔥 With Debounce (Real-Time API)
// Now we use debounce 👇

// Step 1️⃣ Create Debounce Function
// function debounce(fn, delay) {
//   let timer;

//   return function (...args) {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// Step 2️⃣ Real API Call Function
// function searchAPI(query) {
//   fetch(`https://api.example.com/search?q=${query}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log("API Response:", data);
//     })
//     .catch(err => console.log(err));
// }

// Step 3️⃣ Attach to Input Field
// const input = document.querySelector("#search");
// const debouncedSearch = debounce((e) => {
//   searchAPI(e.target.value);
// }, 800);

// input.addEventListener("input", debouncedSearch);


// 🔥 Visual Timeline
// Typing:   J  Je  Jee  Jeev  Jeeva
// Time:     |---|---|---|---|---|
// Debounce:             (wait 800ms)
// API Call:                    🔥 ONE CALL


// 🎯 Interview Answer
// In real-time search APIs, debounce prevents multiple API calls by delaying execution until the user stops typing for a specified time.













