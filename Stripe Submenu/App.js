const sublinks = [
    {
        page: 'Products',
        links: [
            { label: 'payment', icon: 'fas fa-credit-card', url: 'products.html' },
            { label: 'terminal', icon: 'fas fa-credit-card', url: 'products.html' },
            { label: 'connect', icon: 'fas fa-credit-card', url: 'products.html' },
        ]
    },
    {
        page: 'Developers',
        links: [
            { label: 'libraries', icon: 'fas fa-book', url: 'developers.html' },
            { label: 'plugins', icon: 'fas fa-book', url: 'developers.html' },
            { label: 'billing', icon: 'fas fa-book', url: 'developers.html' },
        ]
    },
    {
        page: 'Company',
        links: [
            { label: 'about', icon: 'fas fa-briefcase', url: 'company.html' },
            { label: 'customers', icon: 'fas fa-briefcase', url: 'company.html' },
        ]
    }
]

const hamburgerButton = document.getElementById("hamburger-button")
const sidebarContainer = document.querySelector(".sidebar-container")
const closeButton = document.getElementById("close-button")
const sidebarLinks = document.querySelector(".sidebar-links")
const linkButtons = [...document.querySelectorAll(".link-button")]
const submenu = document.querySelector(".submenu")
const hero = document.getElementById("hero")
const navbar = document.getElementById("navbar")


hamburgerButton.addEventListener("click", () => sidebarContainer.classList.add("show-sidebar"))


closeButton.addEventListener("click", () => sidebarContainer.classList.remove("show-sidebar"))


sidebarContainer.addEventListener("click", (e) => {

    if(e.target.classList.contains("show-sidebar")) {
        sidebarContainer.classList.remove("show-sidebar")
    }

})


sidebarLinks.innerHTML = sublinks.map(sublink => {

    const {page, links} = sublink

    return (`
        <div class="sidebar-link">
            <h5>${page}</h5>
            <div class="sidebar-sublinks">
                ${links.map(link => {
                    const {label, icon, url} = link
                    return (`
                        <a href="${url}" class="sidebar-sublink">
                            <i class="${icon}"></i>
                            ${label}
                        </a>
                    `)
                }).join(" ")}
            </div>
        </div>
    `)

}).join(" ")


linkButtons.forEach(button => {

    button.addEventListener("mouseover", (e) => {
        const text = e.currentTarget.textContent
        const DOMRect = e.currentTarget.getBoundingClientRect()
        const center = (DOMRect.left + DOMRect.right) / 2
        const bottom = DOMRect.bottom - 3
        const currentLink = sublinks.find(link => link.page === text)
        if(currentLink) {
            const {page, links} = currentLink
            submenu.classList.add("show-submenu")
            submenu.style.left = `${center}px`
            submenu.style.top = `${bottom}px`
            let columns = "col-2"
            if(links.length === 3) {
                columns = "col-3"
            }
            if(links.length === 4) {
                columns = "col-4"
            }
            submenu.innerHTML = (`
                <div class="submenu-link">
                    <h5>${page}</h5>
                    <div class="submenu-sublinks ${columns}">
                        ${links.map(link => {
                            const {label, icon, url} = link
                            return (`
                                <a href="${url}" class="submenu-sublink">
                                    <i class="${icon}"></i>
                                    ${label}
                                </a>
                            `)
                        }).join(" ")}
                    </div>
                </div>
            `)
        }
    })

})


hero.addEventListener("mouseover", function (e) {
    submenu.classList.remove("show-submenu")
})


navbar.addEventListener("mouseover", function (e) {
    if (!e.target.classList.contains("link-button")) {
        submenu.classList.remove("show-submenu")
    }
})