const div = document.getElementsByClassName("div")[0];
const p = document.createElement("p");
p.textContent="parrafo 1";
div.appendChild(p)

const newP = document.createElement("p");
newP.textContent="parrafo2";
div.appendChild(newP);


const button = document.querySelector("button");

button.addEventListener("click", function(){
    document.body.classList.toggle("button")
})


const listItem = document.getElementsByTagName("li");
const img = document.querySelector("img");


const changeImg = (e) => img.src = e.target.textContent;
listItem[0].addEventListener("click", changeImg); 
listItem[1].addEventListener("click", changeImg); 
listItem[2].addEventListener("click", changeImg); 
