const getElement = selection => {
    
    const element = document.querySelector(selection)

    if(element) {
        return element
    }

    else {
        throw new Error(`${selection} does not exist`)
    }

}


class Gallery {

    constructor(element) {
        this.container = element
        this.list = [...element.querySelectorAll(".image")]
        this.modal = getElement(".modal")
        this.closeButton = getElement(".close-button")
        this.mainImage = getElement(".main-image")
        this.imageName = getElement(".image-name")
        this.modalImages = getElement(".modal-images")
        this.previousButton = getElement(".previous-button")
        this.nextButton = getElement(".next-button")
        this.previousImage = this.previousImage.bind(this)
        this.nextImage = this.nextImage.bind(this)
        this.chooseImage = this.chooseImage.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.container.addEventListener("click", function(e) {
            if(e.target.classList.contains("image")) {
                this.openModal(e.target, this.list)
            }
        }.bind(this))
    }

    setMainImage(selectedImage) {
        this.mainImage.src = selectedImage.src
        this.imageName.textContent = selectedImage.title
    }

    openModal(selectedImage, list) {
        this.setMainImage(selectedImage)
        this.modalImages.innerHTML = this.list.map(image => {
            return (`
                <img 
                    src="${image.src}"
                    alt="${image.title}"
                    data-id="${image.dataset.id}"
                    title="${image.title}"
                    class="${selectedImage.dataset.id === image.dataset.id ? "modal-image selected" : "modal-image"}"
                />
            `)
        }).join("")
        this.modal.classList.add("open-modal")
        this.previousButton.addEventListener("click", this.previousImage)
        this.nextButton.addEventListener("click", this.nextImage)
        this.modalImages.addEventListener("click", this.chooseImage)
        this.closeButton.addEventListener("click", this.closeModal)
    }

    previousImage() {
        const selected = this.modalImages.querySelector(".selected")
        const previous = selected.previousElementSibling || this.modalImages.lastElementChild
        selected.classList.remove("selected")
        this.setMainImage(previous)
        previous.classList.add("selected")
    }

    nextImage() {
        const selected = this.modalImages.querySelector(".selected")
        const next = selected.nextElementSibling || this.modalImages.firstElementChild
        selected.classList.remove("selected")
        this.setMainImage(next)
        next.classList.add("selected")
    }

    chooseImage(e) {
        if(e.target.classList.contains("modal-image")) {
            const selected = this.modalImages.querySelector(".selected")
            selected.classList.remove("selected")
            this.setMainImage(e.target)
            e.target.classList.add("selected")
        }
    }

    closeModal() {
        this.modal.classList.remove("open-modal")
        this.previousButton.removeEventListener("click", this.previousImage)
        this.nextButton.removeEventListener("click", this.nextImage)
        this.modalImages.removeEventListener("click", this.chooseImage)
        this.closeButton.removeEventListener("click", this.closeModal)
    }

}


const landscape = new Gallery(getElement(".landscape"))

const city = new Gallery(getElement(".city"))

const seascape = new Gallery(getElement(".seascape"))

const texture = new Gallery(getElement(".texture"))