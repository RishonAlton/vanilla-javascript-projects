import get from "./Modules/getElement.js"
import fetchUser from "./Modules/fetchUser.js"
import displayUser from "./Modules/displayUser.js"

const generateUser = get("#generate-user")


const showUser = async () => {

    const person = await fetchUser()
    displayUser(person)

}


window.addEventListener("DOMContentLoaded", showUser)

generateUser.addEventListener("click", showUser)