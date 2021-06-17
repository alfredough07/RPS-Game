//Score for the player and computer
let playerScore=0;
let computerScore=0;



//Computer Play logic
const options=["rock","paper","scissors"];
const computerSelection=computerPlay();
function computerPlay(){
    return options[Math.floor(Math.random()*3)]
};



//Play a game that takes in players choice as a argument
function playGame(playerSelection){
    const computerSelection=computerPlay();
    if (playerSelection == computerSelection) {
        return "It's a tie!";
      } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
      ) {
          playerScore++
        return "Player 1 wins !";
      } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
      ) {
          computerScore++
        return "Computer wins!";
      }
    }



//Event listeners when a button is clickes
const rock=document.querySelector("#rock")
const paper=document.querySelector("#paper")
const scissors=document.querySelector("#scissors")

// Checks who the winner of 5 rounds is
let winner=""
function declareWinner(){
    if (computerScore==5){
        winner="computer"
        alert(winner+"has won")
    
    }
    else if(playerScore==5){
        winner="player"
        alert(winner+"has won")
        
    }
}

// Player uses choice by clicking a button
rock.addEventListener("click",function(){
    declareWinner();
    let result=playGame("rock");
    console.log(playerScore,computerScore,result);
    document.querySelector(".yourScore").textContent=`Your score is ${playerScore}`
    document.querySelector(".computerScore").textContent=`Computer score is ${computerScore}`

})

paper.addEventListener("click",function(){
    declareWinner();

    let result=playGame("paper")
    document.querySelector(".yourScore").textContent=`Your score is ${playerScore}`
    document.querySelector(".computerScore").textContent=`Computer score is ${computerScore}`

})

scissors.addEventListener("click",function(){
    declareWinner();

    let result=playGame("scissors")
    console.log(playerScore,computerScore,result)
    document.querySelector(".yourScore").textContent=`Your score is ${playerScore}`
    document.querySelector(".computerScore").textContent=`Computer score is ${computerScore}`


})