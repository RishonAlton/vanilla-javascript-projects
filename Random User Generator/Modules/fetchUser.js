const URL = "https://randomuser.me/api/"


const fetchUser = async () => {

    const data = await fetch(URL)
    const response = await data.json()

    const person = response.results[0]
    const {large: image} = person.picture
    const {first, last} = person.name
    const {email, phone} = person
    const {age} = person.dob
    const {number, name} = person.location.street

    return {
        name: `${first} ${last}`,
        email,
        age,
        street: `${number}, ${name}`,
        phone,
        image
    }
    
}


export default fetchUser