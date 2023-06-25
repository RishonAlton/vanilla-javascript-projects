const tabSection = document.querySelector(".tabs")
const tabButtons = document.querySelectorAll("button")
const tabs = document.querySelectorAll(".tab")

tabSection.addEventListener("click", (e) => {
    const id = e.target.dataset.id
    if (id) {
        tabButtons.forEach(button => button.classList.remove("active"))
        e.target.classList.add("active")
        tabs.forEach(tab => tab.classList.remove("active"))
        const element = document.getElementById(id)
        element.classList.add("active")
    }
})