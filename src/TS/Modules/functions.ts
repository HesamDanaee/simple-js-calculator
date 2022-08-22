// Imports
import {OPERANDS,OUTPUT_DISPLAY,EX_DISPLAY} from './vars&types.js'

// Exprots
export {selector,selectorAll,resetOperators,numPad,mathOperator,mathResult,resetAll,clearEntry};

// Destructured the OPERANDS var 
 let {firstOperand,secondOperand,currentValue,operation,result} = OPERANDS;

/**
 * findes a dom element and returns it
 * @param element - is selector(id,class or name in type of css) name
 * @returns a dom element or node
 */

function selector(element:string):Element  {
  return document.querySelector(element) as HTMLElement;
}

function selectorAll(element:string) {
    return document.querySelectorAll(element) as NodeListOf<Element>
  }

// reset both operands to zero
 function resetOperators():void {
    firstOperand = 0;
    secondOperand = 0;
 }

//  uses currentValue as default to display on output
 function numDisplay():void {
   OUTPUT_DISPLAY.innerHTML = `${currentValue || 0}`;
 }

 function opDisplay(ex1:number,ex2?:number,operator?:string):void {
  EX_DISPLAY.innerHTML = `${ex1}  ${operator || ''} ${ex2 || ''}`;
  if(result && secondOperand) {
    EX_DISPLAY.innerHTML += ' =';
  }
 }

//  uses result parameter as argument to display it on output
 function displayResult(result:string):void {
  OUTPUT_DISPLAY.innerHTML = `${Number(result).toFixed(10)}`
 }

// Resets all the initial variables
 function resetAll() {
  firstOperand = 0;
  secondOperand = 0;
  currentValue = '';  
  operation = '';
 }

//  calculates operands based on operation
 function calculation() {
  switch(operation) {
    case '*' : displayResult(`${firstOperand * secondOperand}`); break;
    case '+' : displayResult(`${firstOperand + secondOperand}`); break;
    case '-' : displayResult(`${firstOperand - secondOperand}`); break;
    case '/' : displayResult(`${firstOperand / secondOperand}`); break;
    case '%' : displayResult(`${firstOperand % secondOperand}`); break;
  }
 }

// sets the currentValue variable based on numpad
function numPad(element:Element) {
  if(result) {
    EX_DISPLAY.innerHTML = `${currentValue}`;
   }
  currentValue += element.innerHTML;
  // sets result value to false
  result = false;
  numDisplay();
}

/**
 * if - result is true resets invokes resetAll function
 * else - just resets the currentValue
 */
function clearEntry() { 
   if(result) { 
    numDisplay();
   } else {
    currentValue = '';
    numDisplay();
   }
}

// defines firstOperand value and sets operation kind
function mathOperator(sign:string) {
  // set result value to false and clears the expression output
  if(result) {
    EX_DISPLAY.innerHTML = '';
    result = false;
  }

  // Typegaurd for Typescript
if(typeof currentValue === 'string') {
  // sets the value of first operand if it's falsy
  if(!firstOperand) {
    firstOperand = +currentValue;
    currentValue = '';
  } 
}
  // set operation sign if undefined
  if(!operation) {
    operation = `${sign}`;
  }
  // calculate the result if operation and currentVlue are true
  if(operation && currentValue) {
    mathResult();
  }
  // change the operation sign
  if(operation) {
    operation = `${sign}`;
  }

  opDisplay(firstOperand,secondOperand,operation);
}

// sets the value of second operand and calculates the result
function mathResult() {   
  // if firstOperand and currentValue are true set the secondOperand and clear the currentVlue
  if(firstOperand || firstOperand >= 0 && currentValue) {
    if(typeof currentValue === 'string') {
      secondOperand = +currentValue;
      currentValue = '';
    }
  }
  // if upper condition is true and secondOperand is assigned
  //calculate the result 
   if(secondOperand) {
    if(typeof currentValue === 'string') {
      calculation();
      result = true;
      opDisplay(firstOperand,secondOperand,operation);
      firstOperand = +OUTPUT_DISPLAY.innerHTML;
      secondOperand = 0;      
    }
   }
}

