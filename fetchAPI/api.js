const search = document.getElementById("search")
let users = []
let myUsers = []
search.addEventListener("input", (data) => {
    console.log(data.target.value);
    const searchValue = data.target.value;
    myUsers = users.filter((d) => d.name.startsWith(searchValue));
    displayCard();
})

async function getUser() {
    try {
        const response = await fetch("https://6a75d1e632ae11412783e400.mockapi.io/api/v1/users");

        if (!response.ok) {
            throw Error("something went wrong")
        }

        users = await response.json();
        myUsers = users
        displayCard();

    }
    catch (error) {
        console.log(error)
    }
}



function displayCard(search = "") {
    // let myUsers = users
    myUsers.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");


        card.innerHTML = `
        <div class="card_image">
            <img src="${user.avatar}" alt="${user.name}">
        </div>

        <div class="card_content">
            <h2>${user.name}</h2>
            <p>${user.createdAt}</p>
            <button>View More</button>
        </div>
    `;

        const container = document.getElementById("container")

        container.append(card);
    });
}

getUser()
// let fruits = ["apple", "pineapple", "orange", "mango"]

