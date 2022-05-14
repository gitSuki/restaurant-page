import './style.css';

export default function buildContactTab(){
    const page = document.getElementById("page")
    const oldContent = document.getElementById("content")

    const newContent = document.createElement('div')
    newContent.id = "content"
    newContent.appendChild(contactTitle())
    newContent.appendChild(contactContent())
    newContent.classList.add("contact-content")

    page.replaceChild(newContent, oldContent)
}

function contactTitle(){
    const contactTitle = document.createElement('span')
    contactTitle.textContent = "Contact Us!"
    contactTitle.classList.add("contact-title")

    return contactTitle
}

function contactContent(){
    const contactContainer = document.createElement('form')
    contactContainer.setAttribute("method", "post")


    contactContainer.appendChild(name())

    contactContainer.classList.add("contact-container")

    return contactContainer
}

function name(){
    const nameContainer = document.createElement('div')

    const nameInput = document.createElement('input')
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("name", "name")
    nameInput.setAttribute("placeholder", "name")
    nameContainer.appendChild(nameInput)

    return nameContainer
}