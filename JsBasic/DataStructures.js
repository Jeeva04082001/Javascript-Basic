// 🔹 1️⃣ Array


// ✅ What is Array?
// An Array is an ordered collection of values stored using index numbers (starting from 0).

// 🔹 Key Features

// Ordered
// Indexed
// Can store mixed data types
// Allows duplicate values
// Dynamic size



// let arr=[1,2,3,4,5]
// console.log(arr[1]);

// arr.push(6)  //Appends new elements to the end of an array, and returns the new length of the array.
// arr.pop() //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// arr.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// arr.unshift(1); // Inserts new elements at the start of an array, and returns the new length of the array.

// console.log(arr);
// console.log(arr.length);


// arr.push(4);      // Add at end
// arr.pop();        // Remove last
// arr.shift();      // Remove first
// arr.unshift(0);   // Add at beginning
// arr.length;       // Size


// 🔹 When to Use?

//     List of items
//     Iteration
//     Maintaining order


// =============================================================================
// 🔹 2️⃣ Object
// ✅ What is Object?
// An Object stores data as key-value pairs.


// let person = {
//     name:"JS",
//     age:24
// }

// console.log(person.name); // Dot notation
// console.log(person["age"]); 
// console.log(person["name"]) // Bracket notation


// 🔹 Key Features
//     Keys are strings (or Symbols)
//     Not guaranteed insertion order (though modern JS mostly maintains it)
//     Used to represent real-world entities


// 🔹 When to Use?
//     Structured data
//     User profiles
//     JSON data


// =============================================================================
// 🔹 3️⃣ Map

// ✅ What is Map?
// A Map is a collection of key-value pairs, but with more flexibility than Object.


// let map = new Map();
// map.set("name","JS")
// map.set(1,"Number key")  

// let map = new Map();
// map.set("name","Jeni")
// map.set(1,[12,3,4,5])
// console.log(map.get(1));


//Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

// console.log(map);

// Output:- Map(2) { 'name' => 'JS', 1 => 'Number key' }

// 🔹 Key Features

//     Any data type can be a key (object, function, number)
//     Maintains insertion order
//     Has built-in size property


// console.log(map.get("name")); //Returns a specified element from the Map object
// console.log(map.size);  //the number of elements in the Map


// 🔹 Map vs Object

// | Feature     | Object        | Map                   |
// | ----------- | ------------- | --------------------- |
// | Key type    | String/Symbol | Any type              |
// | Order       | Not strict    | Maintains order       |
// | Performance | Good          | Better for large data |


// 🔹 When to Use?

//     When keys are not strings
//     When order matters
//     Large dynamic collections


// =============================================================================
// 🔹 4️⃣ Set

// A Set is a collection of unique values only.

// let set = new Set([1,2,2,3,4]);

// Output:- Set(4) { 1, 2, 3, 4 }

// 🔹 Key Features
//     No duplicate values
//     Maintains insertion order
//     Any data type allowed

// set.add(5) //Appends a new element with a specified value to the end of the Set.
// set.delete(2) //Removes a specified value from the Set.
// set.has(3) // empty
// console.log(set);
// console.log(set.has(3)); //a boolean indicating whether an element with the specified value exists in the Set or not.

// let set = new Set([1,2,3,4]);
// set.add(5)
// set.delete(3)
// console.log(set);
// console.log(set.has(2));



// 🔹 When to Use?

//     Remove duplicates
//     Unique collections
//     Membership checking


// =============================================================================

// 🔹 5️⃣ WeakMap

// ✅ What is WeakMap?

// Similar to Map, but:-

//     Keys must be objects
//     Weak references (garbage collected automatically)
//     Not iterable


// let weakMap = new WeakMap();
// let obj = {name:"JS"};
// weakMap.set(obj,"user data");

// console.log(weakMap.get(obj));


// ✅ What is WeakMap?

// A WeakMap is a special type of Map where:

//     ✅ Keys must be objects only
//     ✅ Keys are stored as weak references
//     ❌ Not iterable (no loop, no size property)
//     ✅ Automatically removed when object is garbage collected

// let weakMap = new WeakMap();
// let user = {name:"JS"};
// weakMap.set(user,"user Name");
// console.log(weakMap.get(user));


//------------------------------------------------------


// let weakMap = new WeakMap();
// let user = {name:"JS"};
// weakMap.set(user,"user Name");
// user=null //Now the object is garbage collected automatically. WeakMap entry is also removed.
// console.log(weakMap.get(user));

//------------------------------------------------------

// 🔹 Real Use Case (Private Data)
// WeakMap is commonly used to create private properties in classes.

// const privateData = new WeakMap();

// class User{
//     constructor(name){
//         privateData.set(this,{name:name});
//     }
//     getName(){
//         return privateData.get(this).name;
//     }
// }

// let user1 = new User("jeeva")
// console.log(user1.getName());

// Why this works?

//     privateData is not accessible directly
//     Data is tied to object instance
//     When object is deleted → data auto removed

// “A WeakMap is a collection of key-value pairs where keys must be objects 
// and are weakly referenced, meaning they can be garbage collected automatically.”


// 🔹 When Should You Use WeakMap?

//     ✅ When attaching metadata to objects
//     ✅ When creating private properties
//     ✅ When avoiding memory leaks
//     ✅ When object lifecycle matters



//// =============================================================================

// WeakSet in JavaScript


// ✅ What is WeakSet?

// A WeakSet is similar to Set, but with important differences:

//     ✅ Stores only objects (no primitives)
//     ✅ Stores objects as weak references
//     ❌ Not iterable (no loop, no size)
//     ✅ Automatically removed when object is garbage collected

// 🔹 Normal Set Example

// let set = new Set()
// set.add(1);
// set.add(1);
// set.add(2);
// console.log(set);

// ✔ Stores unique values
// ✔ Can store primitives
// ✔ Can iterate
// ✔ Has size property


// 🔹 WeakSet Example

// WeakSet has only 3 methods: add,delete,has

// let weakSet = new WeakSet();
// let user = {name:"Jeeva"};
// let emp = {namee:"kkkk"}
// weakSet.add(emp)
// weakSet.add(user)

// console.log(weakSet.has(user));
// console.log(weakSet.has(emp));


// weakSet.delete(user)
// console.log(weakSet.has(user));




//-------------------------------------------------------------------

// 🔹 Real Use Case (Tracking Processed Objects)
// Example: Avoid processing same object twice.

// const processed = new WeakSet()
// function process(user){
//     if(processed.has(user)){
//         console.log("Already processed");
//         return;
//     }
//     processed.add(user);
//     console.log("Processing user....");
    
// }
// let user1 = {name:"jeeva"};
// process(user1);
// process(user1);
// let user2 = {name:"JS"}
// process(user2);



//-------------------------------------------------------------------


// 🔥 Interview One-Line Answer

// “A WeakSet is a collection of unique objects stored as weak references, 
// meaning they can be garbage collected automatically.”

// 🔥 WeakSet vs Set

// | Feature            | Set                       | WeakSet                   |
// | ------------------ | ------------------------- | ------------------------- |
// | Value Type         | Any                       | Object only               |
// | Iterable           | ✅ Yes                     | ❌ No                      |
// | size property      | ✅ Yes                     | ❌ No                      |
// | Garbage Collection | ❌ No                      | ✅ Yes                     |
// | Use case           | General unique collection | Object lifecycle tracking |



//// =============================================================================


