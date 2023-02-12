"use strict";

let secretNumber = Math.trunc(Math.random()*20) + 1;        // Randomize the secret number between 1 and 20
let score = 20;                                             // Initial score
let highscore = 0;                                          // Initial highscore
let gameEnded = false;                                      // Controls the game to restart

// Main message function
function displayMessage(msg){
    document.querySelector(".message").textContent = msg;
}

// When "Check" button is pressed
document.querySelector(".check").addEventListener("click", function () {

    // Verify if the game has ended
    if (!gameEnded) {
    // Gets the input value when "Check" button is pressed
    let guessValue = document.querySelector(".guess").value;

    // Compare the guessValue with the secretNumber
    // Verify if there is an input number
    if (!guessValue){
        displayMessage("Please, type a number!");
    } 

    else if(guessValue != secretNumber){
        displayMessage(guessValue > secretNumber ? "Number is too high!" : "Number is too low!");
        score--;
        document.querySelector(".score").textContent = score;
    }

    // A win happened (guessValue == secretNumber)
    else {
        // Winning animation
        document.getElementById("guessedNumber").classList.add("winner");
        document.querySelector(".message").style.color = '#08be08';

        // Shows the number and message
        document.querySelector(".number").textContent = secretNumber;
        displayMessage("Congratulations!!!");
        gameEnded = true;

        // Verify the highscore and store it
        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

    }

    // Verify if the score is lower than zero
    if(score <= 0){
        displayMessage("You lose the game! ☹");
        score = 0;
        document.querySelector(".score").textContent = score;
    }
}   else{
    // If gameEnded = true and check button has been clicked
    displayMessage("Restart with the 'Again' button!");
}
    
})

// When the Again button is pressed resets the initial conditions
document.querySelector(".again").addEventListener("click", function () {
    gameEnded = false;
    score = 20;
    document.querySelector(".score").textContent = score;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage("Start guessing...");
    document.getElementById("guessedNumber").classList.remove("winner");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").style.color = '#f0f8ff';
})
