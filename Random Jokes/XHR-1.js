const image = document.getElementById("image")
const jokeButton = document.getElementById("joke-button")
const randomJoke = document.getElementById("random-joke")

const URL = "https://api.chucknorris.io/jokes/random"


const getJoke = () => {

    const xhr = new XMLHttpRequest()
    
    xhr.open("GET", URL)
    xhr.send()
    
    xhr.onreadystatechange = () => {
        if(xhr.readyState !== 4) return
        if(xhr.status === 200) {
            image.classList.add("shake-image")
            const {value} = JSON.parse(xhr.responseText)
            randomJoke.textContent = value
            const randomTime = Math.random() * 1000
            setTimeout(() => {
                image.classList.remove("shake-image")
            }, randomTime)
        }
        else {
            console.log({
                status: xhr.status,
                text: xhr.statusText
            })
        }
    }

}


jokeButton.addEventListener("click", getJoke)