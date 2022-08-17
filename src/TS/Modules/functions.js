// Imports
// import {operator} from './types.js';
import { OPERANDS, OUTPUT_DISPLAY } from './vars&types.js';
// Destructured the OPERANDS var 
let { firstOperand, secondOperand, currentValue, initialVal, operation, result, tempNum } = OPERANDS;
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
/**
 * resets the values of operands to zero
 */
function resetOperators() {
    firstOperand = 0;
    secondOperand = 0;
}
function numDisplay() {
    OUTPUT_DISPLAY.innerHTML = `${currentValue || 0}`;
}
function displayResult(result) {
    OUTPUT_DISPLAY.innerHTML = `${result}`;
}
function resetAll() {
    firstOperand = 0;
    secondOperand = 0;
    initialVal = 0;
    currentValue = '';
    operation = '';
}
/**
 * calculates the operation based on chosen operation and displays it
 */
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
/**
 * saves input nums in one of OPERANDS properties and display it
 * @param element - is the input element
 */
function numPad(element) {
    // Sets the value of element into currentValue
    currentValue += element.innerHTML;
    result = false;
    // typeguard for currentValue
    // update and display value of currentvalue to input
    numDisplay();
}
/**
 * act as ce button for clearing input or entry
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
function mathOperator(sign) {
    if (typeof currentValue === 'string') {
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
// Exprot functions by their name to app.ts file
export { selector, selectorAll, resetOperators, numPad, mathOperator, mathResult, resetAll, clearEntry };
