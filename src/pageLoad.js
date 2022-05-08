export default function buildPage(){
    const pageDiv = document.createElement('div')

    pageDiv.appendChild(buildTopBar())
    pageDiv.appendChild(buildNav())

    return pageDiv
}

function buildTopBar(){
    const topBar = document.createElement('div')

    const topContainer = document.createElement('div')
    topBar.appendChild(topContainer)

    const phoneNumber = document.createElement('span')
    phoneNumber.textContent = "Phone Number"
    topContainer.appendChild(phoneNumber)

    const emailContainer = document.createElement('div')
    topContainer.appendChild(emailContainer)

    const eMailIcon = document.createElement('div')
    eMailIcon.textContent = "Icon"
    emailContainer.appendChild(eMailIcon)

    const eMailAddress = document.createElement('span')
    eMailAddress.textContent = "E-Mail"
    emailContainer.appendChild(eMailAddress)

    const socialMediaContainer = document.createElement('div')
    topContainer.appendChild(socialMediaContainer)

    const socialMedia = document.createElement('div')
    socialMedia.textContent = "Icon"
    emailContainer.appendChild(socialMedia)
    return topBar
}

function buildNav(){
    const navBar = document.createElement('div')

    const logo = document.createElement('div')
    logo.textContent = "Logo"
    navBar.appendChild(logo)

    const tabContainer = document.createElement('div')
    navBar.appendChild(tabContainer)

    const home = document.createElement('span')
    home.textContent = "Home"
    tabContainer.appendChild(home)

    const menu = document.createElement('span')
    menu.textContent = "Menu"
    tabContainer.appendChild(menu)

    const contact = document.createElement('span')
    contact.textContent = "Contact"
    tabContainer.appendChild(contact)

    return navBar
}