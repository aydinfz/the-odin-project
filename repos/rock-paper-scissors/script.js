function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)]
}

const playerSelection = prompt("Choose rock, paper or scissors").toLowerCase()

let playerScore = 0
let computerScore = 0 

function compareChoices(playerSelection){ 
    let computerSelection = getComputerChoice()

    if (playerSelection == "paper" && computerSelection =="rock" || playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    } else if (playerSelection == computerSelection){
        console.log("No one beats")
    }
    
    if (playerScore != 5 && computerScore != 5) {
        compareChoices(playerSelection)
    } else if (playerScore == 5 || computerScore == 5) {
        console.log(`player score: ${playerScore} computer score: ${computerScore}`)

    }
    
}

compareChoices(playerSelection)
 

