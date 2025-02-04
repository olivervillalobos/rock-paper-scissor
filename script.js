//Declare Variables
let computerChoice;
let computerInsensitive;
let humanChoice;
let playerInsensitive;
let playerScore = 0;
let computerScore = 0;
const rounds = 5;

//Choosing Move
function getHumanChoice(ele){
    humanChoice = ele.innerText;
    console.log(humanChoice);
}
// Add event listeners instead of inline onclick attributes
document.querySelector("#rock").addEventListener("click", function() {
    getHumanChoice(this);
    playGame();
});

document.querySelector("#paper").addEventListener("click", function() {
    getHumanChoice(this);
    playGame();
});

document.querySelector("#scissors").addEventListener("click", function() {
    getHumanChoice(this);
    playGame();
});

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
        document.querySelector("#result").innerText = "It's a tie!";
    } else if(playerInsensitive == "rock" && computerInsensitive == "paper"){
        console.log(`You !Lose ${computerInsensitive} beats ${playerInsensitive}`);
        document.querySelector("#result").innerText = `You !Lose ${computerInsensitive} beats ${playerInsensitive}`;
        computerScore = computerScore + 1;
    } else if(playerInsensitive == "rock" && computerInsensitive == "scissors"){
        console.log(`You Win! ${playerInsensitive} beats ${computerInsensitive}`);
        document.querySelector("#result").innerText = `You Win! ${playerInsensitive} beats ${computerInsensitive}`;
        playerScore = playerScore + 1;
    } else if(playerInsensitive == "paper" && computerInsensitive == "rock"){
        console.log(`You Win! ${playerInsensitive} beats ${computerInsensitive}`);
        document.querySelector("#result").innerText = `You Win! ${playerInsensitive} beats ${computerInsensitive}`;
        playerScore = playerScore + 1;
    } else if(playerInsensitive == "paper" && computerInsensitive == "paper"){
        console.log("It's a tie!");
        document.querySelector("#result").innerText = "It's a tie!";
    } else if(playerInsensitive == "paper" && computerInsensitive == "scissors"){
        console.log(`You Lose! ${computerInsensitive} beats ${playerInsensitive}`);
        document.querySelector("#result").innerText = `You Lose! ${computerInsensitive} beats ${playerInsensitive}`;
        computerScore = computerScore + 1;
    } else if(playerInsensitive == "scissors" && computerInsensitive == "rock"){
        console.log(`You !Lose ${computerInsensitive} beats ${playerInsensitive}`);
        document.querySelector("#result").innerText = `You !Lose ${computerInsensitive} beats ${playerInsensitive}`;
        computerScore = computerScore + 1;
    } else if(playerInsensitive == "scissors" && computerInsensitive == "paper"){
        console.log(`You Win! ${playerInsensitive} beats ${computerInsensitive}`);
        document.querySelector("#result").innerText = `You Win! ${playerInsensitive} beats ${computerInsensitive}`;
        playerScore = playerScore + 1;
    } else if (playerInsensitive == "scissors" && computerInsensitive == "scissors"){
        console.log("It's a tie!");
        document.querySelector("#result").innerText = "It's a tie!";
    }
    console.log(`Player Score: ${playerScore}`);
    document.querySelector("#humanscore").innerText = `Player Score: ${playerScore}`;
    document.querySelector("#computerscore").innerText = `Computer Score: ${computerScore}`;
    console.log(`Computer Score: ${computerScore}`);
}

//Full game cycle
function playGame(){
    getComputerChoice();
    convertToInsensitive();
    playRound(playerInsensitive, computerInsensitive);
    winLose();
}

function winLose(){
    if(playerScore == rounds){
        console.log(`You Win the Game!\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`);
        document.querySelector("#result").innerText = `You Win the Game!\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`;
        document.querySelector("#rock").disabled = true;
        document.querySelector("#paper").disabled = true;
        document.querySelector("#scissors").disabled = true;
        document.querySelector("#reset").disabled = false;
    } else if (computerScore == rounds){
        console.log(`You Lose the Game!\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`);
        document.querySelector("#result").innerText = `You Lose the Game!\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`;
        document.querySelector("#rock").disabled = true;
        document.querySelector("#paper").disabled = true;
        document.querySelector("#scissors").disabled = true;
        document.querySelector("#reset").disabled = false;
    }
}

function reset(){
    computerChoice = ""
    computerInsensitive = "";
    humanChoice = "";
    playerInsensitive = "";
    playerScore = 0;
    computerScore = 0;
    document.querySelector("#humanscore").innerText = "";
    document.querySelector("#computerscore").innerText = "";
    document.querySelector("#result").innerText = "";
    document.querySelector("#rock").disabled = false;
    document.querySelector("#paper").disabled = false;
    document.querySelector("#scissors").disabled = false;
    document.querySelector("#reset").disabled = true;
}           

// Add event listeners instead of inline onclick attributes
document.querySelector("#reset").addEventListener("click", reset);
