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



