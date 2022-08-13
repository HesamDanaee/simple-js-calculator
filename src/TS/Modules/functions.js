function getElement(event) {
    console.log(event);
}
function selector(element) {
    return document.querySelector(element);
}
function selectorAll(element) {
    return document.querySelectorAll(element);
}
export { selector, getElement, selectorAll };
