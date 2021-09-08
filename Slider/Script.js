const data = [
  {
    image: "./Images/Image-1.jpg",
    name: "Peter Doe",
    job: "Product Manager",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
  },
  {
    image: "./Images/Image-2.jpg",
    name: "Anna Johnson",
    job: "Web Developer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
  {
    image: "./Images/Image-3.jpg",
    name: "Emma Doe",
    job: "Web Designer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
  {
    image: "./Images/Image-4.jpg",
    name: "Susan Smith",
    job: "Web Developer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
  {
    image: "./Images/Image-5.jpg",
    name: "Peter Jones",
    job: "Intern",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
  {
    image: "./Images/Image-6.jpg",
    name: "Bill Anderson",
    job: "The Boss",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  }
]

const reviewContainer = document.getElementById("review-container")
const previousButton = document.querySelector(".previous-button")
const nextButton = document.querySelector(".next-button")


if(data.length === 1) {
  nextButton.style.display = "none"
  previousButton.style.display = "none"
}


let reviews = [...data]

if(data.length === 2) {
  reviews = [...data, ...data]
}


reviewContainer.innerHTML = reviews.map((review, index) => {

  const {image, name, job, text} = review
  let position = "next"

  if(index === 0) {
    position = "active"
  }

  if(index === reviews.length - 1) {
    position = "last"
  }

  if(data.length <= 1) {
    position = "active"
  }

  return (`
    <article class="slide ${position}"> 
      <img src="${image}" class="person-image" alt="${name}">
      <h4 class="name">${name}</h4>
      <p class="job">${job}</p>
      <p class="info">${text}</p>
      <span class="quote-icon">
          <i class="fas fa-quote-right"></i>
      </span>
    </article>
  `)
}).join(" ")


const changeReviews = (type) => {

  const active = document.querySelector(".active")
  const last = document.querySelector(".last")
  let next = active.nextElementSibling

  if(!next) {
    next = reviewContainer.firstElementChild
  }

  active.classList.remove("active")
  last.classList.remove("last")
  next.classList.remove("next")

  if(type === "previous") {
    active.classList.add("next")
    last.classList.add("active")
    next = last.previousElementSibling
    if(!next) {
      next = reviewContainer.lastElementChild
    }
    next.classList.remove("next")
    next.classList.add("last")
    return
  }

  active.classList.add("last")
  last.classList.add("next")
  next.classList.add("active")

}


nextButton.addEventListener("click", () => {
  changeReviews()
})

previousButton.addEventListener("click", () => {
  changeReviews("previous")
})
