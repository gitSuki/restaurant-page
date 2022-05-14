export default function buildHomeTab(){
    const page = document.getElementById("page")
    const oldContent = document.getElementById("content")

    const newContent = content()
    page.replaceChild(newContent, oldContent)
}