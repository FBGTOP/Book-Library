let library = [];

function Book() {

}

function addBook(title) {
    library.push(title);
}

function display(array){
    array.forEach(element => {
        const container = document.querySelector(".bookContainer");

        const book = document.createElement("div");
        book.classList.toggle('book');
        book.textContent = `${element}`;

        container.appendChild(book);
    });
}

const bookForm = document.querySelector("dialog");
const showAddBook = document.getElementById("addBookBtn");
const closeAddBook = document.querySelector("dialog button")

showAddBook.addEventListener("click", () => {
    bookForm.showModal();
}
)

closeAddBook.addEventListener("click", () => {
    bookForm.close();
})



addBook("The Hobbit");
addBook("Private Peaceful")
addBook("Something Something")
display(library);
