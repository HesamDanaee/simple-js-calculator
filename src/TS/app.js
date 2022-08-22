// Functions
import { numPad, mathOperator, mathResult, resetAll, clearEntry } from './Modules/functions.js';
// Variables 
import { OPERANDS, NUMBERS, OUTPUT_DISPLAY, OPERATORS, RESULT, CLEAR, CE, EX_DISPLAY } from './Modules/vars&types.js';
// Adding numPad function to all number buttons
NUMBERS.forEach((element) => {
    element.addEventListener('click', () => {
        numPad(element);
    });
});
// Adding mathOperator function to all operator buttons
OPERATORS.forEach((element) => {
    element.addEventListener('click', () => {
        mathOperator(element.innerHTML);
    });
});
// invokes mathResult when clicked
RESULT.addEventListener('click', () => {
    mathResult();
});
// adds resetAll function to clear button
CLEAR.addEventListener('click', () => {
    resetAll();
    OUTPUT_DISPLAY.innerHTML = `${OPERANDS['firstOperand']}`;
    EX_DISPLAY.innerHTML = '';
});
// adds clearEntry button to ce button
CE.addEventListener('click', () => {
    clearEntry();
});
