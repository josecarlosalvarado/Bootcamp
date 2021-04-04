

//------------------------DOM------------------------

// basic
console.log(document);
console.log(document.URL);
console.log(document.domain);
document.title += "(DOM)"
console.log(document.title);

// selectors

const family = document.getElementsByTagName("div");
console.log(family);

const grandParent = document.getElementById("grandparent")
console.log(grandparent);

const parents = document.getElementsByClassName("parent");
const parent1 = parents[0];
const parent2 = parents[1];

console.log(parent1, parent2);

const children = document.getElementsByClassName("child");
console.log(children);

let element = document.querySelectorAll("grandparent div");
console.log(element);

const changeBackground = (element,color) => element.style.backgroundColor = color;

// changeBackground(children[0], "#333");
// changeBackground(parent1, "red");
// changeBackground(parent2.children[1], "blue");
// changeBackground(children[0].parentNode.parentNode, "#ddd")


changeBackground(parent1.children[1].previousElementSibling, "pink");

grandParent.children[1].previousElementSibling.lastElementChild;

//properties 

// children[0].innerHTML = "child-1 v2";
console.log(children[0].innerHTML); //imprime etiquetas
console.log(children[0].textContent); //ignora las etiquetas

//el textContent ignora por completo las etiquetas.
console.log("Classlist", parent1.classList);
parent1.classList.remove("bg-dark");
console.log("Classlist", parent1.classList);
parent1.classList.add("bg-red")
console.log("Classlist", parent1.classList);

parent1.classList.toggle("bg-red");
//alterna la clase,si no esta,laincluye (toggle) y si esta, la elimina

parent1.setAttribute("name", "nombre-parent-1")
//si existe te lo sobreescribe y si no existe te lo añade (atributo).

console.clear();
// Create / Remove elements

let myDiv = document.createElement("div");
myDiv.id = "new-Div";
myDiv.classList.add("child");
myDiv.textContent = "child 2.5";

let myDiv2 = myDiv;

parent2.appendChild(myDiv2); 
parent1.appendChild(myDiv);  // MISMO nodo con dos nombres diferentes

myDiv2 = myDiv.cloneNode(true); // creamos un nuevo nodo a partir del original.
parent2.appendChild(myDiv2);
myDiv2.textContent = "child-5";

myDiv.remove();

let myDiv3 = myDiv.cloneNode();
parent2.before(myDiv3);
parent2.after(myDiv.cloneNode());

console.clear();
// Crear una función que me devuelva un nodo nuevo y que reciba etiqueta e id.

function createNode(etiqueta, id) { //Creamos el nodo
    let newNode = document.createElement(etiqueta);
    newNode.id = id;

    return newNode;
}

let newDiv = createNode("div", "identificador1") 
let table = createNode("table", "identificador2")
// guardamos lo que nos devuelve la funcion en una variable y
// a su vez llamamos la variable.

parent2.appendChild(newDiv);
parent2.appendChild(table); //añadimos las variables al parent2

// eventos

const colorButton = document.getElementsByTagName("button")[0];
colorButton.addEventListener("click", function (event){
    
    console.log(event);
    console.log(event.target);
    console.log(event.target.tagName);

    if (event.ctrlKey) {
        event.target.classList.toggle("button")
        document.body.classList.toggle("bg-red");
        
    }

    console.log(`x: ${event.clientX} | y: ${event.clientY}`);
    console.log(`alt: ${event.altKey}, shift: ${event.shiftKey}, Ctrl: ${event.ctrlKey}`);
    
});

const eventoemail = document.querySelector("#emailInput");
eventoemail.addEventListener("focus", inputListener)
eventoemail.addEventListener("blur", inputListener)

function inputListener(e) {
    console.log("tipo de evento:", e.type);
    if (e.type === "focus") {
        e.target.classList.add("bg-red");
    }else if(e.type === "blur") {
        e.target.classList.remove("bg-red");
    }
}

const changeTitle = e => {
    document.querySelectorAll("h1")[2].textContent = eventoemail.value; //propiedad value importante

}

eventoemail.addEventListener("keydown", inputListener)
eventoemail.addEventListener("keyup", changeTitle)

const container = document.getElementById("container");

container.addEventListener("mouseover", inputListener)
container.addEventListener("mouseout", inputListener)


function coords(e) {
    const h1 = document.querySelectorAll("h1")[3]
    document.querySelectorAll("h1")[3].textContent = `x: ${e.clientX} | y: ${e.clientY}`;
    // h1.style.marginLeft += 1;
}

document.body.addEventListener("mousemove", coords);





















// Array.from(family).forEach(item => console.log(item)); //construyo una array
// for (let familyMember of family) {
//     console.log(familyMember);
// } 