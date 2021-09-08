const displayButtons = (container, pages, activeIndex) => {

    let buttons = pages.map((_, pageIndex) => {
        return (`
            <button class="page-buttons ${activeIndex === pageIndex ? "active-button" : ""}" data-index="${pageIndex}">
                ${pageIndex + 1}
            </button>
        `)
    })

    buttons.push(`<button class="change-page next">Next</button>`)
    buttons.unshift(`<button class="change-page previous">Previous</button>`)

    container.innerHTML = buttons.join(" ")

}


export default displayButtons