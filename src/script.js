"use strict";

let secretNumber = Math.trunc(Math.random()*20) + 1;        // Randomize the secret number between 1 and 20
let score = 20;                                             // Initial score
let highscore = 0;                                          // Initial highscore
let gameEnded = false;                                      // Controls the game to restart

// When "Check" button is pressed
document.querySelector(".check").addEventListener("click", function () {

    // Verify if the game has ended
    if (!gameEnded) {
    // Gets the input value when "Check" button is pressed
    let guessValue = document.querySelector(".guess").value;

    // Compare the guessValue with the secretNumber
    // Verify if there is an input number
    if (!guessValue){
        document.querySelector(".message").textContent = "Please, type a number!";
    } 
    // If the number is higher, indicates and decrease 1 in the score
    else if(guessValue > secretNumber){
        document.querySelector(".message").textContent = "Number is too high!";
        score--;
        document.querySelector(".score").textContent = score;
    }
    // If the number is lower, indicates and decrease 1 in the score
    else if(guessValue < secretNumber){
        document.querySelector(".message").textContent = "Number is too low!";
        score--;
        document.querySelector(".score").textContent = score;
    } 
    // A win happened
    else if(guessValue == secretNumber){

        // Winning animation
        document.getElementById("guessedNumber").classList.add("winner");
        document.querySelector(".message").style.color = '#08be08';

        // Shows the number and message
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".message").textContent = "Congratulations!!!";
        gameEnded = true;

        // Verify the highscore and store it
        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

    }

    // Verify if the score is lower than zero
    if(score <= 0){
        document.querySelector(".message").textContent = "You lose the game! ☹";
        score = 0;
        document.querySelector(".score").textContent = score;
    }
}   else{
    // If gameEnded = true and check button has been clicked
    document.querySelector(".message").textContent = "Restart with the 'Again' button!";
}
    
})

// When the Again button is pressed resets the initial conditions

document.querySelector(".again").addEventListener("click", function () {
    gameEnded = false;
    score = 20;
    document.querySelector(".score").textContent = score;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.getElementById("guessedNumber").classList.remove("winner");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").style.color = '#f0f8ff';
})
