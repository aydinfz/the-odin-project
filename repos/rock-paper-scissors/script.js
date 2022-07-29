function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)]
}

const buttons = document.querySelectorAll("img")
buttons.forEach(button => {
    button.addEventListener("click", (e)=> {
        playerSelection = e.target.className
        console.log(playerSelection)
        compareChoices(playerSelection)
        console.log(roundWinner)
    })
})
let playerScore = 0
let computerScore = 0 
let roundWinner = ""

function compareChoices(playerSelection){ 
           
    let computerSelection = getComputerChoice()
    if (playerSelection == "paper" && computerSelection =="rock" || playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++
        roundWinner = `You win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++
        roundWinner = `You lose! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection == computerSelection){
        roundWinner = "It is a tie"
    }
 
    document.querySelector(".player p").textContent = playerScore
    document.querySelector(".computer p").textContent = computerScore

    if (playerScore == 5) {
        popup()
    } else if (computerScore == 5) {
        popup()
        document.querySelector("h2").textContent="You lose, try again...";    
    }
    
}

function popup() {
    let popup = document.querySelector(".popup")
    let close = document.querySelector(".close")
    popup.classList.add("active")
    close.onclick = () => {
        popup.classList.remove("active")
        playerScore = 0
        computerScore = 0
}
}