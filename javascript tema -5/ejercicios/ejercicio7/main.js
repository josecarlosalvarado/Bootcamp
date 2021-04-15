//hacer una peticion a la API de https://jsonplaceholder.typicode.com/comments
//con el array que nos llegue, iremos rellenando nuestra ul con <li> con los primeros 20 elementos.

const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/posts";

const list = document.getElementById("ul");
const contenedor = document.getElementById("contenedor")
const previus = document.getElementById("previus");
const next = document.getElementById("next");

function fillList(array) {

    list.innerHTML = "";

    array.slice(0,20).forEach(element => {
        list.innerHTML += `
            <li>${element.name}</li>
        `
    })

}



function fillListPost(array) {
    contenedor.innerHTML = "";

    const numeroPagina = 1;
    const numeroItem = 20;
    const offSet = (numeroPagina - 1) * numeroItem;
    const paginasTotales = Math.ceil(array.length / numeroItem);

    array.slice(offSet).slice(0,numeroItem).forEach(element => {
        contenedor.innerHTML += `
            <h1>${element.title}</h1>
            <p>${element.body}</p>
        `
    })
    previus.addEventListener("click", () => {
        return pre_page = numeroPagina - 1 ? numeroPagina - 1 : null;
  })
  
  next.addEventListener("click", () => {
      return next_page = paginasTotales > numeroPagina ? numeroPagina + 1 : null;
  })
}







fetch(url)
    .then(response => {
        if (response.ok){
            return response.json();
        }
        throw Error("hay algun problema con la respuesta: " + response.statusText)
    })
    .then(data => {
        fillList(data)
    })
    .catch(error => console.log(error));




fetch(url2)
    .then(response => {
        if (response.ok){
            return response.json();
        }
        throw Error("hay algun problema con la respuesta: " + response.statusText)
    })
    .then(data => {

    fillListPost(data)

    })
    .catch(error => console.log(error));


