function computerPlay(){
    options=["Rock","Paper","Scissors"];
    let random = Math.floor(Math.random()*3);
    return options[random];
}

function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    if(playerSelection===computerSelection){
        return "Its a Tie!,Try again";
    }
    else if(playerSelection==="rock" && computerSelection==="paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection==="rock" && computerSelection==="scissors"){
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection==="paper" && computerSelection==="rock"){
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection==="paper" && computerSelection==="scissors"){
        return "You Lose! Scissors beats Paper";
    }
    else if(playerSelection==="scissors" && computerSelection==="rock"){
        return "You Lose! Rock beats Scissors";
    }
    else if(playerSelection==="scissors" && computerSelection==="paper"){
        return "You Win! Scissors beats Paper";
    }
}

function reset(){
    computerPoints=0;
    playerPoints=0;
    results.textContent="";
    winner.textContent="";
    score.textContent="";
}

function game(playerSelection){
        const computerSelection = computerPlay();
        const roundResult=playRound(playerSelection, computerSelection);
        results.textContent=roundResult;
        if(roundResult.includes("Win")){
            playerPoints++;
        }
        else if(roundResult.includes("Lose")){
            computerPoints++;
        }
        score.textContent=`Player: ${playerPoints} , Computer:${computerPoints}`;
        if(computerPoints==5){
            winner.textContent="You Lose!";
        }
        else if(playerPoints==5){
            winner.textContent="You Win!";
        }
}

let computerPoints=0,playerPoints=0;

let score = document.getElementById("score");
let results = document.getElementById("results");
let winner = document.getElementById("winner");

const rockBtn = document.getElementById("Rock");
const paperBtn = document.getElementById("Paper");
const scissorsBtn = document.getElementById("Scissors"); 
const resetBtn = document.getElementById("reset"); 	

rockBtn.addEventListener('click',()=>game("rock"));
paperBtn.addEventListener('click',()=>game("paper"));
scissorsBtn.addEventListener('click',()=>game("scissors"));
resetBtn.addEventListener('click',()=>reset());