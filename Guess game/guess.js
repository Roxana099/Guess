// Generate a random number between 1 and 100
let number = Math.floor(Math.random() * 100) + 1;

// Initialize the number of attempts and the message
let attempts = 0;
let message = "Guess a number between 1 and 100";

// Get the game elements
let messageElement = document.getElementById("message");
let guessInputElement = document.getElementById("guess-input");
let guessButtonElement = document.getElementById("guess-button");
let resetButtonElement = document.getElementById("reset-button");

// Disable the guess button if there is no input
guessInputElement.addEventListener("input", function () {
    guessButtonElement.disabled = guessInputElement.value === "";
});

// Handle the guess button click
guessButtonElement.addEventListener("click", function () {
    // Get the player's guess
    let guess = parseInt(guessInputElement.value);

    // Increment the number of attempts
    attempts++;

    // Check if the guess is correct
    if (guess === number) {
        message = `Congratulations, you guessed the number in ${attempts} attempts!`;
        guessInputElement.disabled = true;
        guessButtonElement.disabled = true;
    }
    // Check if the guess is too high
    else if (guess > number) {
        message = `Too high, try again (attempt ${attempts})`;
    }
    // The guess is too low
    else {
        message = `Too low, try again (attempt ${attempts})`;
    }

    // Update the message
    messageElement.textContent = message;
});

// Handle the reset button click
resetButtonElement.addEventListener("click", function () {
    // Generate a new random number
    number = Math.floor(Math.random() * 100) + 1;

    // Reset the number of attempts and the message
    attempts = 0;
    message = "Guess a number between 1 and 100";

    // Reset the game elements
    guessInputElement.value = "";
    guessInputElement.disabled = false;
    guessButtonElement.disabled = true;
    messageElement.textContent = message;
});
