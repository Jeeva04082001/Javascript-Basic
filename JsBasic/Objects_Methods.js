// 1️⃣8️⃣ Objects & Methods (JavaScript)

// Objects are used to store key–value pairs.

// 🔹 1️⃣ Object.keys(obj)

// 👉 Returns an array of keys
// 👉 Only own properties (not prototype properties)


// const user = {
//   name: "Jeeva",
//   age: 22,
//   city: "Chennai"
// };

// console.log(Object.keys(user));

// ✅ Output:
// ["name", "age", "city"]

// 📌 Type of return value = Array


// Object.keys(user).forEach(key =>{
//     console.log(key, user[key]);
// })

// ✅ Output:
// name Jeeva
// age 22
// city Chennai


// 🔹 2️⃣ Object.values(obj)
// 👉 Returns an array of values


// const user = {
//   name: "Jeeva",
//   age: 22,
//   city: "Chennai"
// };



// console.log(Object.values(user));

// 🧠 Real Use Case
// Sum all numeric values:

// const scores = {
//   math: 90,
//   science: 80,
//   english: 70
// };

// total = 0;
// const count = Object.values(scores).forEach(val => {
//     total += val
// })
// console.log(total);

// const total = Object.values(scores).reduce((acc,curr) => acc+curr, 0);
// console.log(total);


// const total = Object.values(scores)
//     .reduce((acc,curr) => acc+curr, 0);

// console.log(total); // 240
    
// =====================================================================

// 1️⃣ Print all keys and values of an object

// 🔹 3️⃣ Object.entries(obj)

// 👉 Returns array of [key, value] pairs


// const user = {
//   name: "Jeeva",
//   age: 22,
//   city: "Chennai"
// };

// console.log(Object.entries(user));

// ✅ Output:

// [ [ 'name', 'Jeeva' ], [ 'age', 22 ], [ 'city', 'Chennai' ] ]

// Object.entries(user).forEach(([key, value]) => {
//   console.log(key, value);
// });


// 📊 Comparison Table

// | Method         | Returns            | Output Type |
// | -------------- | ------------------ | ----------- |
// | Object.keys    | Keys               | Array       |
// | Object.values  | Values             | Array       |
// | Object.entries | [key, value] pairs | Array       |

// 🎯 Simple Interview Answer

// Object.keys() returns all keys, Object.values() returns all values, and Object.entries() returns key–value pairs as arrays.

// =====================================================================


// 2️⃣ Count how many properties an object has

// Question
// Find number of keys.


// const user = {
//   name: "Jeeva",
//   age: 22,
//   city: "Chennai"
// };

// count = Object.keys(user).length
// console.log(count);

// =====================================================================

// 3️⃣ Convert object to array

// Question
// Convert object into array.


// const user = {
//   name: "Jeeva",
//   age: 22
// };

// const arr = Object.entries(user)
// console.log(arr);

// Output:-
// [ [ 'name', 'Jeeva' ], [ 'age', 22 ] ]


// =====================================================================


// 4️⃣ Check if key exists in object

// Question
// Check if "age" exists.

// const user = {
//   name: "Jeeva",
//   age: 22
// };

// if("age" in user){
//     console.log("key exists");
// }

// =====================================================================

// Remove duplicate values from object

// const obj = {
//   a:1,
//   b:2,
//   c:1,
//   d:3
// }

// const result ={}
// Object.entries(obj).forEach(([key,value]) => {
//     if(!Object.values(result).includes(value)){
//         result[key]=value
//     }
// })
// console.log(result);


// =====================================================================

// ⭐ Better Solution (Using Set)

// const obj = {
//   a:1,
//   b:2,
//   c:1,
//   d:3
// }

// const seen = new Set()
// result = {}
// Object.entries(obj).forEach(([key,value]) => {

//     if(!seen.has(value)){
//         seen.add(value)
//         result[key] = value
//     }
// })
// console.log(result);

// =====================================================================

// Remove duplicate keys instead of values


// const arr = [
//  {id:1,name:"Jeeva"},
//  {id:2,name:"Ram"},
//  {id:1,name:"Jeeva"}
// ]

// const arr = [
//  {a:1,b:2},
//  {a:3,c:4},
//  {d:5}
// ]

// const seen= new Set()
// const result=[]
// arr.forEach(obj => {
//     // console.log(obj);
//     Object.entries(obj).forEach(([key,value])=>{
//         // console.log(key,value);
//         if(!seen.has(key)){
//             seen.add(key)
//             result.push(value)
//         }
//     }) 
    
// })
// console.log(result);


// JavaScript Interview Question I faced recently 💻

// Convert this array
// "["a","1","b","2","c","3"]"

// into this object
// "{ a: 1, b: 2, c: 3 }"

// const arr = ["a","1","b","2","c","3"];
// const obj = {};

// for (let i = 0; i < arr.length; i += 2) {
//   obj[arr[i]] = arr[i + 1];
// }

// console.log(obj); // { a: "1", b: "2", c: "3" }

// Simple logic:
// The array has key–value pairs, so we loop through it two elements at a time.


const arr = ["a","1","b","2","c","3"];
const obj = {};

for(let i=0; i<=arr.length; i += 2){
    obj[arr[i]] = arr[i+1];
}

console.log(obj);







































