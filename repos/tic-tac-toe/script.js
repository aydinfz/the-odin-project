const player_X_class = "X"
const player_O_class = "O"
let isPlayer_X_turn = true
let gameState_X = []
let gameState_O = [].map(Number)

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;


const board = document.querySelector('.board');
function createBoard(numBox){
    board.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${numBox}, 1fr)`;
    for(let i = 0;i < numBox*numBox;i++){
        const square = document.createElement('div');
        square.classList.add('box');
        square.setAttribute("data-id", i+1)
        board.appendChild(square); 
    }
}
createBoard(3);


let boxes = document.querySelectorAll(".box")
boxes.forEach(el => {
    el.addEventListener("click", handleCellClick, {once : true})
})



function handleCellClick(e) {
    const clickedCell_id = e.target.dataset.id
    let clickedBox = document.querySelector(`[data-id="${clickedCell_id}"]`) 
    if (isPlayer_X_turn) {
        clickedBox.classList.add("x")
        gameState_X.push(clickedCell_id)
        changeTurn()
    } else {
        clickedBox.classList.add("o")
        gameState_O.push(clickedCell_id)
        changeTurn()
    } 
    
    console.log(clickedBox)
    console.log(gameState_X.map(Number))
    console.log(gameState_O)
}

function changeTurn() {
    isPlayer_X_turn = !isPlayer_X_turn
}


function handleRestartGame() {

}

const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]


function checkWinner(playerArray) {
    return WINNING_COMBINATIONS.forEach(combo => {
        return combo == playerArray
    })
} 

console.log(checkWinner(player_X_class))