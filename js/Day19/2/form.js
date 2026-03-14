//Event Listeners Syntax
//.addEventListener(event, function,useCapture)
// <!--  9:43 to  9:50 -->





document.addEventListener("readystatechange",(event) => {
    if(event.target.readyState === "complete"){
        console.log("complete");
        initApp();
    }
})

const initApp=()=>{
    const view3=document.querySelector("#view3")
    const myForm = document.querySelector("#myForm")
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit event");
    })

};













