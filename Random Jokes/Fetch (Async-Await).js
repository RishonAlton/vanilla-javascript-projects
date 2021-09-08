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


jokeButton.addEventListener("click", async () => {

    try {
        const data = await fetch(URL)
        const response = await data.json()
        displayJoke(response)
    } 
    
    catch (error) {
        console.log(error);
    }

})