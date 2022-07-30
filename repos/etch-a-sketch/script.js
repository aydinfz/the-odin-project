const body = document.querySelector("body")

const container = document.createElement("div")
container.classList.add("container")
const text = document.createElement("h1")
text.classList.add("text")
text.textContent = "Etch a Sketch"
body.appendChild(container)
container.appendChild(text)


const board = document.createElement("div")
board.classList.add("board")
container.appendChild(board)

function createBoard(num) {
    const row = document.createElement("div")
    row.classList.add("row")
    board.appendChild(row)
    for (let i=0; i<num; i++) {
        const box = document.createElement("div")
        box.classList.add("box")
        row.appendChild(box)
    }
    
    for (let i=0; i<num-1; i++){
        board.appendChild(row.cloneNode(true))
    }
}
createBoard(20)

