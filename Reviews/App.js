const reviews = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'Web Developer',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi velit sapiente corrupti quae necessitatibus in amet quasi quis animi, tempore alias. Rem deleniti ab cum sequi accusantium ullam provident error!",
    },
    {
        id: 2,
        name: 'Anna Johnson',
        job: 'Web Designer',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, illum! Temporibus officia repellat maiores fuga vel nesciunt rerum quidem architecto odio quisquam maxime, hic fugiat quas beatae soluta ipsa magnam!",
    },
    {
        id: 3,
        name: 'Peter Jones',
        job: 'Intern',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis nisi ullam maiores, ipsa cupiditate repellendus aspernatur dolorem ducimus possimus. Incidunt recusandae iusto asperiores officia corporis quos omnis, nesciunt non.",
    },
    {
        id: 4,
        name: 'Bill Anderson',
        job: 'The Boss',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat temporibus iure vel, quam officiis modi provident aliquam quae hic suscipit aperiam maiores obcaecati aspernatur delectus voluptates iste, explicabo, unde culpa!",
    },
]

const image = document.querySelector(".image")
const person = document.querySelector(".name")
const job = document.querySelector(".job")
const review = document.querySelector(".review")
const previousButton = document.querySelector(".previous-button")
const nextButton = document.querySelector(".next-button")

let currentItem = 0

const showPerson = () => {
    const item = reviews[currentItem]
    image.src = item.image
    image.alt = item.name
    person.textContent = item.name
    job.textContent = item.job
    review.textContent = item.text
}

window.addEventListener("DOMContentLoaded", showPerson)

nextButton.addEventListener("click", () => {
    currentItem++
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson()
})

previousButton.addEventListener("click", () => {
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson()
})