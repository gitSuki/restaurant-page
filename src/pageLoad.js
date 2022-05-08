export default function buildPage() {
    const pageDiv = document.createElement('div')

    pageDiv.appendChild(buildTopBar())

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