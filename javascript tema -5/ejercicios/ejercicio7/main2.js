// Haremos una petición GET a esta API y guardaremos todos los Posts. Haremos una
// paginación en nuestro array, de forma que se muestren sólo 20 artículos en el DOM con
// un h1 para title y un p para el body.

const URL = "https://jsonplaceholder.typicode.com/comments";
const URL_POST = "https://jsonplaceholder.typicode.com/posts";

// selectores
const contenedor = document.getElementById("contenedor");
document.getElementById("previus").addEventListener("click", changePage)
document.getElementById("next").addEventListener("click", changePage)
//definimos las variables necesarias para hacer una paginación 
const itemPorPagina = 20;
let post = [];
let pagina = 1;
const numeroTotal = post.length / itemPorPagina;



function rellenarPost() {
    const nuevoSlice = paginador(post,itemPorPagina,pagina_number);
    contenedor.innerHTML = "";

    nuevoSlice.forEach(element => {
        contenedor.innerHTML = `<h1>${element.title}</h1><p>${element.body}</p>`
    })
}

function paginador(array,itemPorPagina,pagina_number) {
    return array.slice((pagina_number - 1) * itemPorPagina, pagina_number * itemPorPagina); 
}


function changePage(e) {
    if (e.target.id === "previus" || pagina > 1) {
        pagina--;
    }else if (e.target === "next" || pagina < numeroTotal) {
        pagina++;
    }
}

fetch(URL_POST)
    .then(response => {
        if (response.ok){
            return response.json();
        }
        throw Error("hay algun problema con la respuesta: " + response.statusText)
    })
    .then(data => {
        post = [...data];
        fillListPost(data)

    })
    .catch(error => console.log(error));





//login y paginacion desde el servidor -----------------------------

const LOGIN_URL = "https://reqres.in/api/login";
const USER_URL = "https://reqres.in/api/users";


const email = document.querySelectorAll("input")[0];
const password = document.querySelectorAll("input")[1];
const userslist = document.getElementById("usersList");
document.querySelector("#loginButton").addEventListener("click", login)




function login(event) {
    event.preventDefault();
    const userinfo = {
        email: email.value,
        password: password.value
    };
    const config = {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body:JSON.stringify(userinfo)
    }
    fetch(LOGIN_URL, config)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            }else {
                // 2 apartado
                fetchAllUsers();
            }
        })
}

async function fetchAllUsers() {

    let response = await fetch(USER_URL);
    let data = await response.json();
    
    let users = [];
    
    for ( let page = 1; page <= data.total_pages; page++) {
        response = await fetch(`${USER_URL}?page=${page}`);
        let newData = await response.json();
        users = users.concat(newData.data)
        // users = [...users, ...newData.data]
    }
    console.log(users);

    userslist.innerHTML = "";
    users.forEach(user => userslist.innerHTML += `<li>${user.email}</li>`);
}

