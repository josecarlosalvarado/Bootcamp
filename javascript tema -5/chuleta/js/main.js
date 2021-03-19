// ------------------------uso de js externo------------------------


function saludo_dos() {
    alert("hola desde un script externo");
    console.log("hola saludo_dos")

}

document.getElementsByTagName("a").item(2).addEventListener("click", saludo_dos);

// ------------------------depuracion / logging------------------------

// alert("Mensaje")
console.log("Mensaje");


// ------------------------variable------------------------

// var -> function scope
// let / const -> block scope 


function saludar() {

    console.log("inicial: ", contador);
    for (var contador = 0; contador < 3; contador++) {
        console.log(contador);
    }
    console.log("final: ", contador);
}

saludar()

console.clear();
// ------------------------inicializacion------------------------

let day;
day = 5;

let mothName = "Octubre";

let hour, minute, second;

let array = [15, 20, 25]
console.log(array[0], array[1], array[2]);

let [var1, var2, var3] = [15, 20, 25] //avanzada
console.log(var1, var2, var3);

// const -> block scope 
const x = 1;
// const y; // error misiing = in cost
// x = 2; erro invalid assignament to cost 'x'

console.clear();
// ------------------------tipos de datos------------------------
//datos primitivos
let str = String("I'm a String")
let str2 = "I'm another String"; //recomendada
console.log(typeof str, typeof str2, typeof "");

let num = Number(5)
let num2 = (5)
console.log(typeof num, typeof num2);

let bool = Boolean(true);
let bool2 = false; //recomendada 
console.log(typeof bool, typeof bool2, typeof true, typeof "true" );

let undef;
console.log(undef, typeof undef);


let selectedColor = null //limpiar una variable
console.log(selectedColor, typeof selectedColor);

//objects
array = Array(1, 2, 3);
let array2 = [1, 2, 3];
console.log(array,array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date("2021-05-12"));
console.log(typeof new Error("mensaje de error"));


console.clear();
//------------------------strings------------------------
str  = "hola futuro";
console.log(str, str.length);
console.log(str.indexOf("futuro"), str.indexOf("cadena no presentada"));
console.log("la ultima ocurrencia de 'u' esta en el indice", str.lastIndexOf("u"));

console.log(str.substring(1, 3));

console.log("hola mundo".concat(". ádios mundo."));
console.log("hola mundo" + ". Ádios mundo."); //equivalente a concat
str = str + ". Ádios mundo"
str += ". Ádios mundo";
console.log(str);

console.log(str.replaceAll("mundo", "futuro"));

console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());

console.log(`El dia de mi cumpleaños es el dia ${day}`);

//parsing/parseo (cambiarle el tipo a un dato)


number = Number("1000") //Nan = not a number, no genera error
console.log(number, typeof number);

number += "1000"; // ENTIENDE QUE ES UNA CONCATENACION, NO UNA SUMA  
console.log(number, typeof number);

console.log("1" + 1, "1" - 1);


console.clear();
//------------------------objetos//------------------------

let person = {
    name: "john",
    age: 30,
    blonde: false

}

//se conoce como acceso por punto / Dot notation
console.log(person);
console.log(`se llama ${person.name} y tiene ${person.age} años`);

person.name = "Jane"

console.log(person);
console.log(`se llama ${person.name} y tiene ${person.age} años`);
//acceso por corchetes / brackets notation

let propertyName = "age";
console.log(person[propertyName]);

//ampliacion
person.children = ["marta", "javier"];
console.log(person);
console.log(person.children[1]);

