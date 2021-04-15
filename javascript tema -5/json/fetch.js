
//recibir informacion de una API

const URL = "https://jsonplaceholder.typicode.com/users";


const printNames = array => array.foreach(user => console.log(user.name));
const printCities = array => array.foreach(user => console.log(user.address.city));
const printLates = array => array.foreach(user => console.log(user.address.geo.lat));

fetch(URL) 
    .then(response => {
        if (!response.ok) {
            throw Error("hay algun problema con la respuesta:" * response.statusText)
        }
        response.json()
    })
    .then(data => {
        //aqui proceso los datos
        printNames(data);
        printCities(data);
        printLates(dat);
    })
    .catch(error => {
        console.log(error);
    })

// Peticion con metodo http post en lugar de get
//dar informacion 

const POST_URL = "https://jsonplaceholder.typicode.com/posts";


const newPost = {
    title: "mi titulo",
    body: "mi cuerpo de publicacion"
} 

const http = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    bofy: JSON.stringify(newPost)
};

fetch(POST_URL, http)
    .then(Response => Response.json())
    .then(data => console.log(data))














