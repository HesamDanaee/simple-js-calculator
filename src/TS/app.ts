import {selector,getElement,selectorAll} from './Modules/functions.js';



const BTNS = selectorAll('.btn') ;






BTNS.forEach((element)=> {
   element.addEventListener('click',(event: Event)=> {
        if(element.classList.contains('data-5')) {
            console.log(element);
        }
    });
});