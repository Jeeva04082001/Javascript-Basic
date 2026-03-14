// 📌 What is Throttle?

// 👉 Throttle ensures a function runs only once in a fixed time interval,
// even if the event happens many times.

// Simple meaning:
// “Run at most once every X milliseconds.”

// 🧠 Why Throttle is Needed?

// Imagine scroll event.

// When you scroll:

// Scroll → Scroll → Scroll → Scroll → Scroll (hundreds per second)

// Without throttle ❌
// 👉 Function runs 100+ times per second
// 👉 Performance slow
// 👉 Browser lag

// With throttle ✅
// 👉 Function runs only once every 500ms


// 🔥 Real Scroll Example (Without Throttle)
// window.addEventListener("scroll", () => {
//   console.log("Scroll position:", window.scrollY);
// });

// ⚠️ This runs continuously while scrolling.


// 🔥 Throttle Function Implementation

// function throttle(fn, delay) {
//   let lastCall = 0;

//   return function (...args) {
//     const now = Date.now();

//     if (now - lastCall >= delay) {
//       lastCall = now;
//       fn.apply(this, args);
//     }
//   };
// }

// 🔥 Apply Throttle to Scroll Event
// const handleScroll = () => {
//   console.log("Scroll position:", window.scrollY);
// };

// window.addEventListener("scroll", throttle(handleScroll, 500));

// 👉 Now it runs only once every 500ms
// 👉 Even if user scrolls continuously



// 🔥 Real-Life Use Cases

// ✅ Infinite scroll loading
// ✅ Lazy loading images
// ✅ Scroll progress bar
// ✅ Resize events
// ✅ Button spam prevention


// 🔥 Visual Timeline

// Imagine delay = 1000ms

// Time → 0ms   200ms   400ms   600ms   800ms   1000ms

// Scroll events happening continuously

// Throttle execution →  🔥            🔥            🔥
//                      (0ms)        (1000ms)     (2000ms)

// Only runs once per second.


// 🔥 Debounce vs Throttle (Very Important)

// | Feature   | Debounce         | Throttle          |
// | --------- | ---------------- | ----------------- |
// | Executes  | After user stops | At fixed interval |
// | Best for  | Search input     | Scroll, resize    |
// | API calls | Only last call   | Limited calls     |


// 🎯 Interview Answer

// Throttle limits how often a function can execute within a specified time interval. 
// It is mainly used in scroll or resize events to improve performance.



