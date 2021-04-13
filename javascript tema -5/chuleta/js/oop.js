console.clear();

// antes de ES6
function Car( brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getAge = function() {
        let age = new Date().getFullYear() - this.year; 
        console.log(`this ${this.brand} ${this.model} is ${age} years old`);

    }
}
let myCar = new Car ("ford", "mustang" ,1990);
let myCar2 = new Car ("Audi", "q7" ,2015);


myCar.getAge();

console.log(myCar,myCar2);

Car.getHp = function() {  // no actualiza las instancias
    console.log("This car has 300 horsepower");
}


// myCar.getHp = function() {  // solo modifica la instancia myCar
//     console.log("This car has 300 horsepower");
// }

Car.prototype.getHp = function() {  // solo modifica la instancia myCar
    console.log("This car has 400 horsepower");
}

myCar.getHp();
myCar2.getHp();

function Suv(brand, model, year, width, height) {
    Car.call(this,brand, model, year); 
    this.width = width;
    this.height = height;
}

Suv.prototype = Object(Car.prototype);

let mySuv = new Suv("Audi", "Q3", 2017, 2200, 2000);
console.log(mySuv);

mySuv.getAge();
mySuv.getHp();


//-------------------------------------ES6-------------------------------------------

//despues de ES6

console.log("despues de ES6-------------------------");

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        console.log(`${this.title} was written by ${this.author} in ${this.year}`);
    }
    getType() {
        console.log("I'm a normal book");
    }
}

const Book1 = new Book("Metarmophosis","franz Katfa",1915);

console.log(Book1);
Book1.getSummary();


//subclases (herencia)

class Magazine  extends Book{

    constructor(title, author, year, month) {
        super(title,author,year);
        this.month = month;
    }

    getType() {
        super.getType();
        console.log("I'm a magazine");
    }
}

//instanciamos una revista 

const mg1 = new Magazine("Super Pop", "Algun loco", 2015,);
mg1.getSummary();

mg1.getType();



//ejemplo con animales (polimorfismo)
console.log("EJEMPLO ANIMALES");

class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }

    //esto es una funcion
    makeSound() {
        console.log(`This ${this.type} named ${this.name} goes ${this.sound}`);
    }

}

class Feline extends Animal {
    constructor(type,name) {
        super(type,name,"miau")
    }
}

class Cat extends Feline {
    constructor(name) {
        super("cat",name);
    }
}

class Dog extends Animal {
    constructor(name) {
        super("Dog",name,"Woof");
    }
}

const conBotas = new Cat("con botas");
const manolo = new Dog("manolo");
const danko = new Dog("Danko");

conBotas.makeSound();
manolo.makeSound();
danko.makeSound();






