let library = [];

function Book(title, author, pages, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.rating = rating;
}

function addBook(title, author, pages, rating) {
    library.push(new Book (title, author, pages, rating));
    display(library);
}

function removeBook(target){
    const book = document.getElementById(`${target}`).parentNode;
    book.remove();
    let index = library.findIndex(index => index.title === `${target}`);
    if(index === -1){
        return
    }
    library.splice(index, 1);
}

function display(bookArray){

    const container = document.querySelector(".bookContainer");
    const book = document.createElement("div");
    const bookTitle = document.createElement("div");
    const bookAuthor = document.createElement("div");
    const bookPages = document.createElement("div");
    const bookRating = document.createElement("div");
    const removeBtn = document.createElement ("button");
    const readBtn = document.createElement ("button")
    removeBtn.addEventListener("click", (event)=>{
        removeBook(event.target.id);
    });

    bookArray.forEach(element => {

        book.classList.add("book");
        bookTitle.classList.add("bookTitle");
        bookAuthor.classList.add('bookAuthor');
        bookPages.classList.add("bookPages");
        bookRating.classList.add("bookRating");
        removeBtn.classList.add("removeBtn");
        readBtn.classList.add("readBtn");
        removeBtn.setAttribute("id", `${element.title}`);


        bookTitle.textContent = `${element.title}`;
        bookAuthor.textContent = `${element.author}`;
        bookPages.textContent = `${element.pages}`;
        bookRating.textContent = `${element.rating}`;
        

        book.append(bookTitle, bookAuthor, bookPages,bookRating, removeBtn, readBtn);
        container.append(book);
    });

}

//Dialog box activation
const bookForm = document.querySelector("dialog");
const showAddBook = document.getElementById("addBookBtn");
const closeAddBook = document.querySelector("dialog button")

showAddBook.addEventListener("click", () => {
    bookForm.showModal();
}
)

//Collect form data to object

const addTitle = document.querySelector("#title");
const addAuthor = document.querySelector("#author");
const addPages = document.querySelector("#pages");
const addRating = document.querySelector("#rating");
const bookSubmit = document.querySelector("#submit")

bookSubmit.addEventListener('click', (event) => {
    addBook(addTitle.value, addAuthor.value, addPages.value, addRating.value);
    bookForm.close();
});

