let displayNumber = 0;
let numberLength = 1;
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
            console.log(numberLength);
        }
        display.textContent = displayNumber;
    });
});

//--------Functions-------------//


//--------Operations-------------//
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
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

/*--------Tests-------------
console.log(add(2, 59));
console.log(add(0, 41));
console.log(add(-5, 26));
console.log(subtract(2, 59));
console.log(subtract(0, 41));
console.log(subtract(-5, 26));
console.log(multiply(2, 59));
console.log(multiply(0, 41));
console.log(multiply(-5, 26));
console.log(divide(4, 2));
console.log(divide(2, 4));
console.log(divide(4, 0));
*/