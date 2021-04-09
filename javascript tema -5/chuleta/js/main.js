// ------------------------uso de js externo------------------------


function saludo_dos() {
    alert("hola desde un script externo");
    console.log("hola saludo_dos")

}

//  document.getElementsByTagName("a").item(2).addEventListener("click", saludo_dos);

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
console.log(typeof bool, typeof bool2, typeof true, typeof "true");

let undef;
console.log(undef, typeof undef);


let selectedColor = null //limpiar una variable
console.log(selectedColor, typeof selectedColor);

//objects
array = Array(1, 2, 3);
let array2 = [1, 2, 3];
console.log(array, array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date("2021-05-12"));
console.log(typeof new Error("mensaje de error"));


console.clear();
//------------------------strings------------------------
str = "hola futuro";
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


// this

const person2 = {
    name: "thomas",
    age: 30,
    blonde: false,
    talk() {
        console.log(this);
        console.log(`me llamo ${this.name}`);
    },
    presentarse() {
        console.log(`me llamo ${this.name},tengo ${this.age} años y${this.blonde ? ` soy rubio` : `soy moreno`} `);
    }
}
person2.presentarse();


const person3 = {
    name: "sarah",
    talk() {
        console.log(this);
        console.log(`me llamo ${this.name}`);
    }
}

person2.talk();
person3.talk();
person2.talk(this);

//------------------------clonar objetos------------------------

let obj1 = {property: 5};
let obj2 = obj1; //NO ES UNA COPIA, SI NO EL MISMO OBJETOS CON DOS NOMBRES

obj2 = {...obj1} //copia superficial que se usa practicamente siempre

obj2 = JSON.parse(JSON.stringify(obj1)); //COPIA PROFUNDA O TOTAL


//objects contructor using functions  //sin terminar la explicacion del video de codespace

function Car(brand,color,weight,topSpeed) {
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
}

const car1 = new Car("Mercedes","red","1","260");
const car2 = new Car("Bmw","red","1","260");
const car3 = new Car("Volvo","red","1","260");
const car4 = new Car("Fiat","red","1","260");

console.log(car1,car2,car3,car4);




console.clear();
//------------------------arrays------------------------

let selectedColors = ["red", "blue"]; //array de strings
console.log(selectedColors, typeof selectedColors);

selectedColors[2] = "green";
console.log(selectedColors, selectedColors.length);

selectedColors.push("violet", "white"); //añade elemento en la array
console.log(selectedColors, selectedColors.length);

selectedColors.pop(); //borra el ultimo elemento
console.log(selectedColors, selectedColors.length);

selectedColors.unshift("white");
console.log(selectedColors, selectedColors.length);

selectedColors.shift(); //borra el primer elemento
console.log(selectedColors, selectedColors.length);

selectedColors.sort();
console.log(selectedColors, selectedColors.length);


console.log(selectedColors.indexOf("red"));

console.log("El rojo esta en el indice", selectedColors.indexOf("red"));

console.log(selectedColors.slice(1, 3));
console.log(selectedColors);


console.log("los elementos borrados son", selectedColors.splice(1, 1)); //para eliminar un elemento
console.log("la array se ha quedado asi", selectedColors);


console.clear();
/*
    crear un objeto que tenga las propiedades nombre, altura, género y 
    amigos estara vacio y los añadiremos posteriormente
    3 elementos con los monbres, depues, añadiremos uno al inicio.
*/

const child = {
    name: "carlos",
    age: 18,
    height: 1.80,
    gender: "male",
    friends: [],
    perderAmigo() {
        this.friends.pop();
    }

}

child.friends = ["javier", "kike", "paula"];

child.friends.unshift("carla");
console.log(child);

child.perderAmigo();
console.log(child);

console.log();
//------------------------condicionales------------------------
const randomNumber = 9;
const guessedNumber = "5";

if (typeof randomNumber === typeof guessedNumber) {
    console.log("hey, tienes  que introducir el mismo tipo");
}

if (randomNumber === guessedNumber) {
    console.log("has acertado el número");
} else if (randomNumber > guessedNumber) {
    console.log("El numero secreto es mayor");
} else {
    console.log("El numero secreto es menor");
}

console.clear();
// Ternary Operator

let variable = 12 < 10 ? "El primero es menor" : " El primero es mayor"
console.log(variable);

console.clear();
// Switch

let option = 5;
switch (option) {
    case 1:
        //bloque de codigo para valor 1 
        console.log("Option vale 1");
        break;
    case 2:
        //bloque de codigo para valor 2
        console.log("Option vale 2");
        break;
    case 3:
        //bloque de codigo para valor 3
        console.log("Option vale 3");
        break;
    default: // "De otro modo" de pseint
        console.log("Otra opción");
        break;
}


