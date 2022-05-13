import './style.css';
import logoFile from './Gokumiya.png';
import instagramIcon from './instagram.svg';
import facebookIcon from './facebook.svg';
import twitterIcon from './twitter.svg';
import googleMapsIcon from './maps.svg';


export default function buildPage(){
    const pageDiv = document.createElement('div')
    pageDiv.appendChild(buildTopBar())
    pageDiv.appendChild(buildNav())
    pageDiv.appendChild(buildContent())
    pageDiv.appendChild(buildFooter())

    return pageDiv
}

function buildTopBar(){
    const topBar = document.createElement('div')

    const phoneNumber = document.createElement('span')
    phoneNumber.textContent = "Phone Number"
    topBar.appendChild(phoneNumber)

    const emailContainer = document.createElement('div')
    topBar.appendChild(emailContainer)

    const eMailIcon = document.createElement('div')
    eMailIcon.textContent = "Icon"
    emailContainer.appendChild(eMailIcon)

    const eMailAddress = document.createElement('span')
    eMailAddress.textContent = "E-Mail"
    emailContainer.appendChild(eMailAddress)

    topBar.appendChild(socialMediaLinks())

    topBar.classList.add("header")

    return topBar
}

function socialMediaLinks(){
    const socialMediaContainer = document.createElement('div')
    
    const instagram = new Image()
    instagram.src = instagramIcon
    socialMediaContainer.appendChild(instagram)

    const facebook = new Image()
    facebook.src = facebookIcon
    socialMediaContainer.appendChild(facebook)

    const twitter = new Image()
    twitter.src = twitterIcon
    socialMediaContainer.appendChild(twitter)

    const googleMaps = new Image()
    googleMaps.src = googleMapsIcon
    socialMediaContainer.appendChild(googleMaps)

    return socialMediaContainer
}

function buildNav(){
    const navBar = document.createElement('div')

    const logo = new Image()
    logo.src = logoFile
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

function buildContent(){
    const content = document.createElement('div')

    content.appendChild(buildTitle())

    const description = document.createElement('p')
    description.textContent = "Resturant Description"
    content.appendChild(description)

    const menuLink = document.createElement('button')
    menuLink.textContent = "Menu"
    content.appendChild(menuLink)

    return content
}

function buildTitle(){
    const content = document.createElement('div')

    const cursiveTitle = document.createElement('span')
    cursiveTitle.textContent = "Welcome to,"
    content.appendChild(cursiveTitle)

    const romajiTitle = document.createElement('span')
    romajiTitle.textContent = "Gokumiya Izukaya"
    content.appendChild(romajiTitle)

    const kanjiTitle = document.createElement('span')
    kanjiTitle.textContent = "極味屋居酒屋" //gokumiya izukaya
    content.appendChild(kanjiTitle)

    const separator = document.createElement('hr')
    content.appendChild(separator)

    return content
}

function buildFooter(){
    const footer = document.createElement('div')

    const footerContainer = document.createElement('div')
    footer.appendChild(footerContainer)

    const copyright = document.createElement('span')
    copyright.textContent = "Copyright"
    footerContainer.appendChild(copyright)

    const socialMediaContainer = document.createElement('div')
    footerContainer.appendChild(socialMediaContainer)

    const socialMedia = document.createElement('div')
    socialMedia.textContent = "Icon"
    socialMediaContainer.appendChild(socialMedia)

    return footer
}