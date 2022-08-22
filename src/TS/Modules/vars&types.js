export { NUMBERS, OPERANDS, OUTPUT_DISPLAY, OPERATORS, RESULT, CLEAR, CE, EX_DISPLAY };
import { selector, selectorAll } from "./functions.js";
// Variables
// Operands to be used as math function arguments
const OPERANDS = {
    firstOperand: 0,
    secondOperand: 0,
    currentValue: '',
    initialVal: 0,
    operation: '',
    result: false
};
// Buttons to be used for math operations
const NUMBERS = selectorAll('.num');
const OPERATORS = selectorAll('.operator');
const RESULT = selector('#equal');
const CLEAR = selector('.data-c');
const CE = selector('.data-ce');
const OUTPUT_DISPLAY = selector('.display h2');
const EX_DISPLAY = selector('.display h4');
