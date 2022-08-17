// Imports
import { OPERANDS, OUTPUT_DISPLAY } from './vars&types.js';
// Exprots
export { selector, selectorAll, resetOperators, numPad, mathOperator, mathResult, resetAll, clearEntry };
// Destructured the OPERANDS var 
let { firstOperand, secondOperand, currentValue, initialVal, operation, result } = OPERANDS;
/**
 * findes a dom element and returns it
 * @param element - is selector(id,class or name in type of css) name
 * @returns a dom element or node
 */
function selector(element) {
    return document.querySelector(element);
}
function selectorAll(element) {
    return document.querySelectorAll(element);
}
// reset both operands to zero
function resetOperators() {
    firstOperand = 0;
    secondOperand = 0;
}
//  uses currentValue as default to display on output
function numDisplay() {
    OUTPUT_DISPLAY.innerHTML = `${currentValue || 0}`;
}
//  uses result parameter as argument to display it on output
function displayResult(result) {
    OUTPUT_DISPLAY.innerHTML = `${result}`;
}
// Resets all the initial variables
function resetAll() {
    firstOperand = 0;
    secondOperand = 0;
    initialVal = 0;
    currentValue = '';
    operation = '';
}
//  calculates operands based on operation
function calculation() {
    switch (operation) {
        case '*':
            displayResult(`${firstOperand * secondOperand}`);
            break;
        case '+':
            displayResult(`${firstOperand + secondOperand}`);
            break;
        case '-':
            displayResult(`${firstOperand - secondOperand}`);
            break;
        case '/':
            displayResult(`${firstOperand / secondOperand}`);
            break;
        case '%':
            displayResult(`${firstOperand % secondOperand}`);
            break;
    }
}
// sets the currentValue variable based on numpad
function numPad(element) {
    currentValue += element.innerHTML;
    // sets result value to false
    result = false;
    numDisplay();
}
/**
 * if - result is true resets invokes resetAll function
 * if -
 */
function clearEntry() {
    if (result) {
        resetAll();
        numDisplay();
    }
    else {
        currentValue = '';
        numDisplay();
    }
}
// defines firstOperand value and sets operation kind
function mathOperator(sign) {
    // Typegaurd for Typescript
    if (typeof currentValue === 'string') {
        // sets the value of first operand if it's falsy
        if (!firstOperand) {
            firstOperand = +currentValue;
            initialVal = firstOperand;
            currentValue = '';
        }
    }
    // checks if operation is defined and operation key is pressed for second time
    // and calculate the operation without pressing equal button
    if (!operation) {
        operation = `${sign}`;
    }
    if (operation && currentValue) {
        mathResult();
        operation = `${sign}`;
    }
}
function mathResult() {
    if (firstOperand && currentValue) {
        if (typeof currentValue === 'string') {
            secondOperand = +currentValue;
            initialVal = 0;
            currentValue = '';
        }
    }
    else if (firstOperand && currentValue !== 0 && initialVal !== 0) {
        if (typeof initialVal === 'number') {
            secondOperand = +initialVal;
        }
    }
    if (secondOperand) {
        if (typeof currentValue === 'string') {
            calculation();
            firstOperand = +OUTPUT_DISPLAY.innerHTML;
            secondOperand = 0;
            result = true;
        }
    }
}
