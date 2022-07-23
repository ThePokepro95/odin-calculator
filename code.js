let displayNumber = 0;
let numberLength = 1;
let previousNumber = null;
let operator = null;
const display = document.getElementById("screen");


document.querySelectorAll('.number').forEach(number => {
    number.addEventListener('click', () => {
        if (displayNumber === 0){
            displayNumber = number.id;
        } else if (numberLength === 9){
            return;
        } else {
            displayNumber = `${displayNumber}${number.id}`;
            numberLength = displayNumber.length;
        }
        display.textContent = displayNumber;
    });
});

document.querySelectorAll('.operator').forEach(operation => {
    operation.addEventListener('click', () => {
        if (operation.id === "clear"){
            reset();
            display.textContent = displayNumber;
        } else if (operation.id === "equals"){
            if (!previousNumber || !operator) return;
            if (operator === "/" && displayNumber === "0"){
                alert("Don't do that >:( \n\n\nResetting...");
                reset();
                return;
            }
            display.textContent = operate(operator, previousNumber, displayNumber);
        } else {
            if (!previousNumber){
                previousNumber = displayNumber;
                operator = operation.id;
                displayNumber = 0;
                numberLength = 1;
            } else {
                if (operator === "/" && displayNumber === "0"){
                    alert("Don't do that >:( \n\n\nResetting...");
                    reset();
                    return;
                }
                previousNumber = operate(operator, previousNumber, displayNumber);
                operator = operation.id;
                display.textContent = previousNumber;
                displayNumber = 0;
                numberLength = 1;
            }
        }
    });
});

//--------Operations-------------//
const add = (x, y) => (+x) + (+y);
const subtract = (x, y) => (+x) - (+y);
const multiply = (x, y) => (+x) * (+y);
const divide = (x, y) => {
    let number = (+x) / (+y);
    return number.toFixed(2);
}
const operate = (operator, x, y) => {
    switch (operator){
        case "+":
            return add(x, y);
            break;
        case "-":
            return subtract(x, y);
            break;
        case "*":
            return multiply(x, y);
            break;
        case "/":
            return divide(x, y);
            break;
    }
}
const reset = () => {
    displayNumber = 0;
    numberLength = 1;
    previousNumber = null;
    operator = null;
}