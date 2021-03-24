//------------------------DOM------------------------

// basic
console.log(document);
console.log(document.URL);
console.log(document.domain);
document.title += "(DOM)"
console.log(document.title);

// selectors

const family = document.getElementsByTagName("div");
console.log(family);

const grandParent = document.getElementById("grandparent")
console.log(grandparent);

const parents = document.getElementsByClassName("parent");
const parent1 = parents[0];
const parent2 = parents[1];

console.log(parent1, parent2);

const children = document.getElementsByClassName("child");
console.log(children);

let element = document.querySelectorAll("grandparent div");
console.log(element);


parent1.style.backgroundColor = "#ddd";














// Array.from(family).forEach(item => console.log(item)); //construyo una array
// for (let familyMember of family) {
//     console.log(familyMember);
// }