import buildPage from './buildHTML.js';
import buildHomeTab from './home.js';
import buildMenuTab from './menu.js';
import buildContactTab from './contact.js';

document.body.appendChild(buildPage())

let contactLink = document.getElementById('contact-link')
const homeTab = document.getElementById("home")
const menuTab = document.getElementById("menu")
const contactTab = document.getElementById("contact")
const tabList = [homeTab, menuTab, contactTab]

// add event listeners to each tab element that will run a function that will change 
// the HTML content
for (const item of tabList) {
    item.addEventListener("click", () => {
        if (item.textContent == "Home"){
            buildHomeTab()
            // adds a new event listener to the contact button when the home tab
            // is refreshed
            contactLink = document.getElementById('contact-link')
            contactLink.addEventListener('click', () => buildContactTab())
        }
        else if (item.textContent == "Menu"){
            buildMenuTab()
        }
        else if (item.textContent == "Contact"){
            buildContactTab()
        }
    })
}

contactLink.addEventListener('click', () => buildContactTab())