let myLibrary = [];

function Book(title, author, genre, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.read = read;
}

function addBookToLibrary(id = crypto.randomUUID(), title, author, genre, read = false) {
    const book = new Book(title, author, genre, read);
    myLibrary.push(book);
}

addBookToLibrary("harry", "Jk", "fiction");
addBookToLibrary("oliver", "charles", "fiction");
console.log(myLibrary);

function info() {
    const existingOverlay = document.getElementById("infoDiv");
    if (existingOverlay) {
        existingOverlay.remove();
    }

    let infoDiv = document.createElement("div");
    infoDiv.id = "infoDiv";
    infoDiv.className = "overlay";

    let modal = document.createElement("div");
    modal.className = "modal";

    let closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "modal__close";
    closeButton.textContent = "×";
    closeButton.addEventListener("click", () => infoDiv.remove());

    let title = document.createElement("h2");
    title.textContent = "Add a New Book";

    let child1 = document.createElement("div");
    child1.id = "child1";
    child1.className = "child1";

    let child2 = document.createElement("div");
    child2.id = "child2";
    child2.className = "child2";

    let child3 = document.createElement("div");
    child3.id = "child3";
    child3.className = "child3";

    let child4 = document.createElement("div");
    child4.id = "child4";
    child4.className = "child4";

    let child5 = document.createElement("div");
    child5.id = "child5";
    child5.className = "child5";

    let titleLabel = document.createElement("label");
    titleLabel.htmlFor = "title";
    titleLabel.textContent = "Title";

    let titleInput = document.createElement("input");
    titleInput.id = "title";
    titleInput.type = "text";
    titleInput.placeholder = "Enter book title";

    child1.append(titleLabel, titleInput);

    let authorLabel = document.createElement("label");
    authorLabel.htmlFor = "author";
    authorLabel.textContent = "Author";

    let authorInput = document.createElement("input");
    authorInput.type = "text";
    authorInput.id = "author";
    authorInput.placeholder = "Enter author name";

    child2.append(authorLabel, authorInput);

    let genreLabel = document.createElement("label");
    genreLabel.htmlFor = "genre";
    genreLabel.textContent = "Genre";

    let genreSelect = document.createElement("select");
    genreSelect.id = "genre";

    let genres = ["Fiction", "Non-Fiction", "Fantasy", "Sci-Fi", "Mystery", "Biography", "Self-Help", "Other"];

    genres.forEach((g) => {
        let option = document.createElement("option");
        option.value = g;
        option.textContent = g;
        genreSelect.appendChild(option);
    });

    child3.append(genreLabel, genreSelect);

    let readCheckbox = document.createElement("input");
    readCheckbox.type = "checkbox";
    readCheckbox.id = "read";

    let readLabel = document.createElement("label");
    readLabel.htmlFor = "read";
    readLabel.textContent = "Already read";

    child4.append(readCheckbox, readLabel);

    let addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "modal__submit";
    addButton.textContent = "Add Book";

    addButton.addEventListener("click", () => {
        addBookToLibrary(
            crypto.randomUUID(),
            titleInput.value,
            authorInput.value,
            genreSelect.value,
            readCheckbox.checked
        );
        console.log(myLibrary);
        infoDiv.remove();
    });

    child5.append(addButton);

    modal.append(closeButton, title, child1, child2, child3, child4, child5);
    infoDiv.appendChild(modal);
    document.body.appendChild(infoDiv);

    infoDiv.addEventListener("click", (event) => {
        if (event.target === infoDiv) {
            infoDiv.remove();
        }
    });

    modal.addEventListener("click", (event) => event.stopPropagation());
}

document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("addButton");
    if (addButton) {
        addButton.addEventListener("click", info);
    }
});
