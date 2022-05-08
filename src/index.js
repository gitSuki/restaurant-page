import printMe from './print.js';

function component() {
    const element = document.createElement('div')
    element.textContent = "hi"

    return element
}

document.body.appendChild(component())
printMe()
console.log("Webpack test 2")