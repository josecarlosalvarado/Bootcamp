// apartado 1 

const div = document.getElementsByClassName("div")[0];
const p = document.createElement("p");
p.textContent = "parrafo 1";
div.appendChild(p)

const newP = document.createElement("p");
newP.textContent = "parrafo2";
div.appendChild(newP);

// apartado 2

const button = document.querySelector("button");

button.addEventListener("click", function () {
    document.body.classList.toggle("button")
})


const listItem = document.getElementsByTagName("li");
const img = document.querySelector("img");

// apartado 3

const changeImg = (e) => img.src = e.target.textContent;
listItem[0].addEventListener("click", changeImg);
listItem[1].addEventListener("click", changeImg);
listItem[2].addEventListener("click", changeImg);

// apartado 4 
// seleccionamos lo que queremos modificar

const parrafoApartado4 = document.getElementById("parrafo");
const inputApartado4 = document.querySelector("input");
const botonApartado4 = document.querySelectorAll("button")[1];

//  hacemos un evento al boton que por cada click se añada el valor del input al parrafo

botonApartado4.addEventListener("click", () => {
    //  añadimos el valor del input al parrafo
    parrafoApartado4.textContent = inputApartado4.value;
    inputApartado4.value = "";
});

// inputApartado 4.2
const parrafo42 = document.getElementById("parrafo4.2");
const inputApartado42 = document.querySelectorAll("input")[1];

inputApartado42.addEventListener("input", () => { parrafo42.textContent = inputApartado42.value; })

// apartado 5

const textAreaAp5 = document.querySelector("textarea");

textAreaAp5.addEventListener("input", (e) => {
    //    if (e.target.value.length > 15) {
    //        e.target.style.color = "red";
    //    }else {
    //        e.target.style.color = "green";
    //    }

    // lo mismo pero con valor ternario
    e.target.style.color = e.target.value.length > 15 ? "red" : "green";
})

// apartado 6 

const inputAp6 = document.getElementById("apartado6");
// estamos seleccionando al boton
inputAp6.nextElementSibling.addEventListener("click", () => {
    if (inputAp6.value % 2 !== 0) {
        inputAp6.style.border = "1px solid red";
    } else {
        inputAp6.style.border = "";
    }
})

// apartado 7

//estamos creando contenido dinamico !!!!!!!SUPER IMPORTANTE!!!!!!!!!!!!!!!!!!!!!!!!!

const ulAp7 = document.getElementById("ulap7");

for (let i = 1; i <= 10; i++) {
    const neweli = document.createElement("li");
    neweli.textContent = `elemento ${i}`;
    ulAp7.appendChild(neweli);
}

// apartado 8

const enlaceAp8 = document.querySelector("a");
const botonAp8 = document.getElementById("newtab")

botonAp8.addEventListener("click", () => {enlaceAp8.target = "_blank"});

// apartado 9

const parrafoAp9 = document.querySelector("#parrafoap9");
document.querySelector("#selectap9").addEventListener("change", (e) => {
    parrafoAp9.style.color = e.target.value
})
// apartado 10

const currentRandom = document.getElementById("currentRandom");
const totalNumbers = document.getElementById("totalNumbers");
const oddNumbers = document.getElementById("oddNumbers");
const evenNumbers = document.getElementById("evenNumbers");

document.getElementById("randomButton").onclick = () => {
    const ranndomNumber = Math.floor(Math.random() * 100)
    currentRandom.textContent = ranndomNumber;

    totalNumbers.textContent++; // totalNumbers.textContent = Number(totalNumbers.textContent) + 1;

    ranndomNumber % 2 === 0 ? evenNumbers.textContent++ : oddNumbers.textContent++;
}