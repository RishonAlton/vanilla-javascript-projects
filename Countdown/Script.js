const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const weekDays = [
    "Sunday",
    "Monday", 
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const deadline = document.getElementById("deadline")
const countdown = document.querySelectorAll(".countdown h1")
const countdownContainer = document.getElementById("countdown-container")


let currentDate = new Date()
let currentYear = currentDate.getFullYear()
let currentMonth = currentDate.getMonth()
let currentDay = currentDate.getDate()

let futureDate = new Date(currentYear, currentMonth, currentDay + 10, 12, 00, 00)
let futureYear = futureDate.getFullYear()
let futureMonth = futureDate.getMonth()
let futureWeekDay = futureDate.getDay()
let futureDay = futureDate.getDate()
let futureHours = futureDate.getHours() 
let futureMinutes = futureDate.getMinutes() < 10 ? `0${futureDate.getMinutes()}` : futureDate.getMinutes()
let futureTime = futureDate.getTime()

deadline.textContent = `Giveaway ends on ${weekDays[futureWeekDay]}, ${futureDay} ${months[futureMonth]} ${futureYear}, ${futureHours}:${futureMinutes} PM`


const displayCountdown = () => {
    
    let currentTime = new Date().getTime()

    let difference = futureTime - currentTime

    const msInOneDay = 24 * 60 * 60 * 1000
    const msInOneHour = 60 * 60 * 1000
    const msInOneMinute = 60 * 1000

    let days = Math.floor(difference / msInOneDay)
    let hours = Math.floor((difference % msInOneDay) / msInOneHour)
    let minutes = Math.floor((difference % msInOneHour) / msInOneMinute)
    let seconds = Math.floor((difference % msInOneMinute) / 1000)

    let remainingTime = [days, hours, minutes, seconds]

    const format = (item) => {
        if(item < 10) {
            return `0${item}`
        }
        return item
    }

    countdown.forEach((item, index) => {
        item.innerHTML = format(remainingTime[index])
    })

    if(difference < 0) {
        clearInterval(displayInterval)
        countdownContainer.innerHTML = `<h3 id="giveaway-expired">Sorry, the giveaway has expired!</h3>`
    }

}


let displayInterval = setInterval(displayCountdown, 1000)


displayCountdown()