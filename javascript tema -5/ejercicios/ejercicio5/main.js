
function Book(id,title,author,sales,price){
    this.id = id;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
}

// inicializar el array 

let books = [
    new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(2, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(3, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(4, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
    new Book(5, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(6, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(7, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(8, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
    new Book(9, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(10, "The God Delusion", "Richard Dawkins", 610120, 15),
]

//selectores
 const tbody = document.getElementById("tableBody");
 const titleInput = document.getElementById("titleInput");
 const authorInput = document.getElementById("authorInput");
 const salesInput = document.getElementById("salesInput");
 const priceInput = document.getElementById("priceInput");
 const addBookButton = document.getElementById("addBookButton");

function updateTable() {
    // vaciamos el tbody por completo
    tbody.innerHTML = "";
    // generamos de nuevo todas las filas
    books.forEach(book => {
        tbody.innerHTML  += 
        `<tr>
           <td>${book.id}</td>
           <td>${book.title}</td>
           <td>${book.author}</td>
           <td>${book.sales}</td>
           <td>${book.price}</td>
           <td>
                <button id="${book.id}" class="btn btn-danger">Remove</button>
            </td>
         </tr>`;
         
    });
}


tbody.onclick = e => {
    if (e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        updateTable();
    }
 };

 updateTable();

// function updateTable(){
// tbody.innerHTML = "";

//     books.forEach(book => {

//         const newtr = document.createElement("tr");

//         for (let property in book) {
//             const newtd = document.createElement("td");
//             newtd.textContent = book[property],
//             newtr.appendChild(newtd);
//         }
//         const newRemovebutton = document.createElement("button");
//         newRemovebutton.classList.add("btn","btn-danger");
//         newRemovebutton.id = book.id;
//         newRemovebutton.textContent = "Remove";
//         newRemovebutton.addEventListener("click",e => {
//             books = books.filter(book => book.id != e.target.id);
//             updateTable();
//         });
//         newtr.appendChild(newRemovebutton);

//         tbody.appendChild(newtr);
//     });
// }

// updateTable();

// proceso añadir nuevo libro a la tabla

addBookButton.addEventListener("click", e => {
    e.preventDefault(); //el comportamiento por defecto lo desactiva en este caso el recargar la pagina no lo hace

    const newid = books[books.length - 1].id + 1;

    books.push(new Book(
            newid, 
            titleInput.value, 
            authorInput.value, 
            salesInput.value, 
            priceInput.value
        ));

        updateTable();

        // titleInput.value = "";
        // authorInput.value = "";
        // salesInput.value = "";
        // priceInput.value = "";
        addBookButton.parentNode.reset();
});

