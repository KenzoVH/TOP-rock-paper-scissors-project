const choices = ["rock", "scissors", "paper"];

// computerPlay => choices[Math.floor(Math.random() * choices.length)];
// Arrow function was not callable, kept in comment as a future reference

function computerPlay() {
    // Generate a random index from the choices
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    // compare the two selections, if computer wins, return player loses, if player wins, return computer loses
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let result;

    if (playerSelection === computerSelection) {
        result = "tie";
        console.log(result);
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock"
        ) {
        result = "win";
        console.log(result);
    } else {
        result = "lose";
        console.log(result);
    }
    return result;
}

function game() {
    let round = 1;
    let playerScore = 0;
    let computerScore = 0;
    let winner;
    for (round; round <= 5; round++) {
        playerSelection = prompt("Rock, paper or scissors?");
        result = playRound(playerSelection, computerPlay());
        if (result === "win") {
            playerScore++;
        } else if (result === "lose") {
            computerScore++;
        }
    }
    playerScore > computerScore ? winner = "Player" : winner = "Computer";
    console.log(`The ${winner} wins! Final score: Player: ${playerScore}; Computer: ${computerScore}`);
}

function capitalize(word) {
    // Function to capitalize words
    let firstLetter = word.toLowerCase().substring(0, 1)
    return firstLetter.toUpperCase() + word.substring(1);
}