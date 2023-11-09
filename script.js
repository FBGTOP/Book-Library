let library = [];

function Book(title, author, pages, rating, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.rating = rating;
    this.read = read;
}

//setup Book protoype method to set read status
Book.prototype.toggleread = function(book) {
    book.read = !book.read;
    const bookCard = document.querySelector(`#${book.title}`);
    bookCard.parentNode.classList.toggle("read");    
}

//add book and update main container with new book card
function addBook(book) {
    library.push(book);
    let setRead = false;
    if(book.read){
        setRead = book.read;
    }
    display(library, setRead);
}

//remove book from array and main container.  If not found, do nothing
function removeBook(target){
    const book = document.getElementById(`${target}`).parentNode;
    book.remove();
    let index = library.findIndex(index => index.title === `${target}`);
    if(index === -1){
        return
    }
    library.splice(index, 1);
}

//Add books to the main container
function display(bookArray, readStatus){

    const container = document.querySelector(".bookContainer");
    const bookCard = document.createElement("div");
    const bookTitle = document.createElement("div");
    const bookAuthor = document.createElement("div");
    const bookPages = document.createElement("div");
    const bookRating = document.createElement("div");
    const removeBtn = document.createElement ("button");
    const readBtn = document.createElement ("input");
    const readBtnLabel = document.createElement ("label");


    removeBtn.addEventListener("click", (event)=>{
        removeBook(event.target.id);
    });

    //Loop through the array and find the book with same title as container
    //call to the book function to mark the book as read
    readBtn.addEventListener("click", (event) =>{
        library.forEach(book => {
            if (book.title === event.target.id){
                book.toggleread(book);
            };
        });
    });

    bookArray.forEach(element => {

        bookCard.classList.add("book");
        bookTitle.classList.add("bookTitle");
        bookAuthor.classList.add('bookAuthor');
        bookPages.classList.add("bookPages");
        bookRating.classList.add("bookRating");
        removeBtn.classList.add("removeBtn");
        removeBtn.setAttribute("id", `${element.title}`);
        removeBtn.textContent = "Remove book";
        readBtn.classList.add("toggle");
        readBtn.setAttribute("id",`${element.title}`);
        readBtn.setAttribute("type", "checkbox");
        readBtn.setAttribute("name", "slider");
        readBtnLabel.classList.add("switch");
        readBtnLabel.setAttribute("for", `${element.title}`);


        if(readStatus){
            bookCard.classList.add("read");
            readBtn.checked = true;
        }

        bookTitle.textContent = `${element.title}`;
        bookAuthor.textContent = `${element.author}`;
        bookPages.textContent = `${element.pages}`;
        bookRating.textContent = `${element.rating}`;
        readBtnLabel.textContent = "Read?"
        
        bookCard.append(bookTitle, bookAuthor, bookPages,bookRating, readBtn, readBtnLabel, removeBtn);
        container.append(bookCard);
    });

}

//Dialog box activation from add book button on main page
const bookForm = document.querySelector("dialog");
const showAddBook = document.getElementById("addBookBtn");

showAddBook.addEventListener("click", () => {
    bookForm.showModal();
}
)


//Collect form data to object and clear form
const addTitle = document.querySelector("#title");
const addAuthor = document.querySelector("#author");
const addPages = document.querySelector("#pages");
const addRating = document.querySelector("#rating");
const addStatus = document.querySelector("#slider");
const bookSubmit = document.querySelector("#submit");
const bookCancel = document.querySelector("#cancel");

bookCancel.addEventListener("click", () => {
    addTitle.value = "";
    addAuthor.value = "";
    addPages.value = "";
    addRating.value = "";
    addStatus.checked = false;
    bookForm.close()
})

bookSubmit.addEventListener('click', () => {
    // addBook(addTitle.value, addAuthor.value, addPages.value, addRating.value);
    addBook(new Book(addTitle.value,addAuthor.value,addPages.value,addRating.value, addStatus.checked));
    addTitle.value = "";
    addAuthor.value = "";
    addPages.value = "";
    addRating.value = "";
    addStatus.checked = false;
    bookForm.close();
});

addBook(new Book("Title", "Author", 1, 1, true));
addBook(new Book("Title2", "Author", 1, 1, false));