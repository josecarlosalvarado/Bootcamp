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

let str = String("I'm a String")
let str2 = "I'm another String"; //recomendada
console.log(typeof str, typeof str2, typeof "");

let num = Number(5)
let num2 = (5)
console.log(typeof num, typeof num2);


