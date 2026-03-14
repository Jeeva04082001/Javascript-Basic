// --------------16-07-2024-------- 5:23 to 5:45 ------


// let playGame = confirm("Shall we play rock,paper or scissor?");

// if(playGame){
//     //play
//     while(playGame) {
//         const playerChoice = prompt("please enter rock, paper or scissor.");
//         if (playerChoice || playerChoice ==="") {
//             const playerOne = playerChoice.trim().toLowerCase();
//             if (
//                 playerOne === "rock" ||
//                 playerOne === "paper" ||
//                 playerOne === "scissor"
            
//             ) {
//                 const computerChoice = Math.floor(Math.random() * 3);
//                 const rpsArray = ["rock","paper","scissor"];
//                 const computer = rpsArray[computerChoice];

//                 const result = 
//                     playerOne === computer
//                     ? "Tie game!"
//                     : playerOne === "rock" && computer === "paper"
//                     ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//                     : playerOne === "paper" && computer === "scissor"
//                     ? `playerOne : ${playerOne}\n Computer: ${computer}\n Computer wins!`
//                     : playerOne === "scissor" && computer === "rock"
//                     ? `playerOne : ${playerOne}\n Computer: ${computer}\n Computer wins!`
//                     : `playerOne : ${playerOne}\n Computer: ${computer}\n player wins!`
//                 alert(result);
//                 playGame = confirm("play again");
//                 if (!playGame) alert("ok thanks for playing.");
//                 continue;

//             } else {
//                 alert("you didn't enter rock,paper or scissor.");
//                 continue;
//             }
                
//         } else {
//             alert("I guess you changed your mind. Maybe next time.");
//             break;
//         } 
//     } 
// } else {
//     alert("ok, maybe next time")
// }


//--===========================-----------------------------

// const initGame = () => {
//     const startGame =confirm("Shall we play rock, paper or scissor?");
//     startGame ? playGame() : alert("ok, maybe next time.");
// };

// // Game flow function

// const playGame = () =>{
//     while(true){
//         let playerChoice = getPlayerChoice();
//         playerChoice = formatPlayerChoice(playerChoice);
//         if (playerChoice === "") {
//             invalidChoice();
//             continue;
//         }
//         if (!playerChoice){
//             decidedNotToPlay();
//             break;
//         }
//         playerChoice = evaluatePlayerChoice(playerChoice);
//         if (!playerChoice) {
//             invalidChoice();
//             continue;
//         }
//         const computerChoice = getComputerChoice();
//         const result = determineWinner (playerChoice,computerChoice);
//         displayResult(result);
//         if (askToPlayAgain()) {
//             continue;
//         } else {
//             thanksForPlaying();
//             break;
//         }
//     }
// };

// const getPlayerChoice = () => {
//     return prompt("please enter rock, paper or scissor.");
// }

// const formatPlayerChoice = (playerChoice) => {
//     if (playerChoice || playerChoice === "") {
//         return playerChoice.trim().toLowerCase();
//     } else {
//         return false;
//     }
// };

// const decidedNotToPlay = () => {
//     alert("I guess you changed your mind. Maybe next time.")
// }

// const evaluatePlayerChoice = (playerChoice) => {
//     if (
//         playerChoice === "rock" ||
//         playerChoice === "paper" ||
//         playerChoice === "scissor" 

//     ) {
//         return playerChoice;
//     } else {
//         return false;

//     }
// }

// const invalidChoice = () => {
//     alert("you didn't enter rock,paper or scissor.");
// };



// const getComputerChoice = () => {
//     const randomNumber = Math.floor(Math.random() * 3);
//     const rpsArray = ["rock","paper","scissor"];
//     return rpsArray[randomNumber];
// }

// const determineWinner = (player, computer) => {
//     const winner =
//        player === computer
//        ? "Tie game!"
//        : player === "rock" && computer === "paper"
//        ? `playerOne: ${player}\n Computer: ${computer}\n Computer wins!`
//        : player === "paper" && computer === "scissor"
//        ? `playerOne: ${player}\n Computer: ${computer}\n Computer wins!`
//        : player === "scissor" && computer === "rock"
//        ? `playerOne: ${player}\n Computer: ${computer}\n Computer wins!`
//        : `playerOne: ${player}\n Computer: ${computer}\n player wins!`
//     return winner   

// };

// const displayResult = (result) => {
//     alert(result);
// };

// const askToPlayAgain = () => {
//     return confirm("play Again?");
// };

// const thanksForPlaying = () => {
//     alert("ok, thanks for playing.");
// };

// initGame();


