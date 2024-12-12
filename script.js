//Declare Variables
let computerChoice;
let computerInsensitive;
let humanChoice;
let playerInsensitive;
let playerScore = 0;
let computerScore = 0;
const rounds = 2;

//Choosing Move
function getHumanChoice(){
    console.log("Choose either Rock, Paper or Scissors: ");
    humanChoice = prompt("Please enter your choice:");
    console.log(`Your choice: ${humanChoice}`);
}

//Random move for CPU
function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    switch (random){
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
        default:
            break;
    }
    console.log(`Computer's choice: ${computerChoice}`);
    return computerChoice;
}

//Make everything insensitive
function convertToInsensitive(){
    computerChoice = String(computerChoice);
    computerInsensitive = computerChoice.toLowerCase();
    humanChoice = String(humanChoice);
    playerInsensitive = humanChoice.toLowerCase();
    console.log(computerInsensitive, playerInsensitive);
}

//What beats what or tie
function playRound(playerInsensitive, computerInsensitive){
    if(playerInsensitive == "rock" && computerInsensitive == "rock"){
        console.log("It's a tie!");
    } else if(playerInsensitive == "rock" && computerInsensitive == "paper"){
        console.log(`You !Lose ${computerInsensitive} beats ${playerInsensitive}`);
        computerScore = computerScore + 1;
    } else if(playerInsensitive == "rock" && computerInsensitive == "scissors"){
        console.log(`You Win! ${playerInsensitive} beats ${computerInsensitive}`);
        playerScore = playerScore + 1;
    } else if(playerInsensitive == "paper" && computerInsensitive == "rock"){
        console.log(`You Win! ${playerInsensitive} beats ${computerInsensitive}`);
        playerScore = playerScore + 1;
    } else if(playerInsensitive == "paper" && computerInsensitive == "paper"){
        console.log("It's a tie!");
    } else if(playerInsensitive == "paper" && computerInsensitive == "scissors"){
        console.log(`You Lose! ${computerInsensitive} beats ${playerInsensitive}`);
        computerScore = computerScore + 1;
    } else if(playerInsensitive == "scissors" && computerInsensitive == "rock"){
        console.log(`You !Lose ${computerInsensitive} beats ${playerInsensitive}`);
        computerScore = computerScore + 1;
    } else if(playerInsensitive == "scissors" && computerInsensitive == "paper"){
        console.log(`You Win! ${playerInsensitive} beats ${computerInsensitive}`);
        playerScore = playerScore + 1;
    } else if (playerInsensitive == "scissors" && computerInsensitive == "scissors"){
        console.log("It's a tie!");
    }
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

//Full game cycle
function playGame(){
    while(playerScore < 2 && computerScore < 2){
        getHumanChoice();
        getComputerChoice();
        convertToInsensitive()
        playRound(playerInsensitive, computerInsensitive);
    }
        if(playerScore == 2){
        console.log(`You Win the Game!\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`);
    } else if (computerScore == 2){
        console.log(`You Lose the Game!\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`);
    }
}

playGame();



