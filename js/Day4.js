//...............Switch Statement syntax ..............



// switch (expressions or values){
//     case choice1:
//         //run code;
//         break;
//     case choice2:
//     //run different code;
//     break;
//     default;
//     //run different code;

// }


//==================================================

switch ("2") {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log("no match");

}



switch (2) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log("no match");

}


switch (Math.floor(Math.random()*4)) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log("no match");

}


let player = "rock";
let computer = "scissor";

switch(player) {
    case computer:
        console.log("tie!");
        break;
    case "rock":
        if(computer === "scissor"){
            console.log("player win");
        } else{
        console.log("computer win")
        }  
        break;
        
     default:
        console.log("No Tie!");   
}




//===========================================================

//======================== Ternary operator ===================================





let subscriber = "Subscribed";
let response = subscriber ? "Welcome!" : "kindly subscribe";
console.log(response);





let subscriber1;
let response1 = subscriber1 ? "Welcome!" : "kindly subscribe";
console.log(response1);




let testscore = 59;
let grade = testscore > 89 ? "A" 
: testscore > 79 ? "B" 
: testscore > 69 ? "C"
: "D";
console.log(grade);




let player1 = "scissor";
let computer1 = "paper";
let result = player1 === computer1 ? "Tie!"
: player1 === "rock" ? computer1 === "scissor" ? "player win" : "Computer win"
:  "no tie!";
console.log(result) // task completed!!!!!!!!!!!!!!!



let play = "paper";
let comp = "scissor";
let res = 
    play === computer
    ? "Tie!"
    : play === "rock" && comp === "paper"
    ? "computer win"
    : play === "paper" && comp === "rock"
    ? "player win"
    : play === "paper" && comp === "scissor"
    ? "computer win"
    : play === "scissor" && comp === "rock"
    ? "computer win"
    : "player win";
console.log(res);    


// uncomment the below code and run it was only practiced line by line



// let vari = alert("hi subscriber");
// console.log(vari);


// let var2 = confirm("hi subscriber");
// console.log(var2);

// let var3 = confirm("Ok === True\n Cancel === False");
// console.log(var3);

// let var3 = prompt("Ok === True\n Cancel === False");
// console.log(var3);


// let var3 = prompt("Enter your Name");
// console.log(var3);



// let var3 = prompt("Enter your Name");
// console.log(var3 ?? "you didn't enter your name!");



// let my = prompt("Enter your Name");
// console.log(my ?? "you didn't enter your name!");
// console.log(typeof my)


// let my = prompt("Enter your Name");
// if (my.length)
//  {console.log(my ?? "you didn't enter your name!");
// }
// else {
//     console.log("you didn't enter your name!");
// }




// let my = prompt("Enter your Name");
// if (my)
//  {console.log(my ?? "you didn't enter your name!");
// }
// else {
//     console.log("you didn't enter your name!");
// }




// let my = prompt("Enter your Name");
// if (my)
//  {console.log(my ?? "you didn't enter your name!");
// }
// else {
//     console.log("you didn't enter your name!");
// }
// console.log(my.length);



let my = prompt("Enter your Name");
if (my)
 {console.log(my ?? "you didn't enter your name!");
}
else {
    console.log("you didn't enter your name!");
}
console.log(my.trim().length);














