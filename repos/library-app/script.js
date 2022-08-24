const myLibrary = [];

function Book(name, author, pages) {
  (this.name = name),
    (this.author = author),
    (this.pages = pages),
    (this.isRead = false),
    (this.info = () => {
        return `${this.name} by ${this.author}, ${this.pages} pages, ${this.isRead}`
      
    });
}

let book1 = new Book("Atomic Habits", "James Clear", 400);
let book2 = new Book("1984", "George Orwell", 500)
myLibrary.push(book1)
myLibrary.push(book2)
console.log(myLibrary[0])

function addBookToLibrary() {

}

const bookShelf = document.querySelector(".book-shelf");

function createNodeElement(book) {

  let card = document.createElement("div");
  card.classList.add("card");
  let cardContent = document.createElement("div");
  cardContent.insertAdjacentHTML("afterbegin", `
    <h4>Title: ${book.name}</h4>
    <h4>Author: ${book.author}</h4>
    <h4>Pages: ${book.pages}<h4/>
    <h4>Status: ${book.isRead}<h4/>
    <h5>Info: ${book.info()}<h5/>
  `)
  cardContent.classList.add("card-content");

  let closeButton = document.createElement("div");
  let button = document.createElement("button");
  button.innerText = "x";
  closeButton.classList.add("close");

  closeButton.appendChild(button);
  card.appendChild(closeButton);
  card.appendChild(cardContent);
  bookShelf.appendChild(card);
}
createNodeElement(book1);

let card = document.querySelector(".card")
card.innerHTML = ""

function cloneCard() {
    let clone = card.cloneNode(true);
    bookShelf.appendChild(clone)
}
cloneCard()

function displayBook() {}

displayBook();



const addButton = document.querySelector(".add button")
addButton.addEventListener("click", openForm)

function openForm() {
    
}