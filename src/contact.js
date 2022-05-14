import './style.css';

export default function buildContactTab(){
    const page = document.getElementById("page")
    const oldContent = document.getElementById("content")

    const newContent = document.createElement('div')
    const contactTitle = document.createElement('span')
    contactTitle.textContent = "Contact Us!"
    newContent.appendChild(contactTitle)

    page.replaceChild(newContent, oldContent)
}