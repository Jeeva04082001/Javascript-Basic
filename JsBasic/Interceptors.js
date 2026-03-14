

// Interceptors in JavaScript are mainly used with HTTP request libraries like Axios 
// to intercept (capture and modify) requests or responses before they reach your code.



// They are commonly used for:

//     Adding auth tokens
//     Logging requests/responses
//     Handling errors globally
//     Refreshing expired tokens


// 1️⃣ Interceptors in Axios

// Axios provides built-in interceptors.
// Request Interceptor
// Runs before the request is sent.


// import axios from "axios";
// axios.interceptors.request.use (
//     function (config){
//         console.log("Request sent", config);

//         config.headers.Authorization = "Barer myToken";

//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
//     )
// );

// 📌 Use cases
//     Add JWT token
//     Add custom headers
//     Log requests

// import axios from "axios";
// axios.interceptors.response.use(
//     function(response){
//         console.log("Response received:", response);
//         return response; 
//     },

//     function (error){
//         if(error.response.status === 401)  {
//             console.log("Unauthorized user");
            
//         }
//         return Promise.reject(error);
//     }
// );

// 📌 Use cases

//     Global error handling
//     Auto logout on 401
//     Modify response data


// ==========================================================================================

// 2️⃣ Interceptors with Fetch

// ⚠️ Fetch API does NOT have built-in interceptors.
// But we can create a wrapper function to simulate interceptors.


// async function customFetch(url,options={}){
//     options.headers = {
//         ...options.headers,
//         Authorization:"Bearer myToken"
//     };
//     const response = await fetch(url,options);
//     if(!response.ok){
//         console.log("Error occured");
//     }
//     return response.json()

// }


// ==========================================================================================


// 3️⃣ Axios vs Fetch (Interceptors)

// | Feature               | Axios     | Fetch                       |
// | --------------------- | --------- | --------------------------- |
// | Built-in interceptors | ✅ Yes     | ❌ No                        |
// | Request modification  | Easy      | Manual                      |
// | Response handling     | Easy      | Manual                      |
// | Error handling        | Automatic | Need to check `response.ok` |

// ==========================================================================================


// 4️⃣ Real Project Example (Most Common)

// Add token automatically:


// axios.interceptiors.request.use((config)=>{

//     const token = localStorage.setItem("token");

//     if(token){
//         config.headers.Authorization = `Bearer ${token}`
//     }
//     return config;
// });

// Now every API call automatically sends token

// Interceptors are functions that run before a request is sent or after a response is received, 
// allowing us to modify requests, responses, or handle errors globally.


// ==========================================================================================































