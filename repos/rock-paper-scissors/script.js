function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)]
}

const playerSelection = "rock" //prompt("durum") // user input .toLowerCase()
const computerSelection = getComputerChoice()

let playerScore = 0
let computerScore = 0 

function compareChoices(playerSelection, computerSelection){ 
    if (playerSelection == "paper" && computerSelection =="rock") {
        playerScore++
        return "You win! Paper beats Rock"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++
        return "You lose! Paper beats Rock"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++
        return "You lose! Rock beats Scissors"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++
        return "You win! Rock beats Scissors"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++
        return "You lose! Scissors beats Paper"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++
        return "You win! Scissors beats Paper"
    } else {
        return "No one beats"
    }
}




/* 


function game(){
    for(let i=0; i<5; i++) {

        return getComputerChoice(i)
    }
    
}

console.log(game())
console.log(compareChoices(playerSelection, game()))

*/