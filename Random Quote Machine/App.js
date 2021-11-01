const URL = "https://type.fit/api/quotes"

const colors = [
    "#27ae60", 
    "#e74c3c", 
    "#fb6964", 
    "#342224", 
    "#9b59b6", 
    "#2c3e50", 
    "#16a085", 
    "#472e32"
]

const quote = document.getElementById("text")
const author = document.getElementById("author")
const newQuote = document.getElementById("new-quote")
const links = document.querySelectorAll(".link")
const twitterLink = document.getElementById("tweet-quote")

const fetchQuotes = async () => {
    try {
        const response = await fetch(URL)
        const quotes = await response.json()
        return quotes
    } 
    catch (error) {
        console.log(error)
    }
}

const changeColor = () => {
    let randomColor = Math.floor(Math.random() * colors.length)
    const style = document.body.style
    let color = colors[randomColor]
    style.backgroundColor = color
    style.color = color
    newQuote.style.backgroundColor = color
    links.forEach(item => item.style.backgroundColor = color) 
}

const changeQuote = async () => {
    const quotes = await fetchQuotes()
    let randomQuote = Math.floor(Math.random() * quotes.length)
    quote.innerHTML =  `<i class="fas fa-quote-left"></i> ${quotes[randomQuote].text}`
    author.textContent = "- " + quotes[randomQuote].author
    changeColor()
    let quoteURL = quotes[randomQuote].text.split(" ").join("%20")
    twitterLink.setAttribute("href", `https://twitter.com/intent/tweet?text=${quoteURL}`)
}

newQuote.addEventListener("click", () => {
    changeQuote()
})

window.addEventListener("DOMContentLoaded", () => {
    changeQuote()
})