console.clear();
// funciones / functions

//Nombradas
function greet(name, lastName) {
    return `hola,${name} ${lastName}. ¿Qué tal?`;
}

console.log(greet(" Marcos", "aurelio"));
// greet("Marcos", "Aurelio");

//que devuelva el cuadrado de un numero

function cuadrado(num1) {
    return num1 * num1;
}
console.log(cuadrado(5));

//Anónimas 
// let numberArray = [5, 51, 1, 15, 2];
// console.log(numberArray);
// numberArray.sort(); // me lo ordena segun ASCII
// console.log(numberArray);


// function orderNumbers (a, b) {  // Funcion nombrada
//     if (a < b) {
//         return -1;
//     } else if (a === b) {
//         return 0;
//     } else  {
//         return 1;
//     }

// }

// numberArray.sort(orderNumbers);


// numberArray.sort(function(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return 1;
//     }
// });

// numberArray.sort(function (a, b) {return a-b})


// console.log( "Funcion anónima",numberArray);

console.clear();
// Arrow functions / funciones de flecha

const perimeterOfSquare = (side) => 4 * side;

// const perimeterOfSquare = function (side) {  // esta no es de flecha (funcion)
//     return side * 4;
// }

console.log(perimeterOfSquare(5));

console.log(typeof function () { });
console.log(typeof (() => { }));

console.clear();
// pasar la funcion que ordena los numeros a una funcion de flecha

let numberArray = [5, 51, 1, 15, 2];

numberArray.sort((a, b) => a - b)
console.log("Funcion de flecha", numberArray);

let cuadradoNumero = (num5) => num5 * num5;
console.log(cuadradoNumero(5));

console.clear();
//------------------------for------------------------

for (let i = 0; i <= 10; i++) {
    console.log(`ìndice: ${i}`);
}

// definir y rellenar una array con el indice i 
const arrayFuncion = []

for (let i = 0; i <= 10; i++) {
    arrayFuncion.push(i * i)
}

console.log(arrayFuncion);

console.clear()
// while 

console.clear;
// foreach 

console.log(numberArray);

numberArray.forEach(function (value, index) {
    console.log(value, index);
});

//----------------------------------------------------------------------------------

// transformar la funcion de arriba a funcion de flecha

numberArray.forEach((value, index) => (console.log(`indice ${index}: ${value}`)));

let otherArray = [];

numberArray.forEach(item => otherArray.push(item)); //rellenar una array item por item
console.log(otherArray);

console.clear();
// for of

for (let item of numberArray) {
    console.log(item);
}

//continue

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue //saltar a la siguiente iteración 
    }
    console.log("usando el continue", i);

}

//Break

let i = 0;
let k;

mainLoop: while (true) {
    console.log("outer loop", i);
    i++
    k = 1;
    while (true) {
        console.log("inner loop", k);
        k++;
        if (i === 5 && k === 5) {
            break mainLoop;
        } else if (k === 5) {
            break;
        }
    }
}

console.clear();
//------------------------funciones de alto nivel ------------------------

// misma funcion pero sin map
let arrayBajoNivel = [1,2,3];
let arrayBajoNivel2 = [];

for (let num of arraybajoNivel) {
    arrayAltoNivel2.push(num * 2);
}

console.log(arrayBajoNivel,arrayBajoNivel2);


//map

arrayAltoNivel= [1,2,3];
//funcion de flecha
arrayAltoNivel2 = arrayAltoNivel.map(item => item * 2);
console.log(arrayAltoNivel2);


// a partir de una array con años de nacimiento calcular edades 

const cumpleaños = [1980,1990,1974,1970];

edad = cumpleaños.map(num => 2021 - num);

console.log(edad);

// sin filter 
let prices = [150,50,49,51,15,237];
let expensiveprice = [];

for (let price of prices) {
    if (price >= 50) {
        expensiveprice.push(price);
    }
}

console.log(prices,expensiveprice);

//filter 

let prices = [150,50,49,51,15,237];

expensive = prices.filter(price => price >= 50);

console.log(expensive);

//-----------------------------------------

//filter/map con objrto
const cars = [
    {
        brand: "BMW",
        year: "1990",
        plateNumber: "1234WER"
    },
    {
        brand: "Mercedes",
        year: "2021",
        plateNumber: "4321REW"
    },
    {
        brand: "Volvo",
        year: "2020",
        plateNumber: "4431RoW",
    },
]

console.log(cars.filter(car => car.year > 2000));

console.log(cars.map(car => car.brand));
// console.log(cars.map(car => car.address.street));
cars.sort((car1,car2) => {car1.year - car2.year});
console.log(cars);

//reduce 

const arr1 = [10,7,13,20];
let suma = arr1.reduce((suma,item) => suma + item);

console.log(suma);



