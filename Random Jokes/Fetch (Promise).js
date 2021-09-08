const image = document.getElementById("image")
const jokeButton = document.getElementById("joke-button")
const randomJoke = document.getElementById("random-joke")

const URL = "https://api.chucknorris.io/jokes/random"


const displayJoke = ({value}) => {

    image.classList.add("shake-image")
    randomJoke.textContent = value
    const randomTime = Math.random() * 1000

    setTimeout(() => {
        image.classList.remove("shake-image")
    }, randomTime)

} 


jokeButton.addEventListener("click", () => {

    fetch(URL)
        .then(data => data.json())
        .then(response => displayJoke(response))
        .catch(error => console.log(error))
        
})