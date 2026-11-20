const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {

    sideMenu.classList.toggle("active");

    if (sideMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});

const links = document.querySelectorAll(".side-menu a");

links.forEach(link => {
    link.addEventListener("click", () => {
        sideMenu.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


// function fetchmyfile(){
//     const f = fetch("fetch.txt");
//     console.log(f);
// }
async function getfile() {
    try {
        const resp = await fetch(
            "https://6a75d1e632ae11412783e400.mockapi.io/api/v1/articles"
        );

        if (!resp.ok) {
            throw Error("Something went wrong");
        }

        const users = await resp.json();

        console.log(users);

        users.forEach(user => {

            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <div class="card_image">
                    <img src="${user.avatar}" alt="${user.name}">
                </div>

                <div class="card_content">
                    <h2>${user.name}</h2>
                    <p>${user.department}</p>
                     <p>${user.about}</p>
                </div>
            `;

            document.getElementById("container").append(card);
        });

    } catch (error) {
        console.log(error);
        showAlert();
    }
}

function showAlert() {
    alert("This is an error");
}

getfile();

document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    // 1. Remove active state from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // 2. Add active state to clicked button
    button.classList.add('active');
    
    // 3. Hide all menu content sections
    document.querySelectorAll('.menu-section').forEach(section => section.classList.remove('active'));
    
    // 4. Show the section linked to the clicked button
    const targetId = button.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});
