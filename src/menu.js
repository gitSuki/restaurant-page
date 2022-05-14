import './style.css';

export default function buildMenuTab(){
    const page = document.getElementById("page")
    const oldContent = document.getElementById("content")

    const newContent = document.createElement('div')
    newContent.id = "content"
    
    const menutitle = document.createElement('span')
    menutitle.textContent = "Menu"
    newContent.appendChild(menutitle)

    page.replaceChild(newContent, oldContent)
}