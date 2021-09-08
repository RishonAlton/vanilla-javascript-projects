const mainContainer = document.getElementById("main-container")


const displayFollowers = (data) => {

    mainContainer.innerHTML = data.map(item => {
        const {avatar_url, login, html_url} = item
        return (`
            <div class="card">
                <img src="${avatar_url}" alt="${login}" class="follower-image">
                <h5 class="follower-name">${login}</h5>
                <a href="${html_url}" class="github-url">View Profile</a>
            </div>
        `)
    }).join(" ")

}


export default displayFollowers