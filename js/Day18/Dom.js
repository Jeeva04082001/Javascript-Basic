// <!--  -->
//DOM  
//============== 7:53 to 9:04 ====DOM (Documnet object model)================



const view1=document.getElementById("view1");
console.log(view1);


const view2= document.querySelector("#view2")
console.log(view2);



// view1.style.display ="none";

// view2.style.display = "flex";


// view1.style.display ="flex";

// view2.style.display = "flex";




const views = document.getElementsByClassName("view");
console.log(views); //HTMLCollection(2)


const sameViews = document.querySelectorAll(".view");
console.log(sameViews);  //NodeList(2)



const divs = view1.querySelectorAll("div");
console.log(divs); //NodeList(12)



const sameDivs = view1.getElementsByTagName("div")
console.log(sameDivs); //HTMLCollection(12)




const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");

console.log(evenDivs); //NodeList(6)

evenDivs[4].style.backgroundColor ="Purple";

for(i=0; i < evenDivs.length; i++){
    evenDivs[i].style.width = "150px";
    evenDivs[i].style.backgroundColor="green";
}


const navText = document.querySelector("nav h1");
console.log(navText);

navText.textContent = "Hello!";

const navBar = document.querySelector("nav");
console.log(navBar);
navBar.innerHTML = '<h1>Jeeva </h1> <p> hhhhhhhhhhhh click bell!</p>'

console.log(navBar);

// navBar.style.justifyContent = "flex-start";
// navBar.style.justifyContent = "flex-end";
navBar.style.justifyContent = "space-evenly";


// console.log(evenDivs);

// console.log(evenDivs[0]);

// console.log(evenDivs[0].parentElement);

// console.log(evenDivs[0].parentElement.children);


// console.log(evenDivs[0].parentElement.childNodes);

// console.log(evenDivs[0].parentElement.hasChildNodes());

// console.log(evenDivs[0].parentElement.lastChild);


// console.log(evenDivs[0].parentElement.lastElementChild);

// console.log(evenDivs[0].parentElement.firstChild);

// console.log(evenDivs[0].parentElement.firstElementChild);

// console.log(evenDivs[0]);
// console.log(evenDivs[0].nextSibling);

// console.log(evenDivs[0].nextElementSibling);

// console.log(evenDivs[0].nextElementSibling.nextElementSibling);

// console.log(evenDivs[0].previousSibling);
// console.log(evenDivs[0].previousElementSibling);


view1.style.display="none";
view2.style.display="flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";



// console.log(view2.lastChild);
// console.log(view2.lastElementChild);

// view2.lastElementChild.remove()


console.log(view2.lastElementChild);

while(view2.lastChild){
    view2.lastChild.remove();
}


// const newDiv = document.createElement("div");
// newDiv.textContent ="Hii";
// newDiv.style.width = "100px";
// newDiv.style.height = "100px";
// newDiv.style.margin = "10px";
// newDiv.style.backgroundColor = "yellow"
// newDiv.style.color="black"
// view2.append(newDiv);

// newDiv.style.display="flex";
// newDiv.style.justifyContent="center";
// newDiv.style.alignItems="center";



const createDiv = (parent,iter) => {

    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.backgroundColor = "yellow"
    newDiv.style.color="black"
    newDiv.style.display="flex";
    newDiv.style.justifyContent="center";
    newDiv.style.alignItems="center";
    
    parent.append(newDiv);
    
    
    
}

// createDiv(view2,9)

for(i=1; i<=12; i++){
    createDiv(view2,i)

}




