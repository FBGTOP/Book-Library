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


addBook("The Hobbit");
addBook("Private Peaceful")
addBook("Something Something")
display(library);
