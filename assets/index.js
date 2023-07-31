fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json()
        .then(users => {
            users.forEach(element => {
                let box = `<div id = "users">
        <img src="./assets/MacDo.jpeg" alt="users-profil">
        <div class="label">
            <h3>HI, I'm ${element.name} ${element.username}</h3>
            <p> I live at ${element.address.street} and you can contact ${element.email}</p>
            
        </div>
        </div>
        <br>
        `;
                document.body.innerHTML += box;
            });
            // document.getElementById("display-grid").style.display = 'grid';
            // document.getElementById("display-grid").style.gridTemplateColumns = '1fr 1fr';
            // document.getElementById("display-grid").style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'
        }))

// let image = `<img src="./assets/user-check.svg" alt="users-profil">`;
// document.body.innerHTML += image;