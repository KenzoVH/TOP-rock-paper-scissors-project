var choices = ["Rock", "Paper", "Scissors"];

// computerPlay => choices[Math.floor(Math.random() * choices.length)];
// Arrow function was not callable, kept in comment as a future reference

function computerPlay() {
    // Generate a random index from the choices, return this
    return choices[Math.floor(Math.random() * choices.length)];
}

