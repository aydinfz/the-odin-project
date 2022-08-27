const myLibrary = [] || JSON.parse(localStorage.getItem("books"), undefined, 4) 

function Book(name, author, pages, status = "not started") {
    (this.name = name),
    (this.author = author),
    (this.pages = pages),
    (this.status = status),
    (this.info = () => {
        return `${this.name} by ${this.author}, ${this.pages} pages, ${this.status}`
      
    });
}

const bookShelf = document.querySelector(".book-shelf");

function createNodeElement(book, id) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", id)
  let cardContent = document.createElement("div");
  cardContent.insertAdjacentHTML("afterbegin", `
    <h4>Title: ${book.name}</h4>
    <h4>Author: ${book.author}</h4>
    <h4>Pages: ${book.pages}<h4/>
    <h4>Status: ${book.status}<h4/>
    <h5>Info: ${book.info}<h5/>
  `)
  cardContent.classList.add("card-content");

  let closeButton = document.createElement("div");
  let button = document.createElement("button");
  button.innerText = "x";
  button.setAttribute("onclick", `removeBook(${id})`)
  closeButton.classList.add("close");

  closeButton.appendChild(button);
  card.appendChild(closeButton);
  card.appendChild(cardContent);
  bookShelf.appendChild(card);
}

function removeBook(id) {
    myLibrary.splice(id, 1)
    localStorage.setItem("books", JSON.stringify(myLibrary))
    displayBook()
}
//createNodeElement(book1);

/* let card = document.querySelector(".card")
card.innerHTML = ""

function cloneCard() {
    let clone = card.cloneNode(true);
    bookShelf.appendChild(clone)
}
cloneCard() */

function displayBook() {
    bookShelf.innerHTML = ""
    const arr = localStorage.getItem("books")
    return arr == null ? [] : JSON.parse(arr, undefined, 4).forEach((el, ind) => createNodeElement(el, ind)) 
}

displayBook();



const addButton = document.querySelector(".add button")
const popup = document.querySelector(".popup")


addButton.addEventListener("click", () => {
    popup.style.visibility = "visible"
})

document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(popup) && !e.composedPath().includes(addButton)) {
        popup.style.visibility = "hidden"
    }
})


const form = document.querySelector('form');
/* 
const output = document.getElementById('output');
} */


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    let name = formData.get("name")
    let author = formData.get("author")
    let pages = formData.get("pages")
    let status = formData.get("status")
    let newBook = new Book(name, author, pages, status) 
    newBook.info = newBook.info()
    createNodeElement(newBook, myLibrary.length)
    myLibrary.push(newBook)
    localStorage.setItem("books", JSON.stringify(myLibrary))
    popup.style.visibility = "hidden"
    form.reset()
})

