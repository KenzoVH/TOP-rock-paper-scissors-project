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
    let winner;
    let loser;

    if (playerSelection === computerSelection) {
        result = "tie"
        winner = capitalize(playerSelection);
        loser = capitalize(computerSelection);
        return `You ${result}, ${winner} ties with ${loser}!`
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock"
        ) {
        result = "win";
        winner = capitalize(playerSelection);
        loser = capitalize(computerSelection);
    } else {
        result = "lose";
        winner = capitalize(computerSelection);
        loser = capitalize(playerSelection);
    }
    return `You ${result}, ${winner} beats ${loser}!`
}

function capitalize(word) {
    // Function to capitalize words
    let firstLetter = word.toLowerCase().substring(0, 1)
    return firstLetter.toUpperCase() + word.substring(1);
}