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
    // container that includes the form where user can input name, email, and message
    const contactContainer = document.createElement('form')
    contactContainer.setAttribute("method", "post")

    contactContainer.appendChild(name())
    contactContainer.appendChild(email())
    contactContainer.appendChild(message())
    contactContainer.classList.add("contact-container")

    return contactContainer
}

function name(){
    const nameContainer = document.createElement('div')

    nameContainer.appendChild(firstName())
    nameContainer.appendChild(lastName())
    nameContainer.classList.add("name-container")

    return nameContainer
}

function firstName(){
    const nameInput = document.createElement('input')
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("name", "first_name")
    nameInput.setAttribute("placeholder", "First Name")

    return nameInput
}

function lastName(){
    const nameInput = document.createElement('input')
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("name", "last_name")
    nameInput.setAttribute("placeholder", "Last Name")

    return nameInput
}

function email(){
    const emailInput = document.createElement('input')
    emailInput.setAttribute("type", "text")
    emailInput.setAttribute("name", "email")
    emailInput.setAttribute("placeholder", "E-Mail Address")

    return emailInput
}

function message(){
    const messageInput = document.createElement('input')
    messageInput.setAttribute("type", "text")
    messageInput.setAttribute("name", "email")
    messageInput.setAttribute("placeholder", "Type your message...")

    return messageInput
}