import get from "./getElement.js"


const userImage = get("#user-image")
const info = get("#info")
const title = get("#title")
const userButtons = [...document.querySelectorAll("#user-buttons button")]


const displayUser = (person) => {

    userImage.src = person.image
    info.textContent = `My name is`
    title.textContent = person.name
    userButtons[0].classList.add("active")

    userButtons.forEach(button => {
        button.addEventListener("click", () => {
            const label = button.dataset.label
            info.textContent = `My ${label} is`
            title.textContent = person[label]
            userButtons.forEach(button => button.classList.remove("active"))
            button.classList.add("active")
        })
    })

}


export default displayUser