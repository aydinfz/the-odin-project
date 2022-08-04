function sum (a, b) {
    return a + b
}

function substract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}

function operate (num1, operator, num2){
    switch (operator) {
        case "+" :
            return sum(num1, num2);
        case "-" :
            return substract(num1, num2)
        case "*":
            return multiply(num1, num2)
        case "/":
            return divide(num1, num2)
    }
}

console.log(operate(3, "*", 5))

let bodyButtons = document.querySelectorAll(".body-buttons button")
bodyButtons.forEach(button => button.addEventListener("click", showText))


let screen = document.querySelector(".screen")
let operation = []
let firstNum;
let secondNum;
let displayedText;
let index;
function showText(e) {
    operation += e.target.innerText
    screen.innerText = operation 
    let displayedText = screen.innerText
    console.log(getIndexOfOperator(displayedText))

}


function getIndexOfOperator (text) {
    let indexOfOp = (/\+|-|x|÷/gm).exec(text)
    if (indexOfOp != null) {
        index = indexOfOp.index
    }
    return index     
}

