const image = document.getElementById("image")
const jokeButton = document.getElementById("joke-button")
const randomJoke = document.getElementById("random-joke")

const URL = "https://api.chucknorris.io/jokes/random"


const getJoke = (url) => {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open("GET", url)
        xhr.send()
        xhr.onreadystatechange = () => {
            if(xhr.readyState !== 4) return
            if(xhr.status === 200) {
                resolve(xhr.responseText)
            }
            else {
                reject({
                    status: xhr.status,
                    text: xhr.statusText
                })
            }
        }
    })

}


const displayJoke = (data) => {

    image.classList.add("shake-image")
    const {value} = JSON.parse(data)
    randomJoke.textContent = value
    const randomTime = Math.random() * 1000

    setTimeout(() => {
        image.classList.remove("shake-image")
    }, randomTime)

}


jokeButton.addEventListener("click", () => {
    
    getJoke(URL)
        .then(response => displayJoke(response))
        .catch(error => console.log(error))

})