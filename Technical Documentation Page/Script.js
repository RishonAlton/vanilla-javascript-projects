const hamburgerButton = document.getElementById("hamburger-button")
const sideBar = document.getElementById("navbar") 
const mainDoc = document.getElementById("main-doc")
const sideBarItems = sideBar.querySelectorAll(".nav-link")
const codes = document.querySelectorAll(".code")

hamburgerButton.addEventListener("click", () => {
    sideBar.classList.toggle("show-sidebar")
    if(sideBar.classList.contains("show-sidebar")) {
        hamburgerButton.innerHTML = `<i class="fas fa-times"></i>`
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        codes.forEach(code => {
            code.style.backgroundColor = "transparent"
        }) 
    }
    else {
        hamburgerButton.innerHTML = `<i class="fas fa-bars"></i>`
        document.body.style.backgroundColor = "var(--gray-050)"
        codes.forEach(code => {
            code.style.backgroundColor = "var(--primary-050)"
        }) 
    }
})

sideBar.addEventListener("click", (e) => {
    id = e.target.getAttribute("href")
    if(id) {
        sideBarItems.forEach(item => {
            item.classList.remove("active")
            e.target.classList.add("active")
            sideBar.classList.remove("show-sidebar")
            hamburgerButton.innerHTML = `<i class="fas fa-bars"></i>`
            document.body.style.backgroundColor = "var(--gray-050)"
            codes.forEach(code => {
                code.style.backgroundColor = "var(--primary-050)"
            }) 
        })
    }
})
