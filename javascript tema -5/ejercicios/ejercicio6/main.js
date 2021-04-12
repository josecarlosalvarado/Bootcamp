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



const tbody = document.getElementById("tableBody");
const tFoot = document.getElementById("tfoot");
const buscadorInput = document.getElementById("buscadorInput");
const botonOrdenar = document.getElementById("botonOrdenar");
const botonOrdenarInvers = document.getElementById("botonOrdenarInvers");

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

 function filtrarTabla() {
     books = books.filter(books => books.title === buscadorInput.value)
     updateTable();
 }

 buscadorInput.addEventListener("input",filtrarTabla);


 function ordenarTabla() {
    books.sort(function(book1,book2) {
        if (book1.price > book2.price) {
            return 1;
        }else if (book1.price < book2.price) {
            return -1;
        }
        
        
    })
    updateTable();
 }

 botonOrdenar.addEventListener("click",ordenarTabla);
 

 updateTable();
