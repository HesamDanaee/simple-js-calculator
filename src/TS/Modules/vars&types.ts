export {operator,Operands};
export {NUMBERS,OPERANDS,OUTPUT_DISPLAY,OPERATORS,RESULT,CLEAR,CE};
import { selector, selectorAll } from "./functions.js";
// Types
// Math operation functions type
type operator = (num1:number,num2:number) => number;

interface Operands<N>  {
    firstOperand:N;
    secondOperand:N;
    currentValue?:N | string;
    initialVal?:N | string;
    operation?: string,
    result?:boolean,
}

// Variables

// Operands to be used as math function arguments

const OPERANDS : Operands<number> = {
     firstOperand:0,
     secondOperand:0,
     currentValue:'',
     initialVal:0,
     operation:'',
     result: false
}

// Buttons to be used for math operations
const NUMBERS = selectorAll('.num');
const OPERATORS = selectorAll('.operator');
const RESULT = selector('#equal');
const CLEAR = selector('.data-c');
const CE = selector('.data-ce');

const OUTPUT_DISPLAY = selector('.display h2');