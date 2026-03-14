let playGame = confirm("Shall we play rock, paper, or scissors?");

if (playGame) {
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3) + 1;
            let computer =
                computerChoice === 1 ? "rock" :
                computerChoice === 2 ? "paper" :
                "scissors";

            let result;
            if (playerOne === computer) {
                result = "Tie Game!";
            } else if (
                (playerOne === "rock" && computer === "scissors") ||
                (playerOne === "paper" && computer === "rock") ||
                (playerOne === "scissors" && computer === "paper")
            ) {
                result = `Player Wins!\nPlayer: ${playerOne}\nComputer: ${computer}`;
            } else {
                result = `Computer Wins!\nPlayer: ${playerOne}\nComputer: ${computer}`;
            }

            alert(result);
            let playAgain = confirm("Play Again?");
            if (playAgain) {
                location.reload();
            } else {
                alert("Ok, thanks for playing!");
            }

        } else {
            alert("You didn't enter rock, paper, or scissors.");
        }

    } else {
        alert("I guess you changed your mind. Maybe next time!");
    }
} else {
    alert("Ok, maybe next time.");
}
