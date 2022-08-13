

function getElement(event:Element | null) {
  console.log(event)
}

function selector(element:string):Element  {
  return document.querySelector(element) as HTMLButtonElement;
}

function selectorAll(element:string) {
    return document.querySelectorAll(element) as NodeListOf<Element>
  }

export {selector,getElement,selectorAll};