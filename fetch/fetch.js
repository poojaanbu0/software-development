
// function fetchmyfile(){
//     const f = fetch("fetch.txt");
//     console.log(f);
// }
async function getfile() {
    try {
        const resp = await fetch("https://6a75d1e632ae11412783e400.mockapi.io/api/v1/articles");
        const users = await resp.json();
        if(!resp.ok){
            throw Error("something went wrong")
        }

      

      users.forEach(user => {

       const card = document.createElement("div");
       card.classList.add("card");

       card.innerHTML = `
            <h1>${user.name}</h1>
            <p style = "font-style: bold;">${user.id}<p>
             <p>${user.createdAt}</p>
       `;

         document.getElementById("container").append(card);
        
      });

    }
    catch (error) {
        console.log(error);
        showAlert()

    }
}

function showAlert() {
    alert("this is error")
}


getfile();