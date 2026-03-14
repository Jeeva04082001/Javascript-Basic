// 1️⃣5️⃣ Fetch vs Axios

// Fetch

//     Built-in
//     Manual error handling
//     No interceptors

// Axios

//     External library
//     Auto JSON parsing
//     Supports interceptors
//     Better error handling


// ✅ What is Fetch?

//     Built-in browser API
//     No need to install anything
//     Promise-based


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));


// 🔹 Characteristics of Fetch

// ✔ Built-in (modern browsers)
// ✔ Returns Promise
// ✔ Needs manual .json() conversion
// ✔ Manual error handling
// ❌ No interceptors
// ❌ No automatic timeout (needs AbortController)



// ⚠️ Important: Manual Error Handling

// Fetch does NOT throw error for HTTP errors like 404 or 500.


// fetch(url)
// .then(res => {
//     if(!res.ok){
//         throw new Error("Http error");
//     }
//     return res.json();
// })

// You must manually check response.ok.

//-------------------------------------------------------------------------------

// 🚀 2️⃣ Axios

// ✅ What is Axios?

//     External library
//     Must install using npm or CDN
//     Promise-based



// import axios from "axios";

// axios.get("https://jsonplaceholder.typicode.com/users")
// .then(res => console.log(res.data))
// .catch(error => console.log(error));


// 🔹 Characteristics of Axios

// ✔ Automatic JSON parsing
// ✔ Better error handling
// ✔ Supports interceptors
// ✔ Supports request timeout
// ✔ Works in both browser & Node.js


// 📊 Side-by-Side Comparison
// | Feature         | Fetch           | Axios        |
// | --------------- | --------------- | ------------ |
// | Built-in        | ✅ Yes           | ❌ No         |
// | Installation    | Not needed      | Required     |
// | JSON parsing    | Manual          | Automatic    |
// | Error handling  | Manual          | Automatic    |
// | Interceptors    | ❌ No            | ✅ Yes        |
// | Timeout support | Manual          | Built-in     |
// | Cancel request  | AbortController | Cancel token |


// 🔥 What are Interceptors? (Simple Explanation)
// Think of interceptors like a security check or middleware that runs:

// 👉 Before a request is sent
// 👉 After a response is received

// They allow you to automatically modify or handle requests and responses.


// 🚀 In Axios

// Axios supports two types:

    // 1️⃣ Request Interceptor
    // 2️⃣ Response Interceptor

// 🔹 1️⃣ Request Interceptor

// Runs before sending request to server

// Used for:

//     Adding JWT token
//     Adding headers
//     Logging request
//     Modifying request


// axios.interceptors.request.use((config)=>{
//     config.headers.Authorization = "Nearer myToken"
//     console.log("Request sent");
//     return config;
    
// });

// 👉 Every request automatically adds token.

// Without interceptor ❌
// You must manually add token in every request.


// 🔹 2️⃣ Response Interceptor

// Runs after receiving response
// Used for:

//     Global error handling
//     Logging
//     Modifying response data
//     Redirecting on 401 error


axios.interceptors.response.use(
    (response)=>{
        console.log("Response Received");
        return response  
    },
    (error)=>{
        if(error.response.status === 401){
            console.log("Unauthorized! login again."); 
        }
        return Promise.reject(error);
    }
)

// 👉 If any API gives 401 error → handled automatically.


// 🔥 Why Interceptors Are Powerful?
// Imagine you have 50 API calls.

    // Without interceptors ❌
    // You must write token + error handling in all 50.

    // With interceptors ✅
    // Write once → applies to all.

// 📦 Why Fetch Doesn't Have Interceptors?

// Fetch is simple and built-in.
// It does not have built-in middleware system.

// If you want similar behavior, you must create custom wrapper functions.


// Interceptors are functions in Axios that allow us to modify 
// or handle HTTP requests and responses globally 
// before they are sent or after they are received.












