function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)]
}

function setPlayerScore(newScore) {
    document.querySelector(".player p").textContent = newScore
    playerScore = newScore
}

function setComputerScore(newScore) {
    document.querySelector(".computer p").textContent = newScore
    computerScore = newScore
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
        return
    }
 
   setPlayerScore(playerScore)
   setComputerScore(computerScore)
   console.log(playerScore)

    if (playerScore == 5) {
        popup()
        document.querySelector("h2").textContent="You win";    
        startConfetti();
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
        setPlayerScore(0)
        setComputerScore(0)
        stopConfetti()
        popup.classList.remove("active")
    }
}

