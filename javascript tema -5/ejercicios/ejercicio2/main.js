// Define e inicializa un array con 5 elementos string en una sola línea.


// definimos el array:

let variable1 = ["1","2","3","4","5"];

// inicializamos la array:

console.log(variable1);

console.clear();
// Define un array inicialmente vacío. Añade tres elementos de tipo number posteriormente. Elimina por
// completo el primero y añade dos nuevos números al inicio. En cada paso, imprime la longitud y el array
// entero por consola utilizando un string template del tipo: `Longitud: ${}`.

//definimos el array vacio

let arrayEjercicio2 = [];
console.log(arrayEjercicio2);

// posteriormente añadimos tres elementos a la array
arrayEjercicio2.push("hola","adios","buenas");
console.log(arrayEjercicio2);

//eliminamos por completo el primer elemento:
arrayEjercicio2.shift();
console.log(arrayEjercicio2);

//añadimos un elemento nuevo al pricipio:
arrayEjercicio2.unshift("hola de nuevo")
console.log(arrayEjercicio2);

console.clear();
// Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean y false en
// caso contrario. 


function funcionTipo(argumento) {
    return typeof argumento  === "boolean";

}
console.log(funcionTipo(true));
console.log(funcionTipo("true"));
console.log(funcionTipo(2));

console.clear();
// Escribe una función que devuelva la longitud de un string recibido por argumento.

//funcion que devuelve la longitud de una array
function funcionStr(str) {
     return str.length;
}

console.log(funcionStr("hola que tal"));

console.clear();
// Crea una función de flecha que reciba una cantidad de minutos y lo devuelva convertido en segundos.

//definimos lo segundos
let segundos = 60;

//hacemos una funcion de tipo flecha para pasar de minutos a segundos
const minutoSegundos = minuto => minuto * segundos;

console.log(minutoSegundos(2));

console.clear();
// Crea una función que reciba un número y devuelva el siguiente número par. (Si él es par, lo devolverá
// directamente).
//funcion que calcula si un numero es par, si es asi, lo escribe, si no, le sumamos 1
function numeroPar(num) {
    if (num % 2 == 0) {
        return "el numero es par";
    } else {
        return num + 1;

    }
}

console.log(numeroPar(3));

console.clear();

//Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes
// obviar los años bisiestos
//funcion que calcula los dias
function funcionAños(años) {
    return "has vivido", años * 365;
}
console.log(funcionAños(17));

console.clear();
//Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios arrays
// de diferentes longitudes.
const arrayLeght = (arrayLeght1) => arrayLeght1[arrayLeght1.length - 1];

console.log(arrayLeght(arrayLeght1));


//creamos una funcion que elimina el ultimo elemento de la funcion pero la pinta en la consola
function arrayEjercicio8(array){
    return console.log(array.pop());
   
}

console.log(arrayEjercicio8(["carlos","carla","javier"]));

console.clear();
// Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy
// frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). Tu función
// recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales. Ejemplo:

//hacemos un funcion para calcular cuantas patas hay en total
function numeroAnimales(pollos,vacas,cerdos,numero1,numero2,numero3,suma) {
    numero1 = pollos * 2;
    numero2 = vacas * 4;
    numero3 = cerdos * 4;
    suma = numero1 + numero2 + numero3;

    return suma

}

console.log(numeroAnimales(3,6,1));

console.clear();
// . Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo.

function funcionTipo(argumento1,argumento2) {
    if (typeof(argumento1) === typeof(argumento2)){
        return "los dos argumentos son del mismo tipo";
    }else{
        return "los tipos de los argumentos son diferentes";
    }
}

console.log(funcionTipo(7,"hola"));

console.clear();
// Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una
// palabra de la frase original. Investigar método existente de los strings para este fin.

function funcionString(cadenaADividir,separador) {
    let arrayDeCadenas = cadenaADividir.split(separador);
   return arrayDeCadenas;

}
let espacio = " ";
let cadenaVerso = "hola buenas tardes me llamo jose carlos";

