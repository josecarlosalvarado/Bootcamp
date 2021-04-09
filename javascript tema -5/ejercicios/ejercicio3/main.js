//constructor 
function User(name,firstLastname,secodlastName,email,age,city,) {
    this.name = name;
    this.firstLastname = firstLastname;
    this.secodlastName = secodlastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = 0;
    this.incrementProducts = function() {
        this.productsCount++;
    };
    this.emptyProducts = function() {
        this.productsCount = 0;
    }

}

// data
const users = [
    new User("fran","gomez","fernandez","fgomez@gmail.com",35,"malaga"),
    new User("lucia","garcia","ruiz","lgarcia@gmail.com",41,"madrid"),
    new User("maria","nuñez","coronado","mnuñez@gmail.com",18,"albacete"),
];

//selectors
const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementButton = document.querySelector("#incrementButton");
const emptyButton = document.querySelector("#emptyButton");

// rellenar select con opciones

users.forEach(user => {
    const newOption = document.createElement("option");
    // rellena el select cin los nombres
    newOption.textContent = user.name;
    select.appendChild(newOption);
});

// rellenar la lista con la info de un usuario

function fillList(user) {
    list.innerHTML= "";

    for (const propertyName in user) {
        const value = user[propertyName];
    
        if (typeof value !== "function") {
            // console.log(`key: ${propertyName},value: ${users[0][propertyName]}`);
    
            const newListitem = document.createElement("li");
            newListitem.innerHTML = `<b>${propertyName}:</b> ${value}`;
            newListitem.classList.add("list-group-item")
            list.appendChild(newListitem);
        }
        
    }
}


fillList(users[0]);

function processProducts(e) {
    const selectUser = users.find(user => user.name === select.value);
    
    e.target === incrementButton ? selectUser.incrementProducts() : selectUser.emptyProducts();
    
    fillList(selectUser);
}

//añadir listeners
select.addEventListener("change", e => {
    const selectUser = users.find(user => user.name === select.value);
    fillList(selectUser);
});

incrementButton.addEventListener("click",processProducts);
emptyButton.addEventListener("click",processProducts);



// ejercicio 3 por segunda vez


//primero construimos el constructor 

function user(name, firstLastname,secodlastName,email,age,city) {
    this.name = name;
    this.firstLastname = firstLastname;
    this.secodlastName = secodlastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = 0;
    this.incrementProducts = function() {
        this.productsCount++;
    };
    this.emptyProducts = function() {
        this.productsCount = 0;
    } 

}

//data 

const users = [
    new User("fran","gomez","fernandez","fgomez@gmail.com",35,"malaga"),
    new User("lucia","garcia","ruiz","lgarcia@gmail.com",41,"madrid"),
    new User("maria","nuñez","coronado","mnuñez@gmail.com",18,"albacete"),
];

//selectores 

const select = document.getElementById("userSelect");
const userInfo = document.getElementById("userInfo");
const incrementButton = document.getElementById("incrementButton");
const emptyButton = document.getElementById("emptyButton");

//rellenar el select

users.forEach(user => {
    const newOption = document.createElement("opcion");
    newOption.textContent = user.name;
    select.appendChild(newOpcion);
});

// rellenar la lista 


function fillList(user) {
    list.innerHeight = "";

    for (const propertyName in user) {
        const value = user[propertyName];

        if (typeof value !== "function") {
            // creamos <li> en y la añadimos en una varible
            const newListitem = document.createElement("li");
            newListitem.innerHTML = `<b>${propertyName}:</b>${value}`;
            //añadideros un atributo a cada li
            newListitem.classList.add("list-group-item")
            list.appendChild(newListitem)
        }
    }

}

fillList(users[0]);

function processProducts(e) {
    // para encontrar al usuario
    const selectUser = users.find(user => user.name === select.value);
    
    //para hacer incrementar o vaciar con un evento en el boton
    e.target === incrementButton ? selectUser.incrementProducts() : selectUser.emptyProducts();
    
    fillList(selectUser);
}

//añadir listeners
//para que aparexca la lista cada vez que cambiamos de nombre en el select
select.addEventListener("change", e => {
    // para encontrar al usuario
    const selectUser = users.find(user => user.name === select.value);
    fillList(selectUser);
});
// estos son los eventos de los botones 
incrementButton.addEventListener("click",processProducts);
emptyButton.addEventListener("click",processProducts);