//================== 5:46 to 6:13
// --------------OBJECTS------------------
// key-value pairs in curly braces





// const myObj = {name:"jjjj"};
// console.log(myObj);

//----------------------------------

// const myObj = {name:"jjjj"};
// console.log(myObj.name);



//----------------------------------



// const myObj = {name:"jjjj"};

// const anotherObj = {
//     subscriber: true,
//     no:1000,
//     content: {
//         earn: "Js",
//         grow:"stocks"
//     },
//     subdivisions:["earn","Grow","Give"],
//     action: function(){
//         return "hello";

//     },
//     action1: function(){
//         return `Earn by Learning ${this.content.earn}`
//     }
// }
// console.log(myObj.name);
// console.log(anotherObj.subdivisions);
// console.log(anotherObj.subdivisions[1]);
// console.log(anotherObj.content);
// console.log(anotherObj.content.earn);
// console.log(anotherObj.action());
// console.log(anotherObj.action1());




//======================================================


// const vehicle ={
//     doors:2,
//     engine: function(){
//         return "hello!";
//     }
// }
// console.log(vehicle.engine())



// const car = Object.create(vehicle); //inherit vehicle function into car object
// console.log(car);
// car.wheels = 4;

// console.log(car.engine());

// console.log(car.wheels);

// console.log(car.doors);

// car.engine = function() {return "whoosh!"};
// console.log(car.engine());

// const tesla = Object.create(car);
// tesla.engine = function(){ return "shhhh!"};
// console.log(tesla.engine(),'jjjjj');



//==================================================



// const movie = {
//     actor: "kavin",
//     music: "Arr",
//     director: "Lokesh",
//     producer: "Anbu",

// }


// console.log(Object.keys(movie));
// console.log(Object.values(movie));


// for (let job in movie){
//     console.log(movie["actor"]);
//     console.log(movie[job]);
// }

// for (let job in movie) {
//     console.log(`${job}, it's ${movie[job]}`);
// }


//=================== 6:14 to 6:25  ===============================




// const movie = {
//     actor: "kavin",
//     music: "Arr",
//     director: "Lokesh",
//     producer: "Anbu",

// }


// movie.actress = "Hansika"
// console.log(Object.keys(movie));

// for ( let job in movie) {
//     console.log(`${job}, it's ${movie[job]}`);
// }


// delete movie.producer;
// console.log(Object.keys(movie));
// console.log(Object.values(movie));
// console.log(movie.actress);
// console.log(movie.hasOwnProperty("producer")); // it check true or false





//======== destructuring  the objects===========


// const movie = {
//     actor: "kavin",
//     music: "Arr",
//     director: "Lokesh",
//     producer: "Anbu",

// }
// const {music: myFavMusicDirector} = movie;

// console.log(myFavMusicDirector);


//===============================



// const movie = {
//     actor: "kavin",
//     music: "Arr",
//     director: "Lokesh",
//     producer: "Anbu",

// }
// const {music: myFavMusicDirector, director: myFavDir} = movie;

// console.log(myFavMusicDirector,'myFavMusicDirector');
// console.log(myFavDir,'myFavDir');


//===============================



// const movie = {
//     actor: "kavin",
//     music: "Arr",
//     director: "Lokesh",
//     producer: "Anbu",

// }


// const{actor,music,director,producer} = movie;
// console.log(actor);



//===============================



// const movie = {
//     actor: "kavin",
//     music: "Arr",
//     director: "Lokesh",
//     producer: "Anbu",

// }


// const{actor,music,director,producer} = movie;
// console.log(actor);

// function sings (music){return music};

// console.log(sings(movie));




//===============================

// const movie = {
//     actor: "kavin",
//     music: "Arr",
//     director: "Lokesh",
//     producer: "Anbu",

// }


//-------------

// const{actor,music,director,producer} = movie;
// console.log(actor,'actor');

// function sings ({music}){return music};

// console.log(sings(movie,'sings'));


//-------------------

// const {music} = movie
// function sings({music}){return music}
// console.log(sings(movie));




//========== ++++++++ Classes 6:25 to 6:35  ++++++++++++ ==================


// const myPizza ={
//     size: "medium",
//     crust: "original",
//     bake: function() {
//         return console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
//     }
// };

// myPizza.bake();



// class Pizza {
//     constructor(){
//         this.size="medium";
//         this.crust="original";
//     }
//     bake() {
//         return console.log(`Baking a ${this.size} ${this.crust} crust pizza`);
//     }
// }

// const anotherPizza = new Pizza();
// console.log(anotherPizza.size);









