import './style.css';
import restaurantInterior from './resources/店内.png';

export default function buildMenuTab(){
    const page = document.getElementById("page")
    const oldContent = document.getElementById("content")

    const newContent = document.createElement('div')
    newContent.id = "content"
    
    const menutitle = document.createElement('span')
    menutitle.textContent = "UNDER CONSTRUCTION"
    menutitle.classList.add("menu-title")
    newContent.appendChild(menutitle)

    page.style.backgroundImage = `url(${restaurantInterior})`

    page.replaceChild(newContent, oldContent)
}