console.log(funcionString(cadenaVerso,espacio));

console.clear();
// Inicializa dos objetos, address1 y address2 con las propiedades: provincia, ciudad, municipio, código
// postal, calle, número, planta, y número de puerta.

function funcionAddress(address1,address2) {
    return address1,address2;
   
}

console.log(["malaga","malaga","malaga",29067,"postal",2,4,6,1],["madrid","madrid","madrid",3636,"postal",4,6,8,3]);
console.clear();
// Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y de un TLD (toplevel domain) como, por ejemplo .com / .es / .org, etc. Crea una función que se llame parseDomain() que
// reciba por argumento un string y devuelva un objeto con dos propiedades: domain y tld. Ejemplo:

const parseDomain = function(x) {
    let arrayParse = x.split(".");
    Object = {
        Domain: arrayParse[0],
        TLD: arrayParse[1],
    }
    return Object;
}

console.log(parseDomain("goolge.es"));

console.clear();
// . Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando
// dicha esa funcionalidad. Crea una función que devuelva true si dos números tienen el mismo valor y el
// mismo tipo de dato. Debemos usar el operador lógico “&&”. Prueba tu función con dos estos inputs:

const strictEquality = (numerostrict1,numerostrict2) => numerostrict1 ==  numerostrict2 && numerostrict1 == typeof numerostrict2;

console.log(strictEquality("5",5));
console.log(strictEquality(5,5));

console.clear();
// Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso
// contrario

const funcionString2 = (str1, str2) =>  str1.length === str2.length;

console.log(funcionString2("hola buenas tardes","hola buenas"));

console.clear();
// . Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length.

function funcionVacio(stringVacio) {
    if (stringVacio === "") {
        return "el string esta vacio";
    }else {
        return "no esta vacio";
    }
}
console.log(funcionVacio("hola"));

// const isEmpty = function (strEmpty) {
//     return strEmpty === "" || strEmpty === undefined;
//      return strEmpty ? true : false;
// }

// console.log(isEmpty(""));
// console.log(isEmpty("algo"));
// console.log(isEmpty());
console.clear();
// 17








console.clear();
// Crea una función que reciba un string y un número N y devuelva el string original repetido N veces

function funcionRepetir(a,b,) {
    return (a.repeat(b));
}

console.log("hola buenas",3);

console.clear();
//Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva
// la cuenta final.

const funcionVotos = function(obj) {
    return obj.upVotes - obj.downVotes;
}

const votes = {upVotes: 35, downVotes: 15};

console.log(funcionVotos(votes));

console.clear();
// Crea una función que recibe un array de tipos de datos mezclados y que devuelva otro array con el tipo
// de cada uno de los elementos.

function funcionArray(tipoDatosMezclados,separador) { // sin terminar 
    typeof(tipoDatosMezclados[1]);
}

let separador = " ";
let tipoVerso = ["hola",3,{},0,[],""];

console.log(tipoVerso,separador);

console.clear();
//. Función que dado un array de números con formato string devuelva un array con los números ya
// parseados.

function funcionParse(arrayParse) {
    return Number.parseFloat(arrayParse);
}

console.log(funcionParse("15"));
console.log(funcionParse("1"));
console.log(funcionParse("5"));

console.clear();

// Crea una función de flecha que devuelva “Positivo” si el número que recibe por argumento es mayor o
// igual que cero y “Negativo” en caso contrario. Usa el operador ternario.

const ejercicio22 = (num) => num >= 0 ? "positivo" : "negativo";


// function ejercicio22(num) {
//     if(num >= 0){
//         return "positivo"
//     } else if(num < 0){
//         return "negativo"
//     }
// }

console.log(ejercicio22(5));

//23

const removeItem = (array, index) => array.splice(index,1);


//24
const filterItem = (array,numberFilter) => {

    array.forEach((element,index) => {

        if (element === numberFilter) {
            removeItem(array,index);
         }
    });
        
    
}
const arrayFilter = [1,5,6,7,5];
filterItem(arrayFilter,5);
console.log(arrayFilter);