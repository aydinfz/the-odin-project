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
    
    const boxes = document.querySelectorAll(".box")
    for (let i=0; i<boxes.length; i++){
        boxes[i].setAttribute('id', `${i+1}`)
    }
    
}
createBoard(20)  // 5-20 arası input 


const btnSection = document.createElement("div")
btnSection.classList.add("btn-section")
container.appendChild(btnSection)

const button1 = document.createElement("button")
button1.classList.add("btn-1")
button1.textContent = "Color"
btnSection.appendChild(button1)

const button2 = document.createElement("button")
button2.classList.add("btn-2")
button2.textContent = "Clear"
btnSection.appendChild(button2)


