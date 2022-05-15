import {content} from './buildHTML';
import restaurantExterior from './resources/寺院.png';

export default function buildHomeTab(){
    const page = document.getElementById("page")
    const oldContent = document.getElementById("content")

    const newContent = content()

    page.style.backgroundImage = `url(${restaurantExterior})`

    page.replaceChild(newContent, oldContent)
}