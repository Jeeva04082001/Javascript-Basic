// 1️⃣7️⃣ Arrays & Methods (JavaScript)

// Arrays are one of the most important data structures in JavaScript.


// 🔹 1️⃣ map() → Transform Data

// 👉 Used to transform each element
// 👉 Returns a new array


// const nums = [1,2,3,4,5]
// const doubled = nums.map(n=>n*2);
// console.log(doubled);

// ----------------------------------------------------------

// const users = [
//     {name:"Jeeva",age:24},
//     {name:"Jeni",age:24}
// ]

// const names = users.map(user => user.name)
// console.log(names);


// =======================================================================

// 🔹 2️⃣ filter() → Condition Based Selection

// 👉 Used to filter elements based on condition
// 👉 Returns a new array


// const nums = [1,2,3,4,5,6]
// const even = nums.filter( n => n % 2 === 0)
// console.log(even);


// =======================================================================


// 🔹 3️⃣ find() → First Match Only

// 👉 Returns the first element that matches condition
// 👉 Returns undefined if not found


// const nums = [10,20,30,40]
// const result = nums.find(n => n>25);
// console.log(result);


// Difference:-

// | Method | Return Type  |
// | ------ | ------------ |
// | filter | Array        |
// | find   | Single value |



// =======================================================================

// 🔹 4️⃣ reduce() → Aggregation

// 👉 Used to reduce array into single value
// 👉 Very powerful (sum, count, grouping)



// const nums = [1,2,3,4,5];

// const total = nums.reduce((acc,curr) => {
    
//     console.log(acc,"acc");
//     console.log(curr,"curr");
//     return acc + curr;
// },0)
// console.log(total);

//------------------------------------------------

// const nums = [1,2,3,4,5];
// const sum = nums.reduce((total,num) => total+num, 0);
// console.log(sum);

// Explanation:
//     acc = accumulator
//     curr = current value
//     0 = initial value

// Count Occurrences Example

// const fruits = ["apple", "banana", "apple"];
// const count = fruits.reduce((acc,fruit) => {
//     acc[fruit] = (acc[fruit] || 0)+1;
//     return acc;
// },{});

// console.log(count);



// =======================================================================


// 🔹 5️⃣ forEach() → Iteration Only

// 👉 Used only to loop
// 👉 Does NOT return new array

// const nums = [1,2,3,4,5]
// nums.forEach(n=>{
//     console.log(n);
    
// })

// const result = nums.forEach(n=>n*2);
// console.log(result); //undefined
// Because forEach returns nothing.

// =======================================================================
// 🔥 map vs forEach (Interview Important)


// | Feature                 | map | forEach |
// | ----------------------- | --- | ------- |
// | Returns new array       | ✅   | ❌       |
// | Used for transformation | ✅   | ❌       |
// | Used for side effects   | ❌   | ✅       |



// 🧠 Summary

// | Method  | Purpose                   |
// | ------- | ------------------------- |
// | map     | Transform                 |
// | filter  | Condition                 |
// | find    | First match               |
// | reduce  | Aggregate to single value |
// | forEach | Loop only                 |



// 🎯 Simple Interview Answer

// map is used to transform data, 
// filter is used to select elements based on condition, 
// find returns the first matching element, 
// reduce is used to convert an array into a single value, 
// and forEach is used only for iteration.

// =======================================================================


// some() & every()
// Both are boolean methods.

// ✅ some() → At least one condition true
// Returns true if any one element satisfies condition.


// const nums = [1, 3, 5, 8];
// const hasEven = nums.some(n => n%2 === 0);
// console.log(hasEven);

// ✔ Stops when first match found
// ✔ Returns true/false

// =======================================================================

// ✅ every() → All must satisfy condition
// Returns true only if all elements satisfy condition.


// const nums = [2, 4, 6, 8];
// const allEven = nums.every(n => n%2 ===0);
// console.log(allEven);

// 🔥 Difference

// | Method | Meaning      |
// | ------ | ------------ |
// | some   | At least one |
// | every  | All elements |

// =======================================================================


// 🔹 2️⃣ sort() Deep Explanation
// ⚠️ Important: sort() converts values to strings by default.


// const nums = [10,2,4];
// nums.sort();
// console.log(nums); // [ 10, 2, 4 ]❌


// Because it compares as strings:
// "10", "2", "5"


// const nums = [10,2,4];
// nums.sort((a,b) => a - b); //asscending
// nums.sort((a,b) => b - a); //descending
// console.log(nums);

// Explanation:
    // If result < 0 → a comes first
    // If result > 0 → b comes first

// const users = [
//   { name: "Jeeva", age: 28 },
//   { name: "Arun", age: 29 }
// ];
// users.sort((a,b) => a.age - b.age);
// users.sort((a,b) => b.age - a.age);
// console.log(users);

// sort() modifies original array (mutates).

// =======================================================================


// flat() & flatMap()

// ✅ flat() → Remove nested arrays

// const arr = [1, 2, [3, 4]];
// const arr1 = [1, 2, [3,[4]]];
// console.log(arr.flat());
// console.log(arr1.flat(2));

// const nums = [1,2,[3]];
// const result = nums.flatMap(n => [n, n*2]);
// const result1 = nums.flatMap(n => n*2);
// console.log(result); // [1, 2, 2, 4, 3, 6]
// console.log(result1); //[ 2, 4, 6 ]



// Equivalent to:
//     nums.map(...).flat();
// But faster & cleaner.

// =======================================================================


// 🔹 4️⃣ slice() vs splice()
// Very important interview question 🔥

// ✅ slice() → Copy
//     Does NOT modify original
//     Returns new array


// const arr = [1, 2, 3, 4];
// const newArr = arr.slice(1,3);
// console.log(newArr);

// const res = arr.slice(0,2);
// console.log(res);

// const neg = arr.slice(-1,4)
// console.log(neg);

// const neg = arr.slice(1,-2)
// console.log(neg);

// =======================================================================


// ✅ splice() → Modify

//     Modifies original array
//     Used to add/remove items

// const arr = [1, 2, 3, 4];
// arr.splice(1,1);
// arr.splice(1,1,22);
// console.log(arr);

// arr.splice(1,0,10);
// console.log(arr);

// | Parameter   | Value     | Meaning          |
// | ----------- | --------- | ---------------- |
// | startIndex  | 1         | Start at index 1 |
// | deleteCount | 0         | Delete nothing   |
// | 10          | Insert 10 |                  |

// 👉 Start at index 1
// 👉 Delete 0 elements
// 👉 Insert 10


// 🎯 Final Interview Summary

// ✔ some → At least one
// ✔ every → All elements
// ✔ sort → Needs compare function for numbers
// ✔ flat → Removes nesting
// ✔ flatMap → map + flat
// ✔ slice → copy (no mutation)
// ✔ splice → modify original
// ✔ reduce → most powerful array method











