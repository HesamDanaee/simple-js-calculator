// Functions
import { numPad, mathOperator, mathResult, resetAll, clearEntry } from './Modules/functions.js';
// Variables 
import { OPERANDS, NUMBERS, OUTPUT_DISPLAY, OPERATORS, RESULT, CLEAR, CE } from './Modules/vars&types.js';
NUMBERS.forEach((element) => {
    element.addEventListener('click', () => {
        numPad(element);
    });
});
OPERATORS.forEach((element) => {
    element.addEventListener('click', () => {
        mathOperator(element.innerHTML);
    });
});
RESULT.addEventListener('click', () => {
    mathResult();
});
CLEAR.addEventListener('click', () => {
    resetAll();
    OUTPUT_DISPLAY.innerHTML = `${OPERANDS['firstOperand']}`;
});
CE.addEventListener('click', () => {
    clearEntry();
});
