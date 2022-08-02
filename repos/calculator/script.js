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