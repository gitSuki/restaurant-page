import buildPage from './buildHTML.js';
import buildContactTab from './contact.js';

document.body.appendChild(buildPage())

const homeTab = document.getElementById("home")
const menuTab = document.getElementById("menu")
const contactTab = document.getElementById("contact")
const tabList = [homeTab, menuTab, contactTab]

// add event listeners to each tab element that will run a function that will change 
// the HTML content
for (const item of tabList) {
    item.addEventListener("click", () => {
        if (item.textContent == "Home"){
            console.log("Home")
        }
        else if (item.textContent == "Menu"){
            console.log("Menu")
        }
        else if (item.textContent == "Contact"){
            buildContactTab()
        }
    })
}