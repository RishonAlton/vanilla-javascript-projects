import fetchFollowers from "./Modules/fetchFollowers.js"
import displayFollowers from "./Modules/displayFollowers.js"
import paginate from "./Modules/paginate.js"
import displayButtons from "./Modules/displayButtons.js"


const title = document.getElementById("title")
const buttonsContainer = document.getElementById("buttons-container")

let index = 0
let pages = []


const setupUI = () => {

    displayFollowers(pages[index])
    displayButtons(buttonsContainer, pages, index)

}


const init = async () => {

    const followers = await fetchFollowers()
    title.textContent = "Pagination"
    pages = paginate(followers)
    
    setupUI()

}


buttonsContainer.addEventListener("click", (e) => {

    if(e.target.classList.contains("buttons-container")) return

    if(e.target.classList.contains("page-buttons")) {
        index = parseInt(e.target.dataset.index)
    }

    if(e.target.classList.contains("next")) {
        index++
        if(index > pages.length - 1) {
            index = 0
        }
    }

    if(e.target.classList.contains("previous")) {
        index--
        if(index < 0) {
            index = pages.length - 1
        }
    }

    setupUI()

})


window.addEventListener("load", init)