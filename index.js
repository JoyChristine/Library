let myLibrary = [];

//constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let addbtn = document.querySelector(".mybtn");
let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".form-close");

addbtn.addEventListener("click", showModal);
closeButton.addEventListener("click", hideModal);

function showModal() {
    modal.style.display = "block";
}

function hideModal() {
    modal.style.display = "none";
}