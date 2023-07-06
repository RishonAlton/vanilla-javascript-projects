const articles = [
  {
    id: 1,
    title: 'the WET Codbase',
    date: new Date(2020, 9, 4),
    length: 11,
    snippet: `Come waste your time with me`,
  },
  {
    id: 2,
    title: 'goodby, clean code',
    date: new Date(2019, 10, 22),
    length: 5,
    snippet: `Let clean code guide you. Then let it go.`,
  },
  {
    id: 3,
    title: 'my decade in review',
    date: new Date(2018, 7, 11),
    length: 5,
    snippet: `A personal reflection.`,
  },
  {
    id: 4,
    title: 'what are the react team principles',
    date: new Date(2015, 5, 4),
    length: 5,
    snippet: `UI Before API.`,
  }
]

const toggleButton = document.querySelector(".button")
const section = document.querySelector(".articles")

toggleButton.addEventListener("click", () => document.documentElement.classList.toggle("dark-theme"))

section.innerHTML = articles.map(article => {
    const { title, date, length, snippet } = article
    return (`
        <article class="post">
            <h2>${title}</h2>
            <div class="post-info">
            <span>${moment(date).format("MMMM Do, YYYY")}</span>
            <span>${length} min read</span>
            </div>
            <p>${snippet}</p>
            </article>
            `)
        }).join("")
