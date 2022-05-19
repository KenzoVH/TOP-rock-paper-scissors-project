// Declaring all constants such as choice array, scores and DOM Nodes for readability and reuse across functions
const choices = ["rock", "scissors", "paper"];
let playerScore = 0;
let computerScore = 0;
let ties = 0;
const results = document.querySelector('#results');
const scoreHeader = document.querySelector('#score');
const buttons = document.querySelectorAll('#btn');

// Function to generate a random choice for the computer
function computerPlay() {
    // Generate a random index from the choices
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play one round
function playRound(playerSelection, computerSelection) {
    // compare the two selections, if computer wins, return player loses, if player wins, return computer loses
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "tie";
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock"
        ) {
        return "win";
    } else {
        return "lose";
    }
}

// Logging results and score 
function logResult(result, playerSelection, computerSelection) {
    let paragraph = document.createElement('p');
    let text = `You ${result}! Player chose ${playerSelection}, the computer chose ${computerSelection}.`;
    paragraph.textContent = text;
    results.appendChild(paragraph);
}

function updateScore() {
    let scoreFormat = `Player: ${playerScore} | Computer: ${computerScore} | Ties: ${ties}`
    scoreHeader.textContent = `Score: ${scoreFormat}`
}

// Adding event listeners for buttons:
buttons.forEach(button => {
    button.addEventListener('click', game);
});

// Function to be called when player selects their choice, plays a round and checks if there is a winner
function game(e) {
    let computerSelection = computerPlay();
    // Changed the way the playerchoice is found, since element is returned in function, the data is pulled from the scrElement option
    let playerSelection = e.srcElement.dataset.key;
    let result = playRound(playerSelection, computerSelection);
    // Adds a point to the score of the winner
    if(result === "win") {
        playerScore++;
        console.log(playerScore);
    } else if (result === "lose") {
        computerScore++;
        console.log(computerScore);
    } else {
        ties++;
    }

    // Log the results and update score prior to checking for winner
    logResult(result, playerSelection, computerSelection);
    updateScore();

    // Checks if there is a winner that has reached 5 points
    // Added timeout in order to prevent alert superceding updateScore()
    setTimeout(function () { 
        if(playerScore === 5) {
            alert("The player has won! Congratulations!");
            resetGame();
        } else if (computerScore === 5) {
            alert("The computer has won! Try again!");
            resetGame();
        }
    }, 1);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    scoreHeader.textContent = "";
    while (results.lastChild != scoreHeader) {
        results.removeChild(results.lastChild);
    }
}