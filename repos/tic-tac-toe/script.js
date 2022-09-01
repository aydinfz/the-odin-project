let currentPlayer = "X"
let gameState_X = []
let gameState_O = []

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


function handleCellPlayed() {

}
function handlePlayerChange() {

}
function handleResultValidation() {

}



function handleCellClick(e) {
    const clickedCell_id = e.target.dataset.id
    let clickedBox = document.querySelector(`[data-id="${clickedCell_id}"]`)
    clickedBox.classList.add("x")
    //console.log(e.target.dataset.id)
    //console.log(e.target.getAttribute("data-id"))
   /*  console.log(clickedBox)
    gameState_X.includes(clickedCell_id) ? "" : gameState_X.push(clickedCell_id)
    console.log(gameState_X) */
    gameState_X.push(clickedCell_id)
    console.log(clickedBox)
    console.log(gameState_X)
}
function handleRestartGame() {

}