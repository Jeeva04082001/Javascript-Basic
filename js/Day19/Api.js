// 9:50 to 10:18 

//Api [Application programming interface]




// document.addEventListener("readystatechange",(event) => {
//     if(event.target.readyState === "complete"){
//         console.log("complete");
//         initApp();
//     }
// })



// const initApp=()=>{
//     const myContent = ["Earn","Grow","Give"];
//     const myObject = {
//         name:"Dhuddu",
//         myContent:["Earn","Grow","Give"],
//         logName: function(){
//             console.log(this.name)
//         }
//     };
//     window.sessionStorage.setItem("mySessionStore",JSON.stringify(myObject));
//     const mySessionData = JSON.parse(sessionStorage.getItem("mySeesionStore"));
//     console.log(mySessionData);

// };







document.addEventListener("readystatechange",(event) => {
    if(event.target.readyState === "complete"){
        console.log("complete");
        initApp();
    }
})



const initApp=()=>{
    const myContent = ["Earn","Grow","Give"];
    const myObject = {
        name:"Dhuddu",
        myContent:["Earn","Grow","Give"],
        logName: function(){
            console.log(this.name)
        }
    };
    // window.sessionStorage.setItem("mySessionStore",JSON.stringify(myObject));
    // const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
    // console.log(mySessionData);  //...temporary storage


    // localStorage.setItem("mySessionStore",JSON.stringify(myObject));
    // const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
    // console.log(mySessionData);  //...local storage


    localStorage.setItem("mySessionStore",JSON.stringify(myObject));
    
    // const key = localStorage;
    // console.log(key);

    // const key = localStorage.key(0);
    // console.log(key);
    // const key = localStorage.key(1);
    // console.log(key);

    // const key = localStorage.length;
    // console.log(key);
   
    // const key = localStorage.removeItem("mySessionStore");
    // console.log(key);
    
    // const key = localStorage.clear;
    // console.log(key);
    const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
    console.log(mySessionData);  //...local storage
};










//session storage and local storage


//---------connect index.js












