//============21-07-2024========= Event Listeners ================================




// const view= document.querySelector("#view2")
// // console.log(view);

// const div = view.querySelector("div")

// const h2 = div.querySelector("h2")


// console.log(div);
// console.log(h2);

//............syntax............
//addEventListener(event, function, useCapture)


// const doSomething = () => {
//     alert("doing something")
// }
// h2.addEventListener("click", doSomething, false);

// h2.removeEventListener("click",doSomething,false); //...remove


// h2.addEventListener("click", (event)=>{   //Annonemous function
//     console.log(event.target);
//     h2.textContent = "jjjjjjjjjjj"
//     event.target.textContent = "kkkkkkkkkkk" 
// })

// h2.addEventListener("click",function (event){  
//     console.log(event.target);
//     // h2.textContent = "jjjjjjjjjjj"
//     event.target.textContent = "kkkkkkkkkkk"
// })





//=================================================

// const view= document.querySelector("#view2")
// const div = view.querySelector("div")
// const h2 = div.querySelector("h2")


//syntax.......
//.addEventListeners(event, function, useCapture)

document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState === "complete"){
        console.log("complete");
        initApp();
    }
})

// const initApp = () => {
//     const view= document.querySelector("#view2")
//     const div = view.querySelector("div")
//     const h2 = div.querySelector("h2")

//     // view.addEventListener("click", (event)=>{
//     //     view.style.backgroundColor ="black";
//     // })  // downside la irunthu upward la change aagum.

//     // div.addEventListener("click", (event)=>{
//     //     div.style.backgroundColor ="blue";
//     // })

//     // h2.addEventListener("click", (event)=>{
//     //     event.stopPropagation();  // particular section mattum change aagum.
//     //    event.target.textContent = "jeeva";
//     //    h2.style.color="black";
//     // })
//     view.addEventListener("click", (event)=>{
//         // event.stopPropagation(); // true use pannum pothu stopPropagation use panna antha section mattum thaa change aagum.
//         view.style.backgroundColor ="black";
//     },true)   //.....true potta upside la irunthu down la change aagum

//     div.addEventListener("click", (event)=>{
//         // event.stopPropagation(); // h2 section change aagathu. intha div section oda stop aagum.
//         div.style.backgroundColor ="blue";
//     },true)

//     h2.addEventListener("click", (event)=>{
//        event.target.textContent = "jeeva";
//        h2.style.color="black";
//     },true)
// }




const initApp = () => {
    const view= document.querySelector("#view2")
    const div = view.querySelector("div")
    const h2 = div.querySelector("h2")

    // view.addEventListener("click", (event)=>{
    //     event.target.style.backgroundColor ="yellow";
    // }) 

    // div.addEventListener("click", (event)=>{
    //     event.target.style.backgroundColor ="blue";
    // })

    // h2.addEventListener("click", (event)=>{
        
    //    event.target.textContent = "jeeva";
    //    h2.style.color="black";
    // }) 

    //keezha irunthu mela change aagitte pogum event.target use panna...


    // view.addEventListener("click", (event)=>{
    //     view.classList.add("purple"); //class add pannalam
    //     view.classList.remove("yellow") //class remove pannalam.
    // }) 
    view.addEventListener("click", (event)=>{
        view.classList.toggle("purple"); 
        view.classList.toggle("yellow"); //tpggle na pazhaya nelamaikku varum 
    }) 

    div.addEventListener("click", (event)=>{
        // div.classList.toggle("pink");
        div.classList.toggle("yellow");
    })

    // h2.addEventListener("click", (event)=>{
    //    h2.classList.toggle("orange"); 
    //    event.target.textContent = "jeeva";
    //    h2.style.color="black";
    // }) 


    h2.addEventListener("click", (event)=>{
        const myText = event.target.textContent;
        myText === "jeeva" ? (event.target.textContent = "jeni") : (event.target.textContent = "jeeva") ;
    }) 

    // next changes..........

    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
    });

    nav.addEventListener("mouseout", (event)=>{
        event.target.classList.remove("height100");
    });







}



