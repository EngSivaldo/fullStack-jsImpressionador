// Lista Original de livros
const books = [];

//Adicionar novos livros
const addBook = (listBooks, title, author) => {
  return [...listBooks, { title, author, status: "Disponível" }];
};

//Lista completa com livros adicionados
let listOfBooks = addBook(books, "Javascript Avançado", "Fulano");
listOfBooks = addBook(listOfBooks, "Imutabilidade em JS", "Beltrano");
listOfBooks = addBook(listOfBooks, "POO", "Beltrano");

//  Atualizar o status
const uptadeBookStatus = (listBooks, title, newStatus) => {
  return listBooks.map((book) =>
    book.title === title ? { ...book, status: newStatus } : book
  );
};

let listOfBooks2 = uptadeBookStatus(
  listOfBooks,
  "Javascript Avançado",
  "Emprestado"
);

// Remover um livro pelo titulo
const removeBook = (listBooks, title) => {
  return listBooks.filter((book) => book.title !== title);
};

//Teste
console.log("Lista Completa1 atualizando ", listOfBooks);
console.log("Lista Completa2 atualizando ", listOfBooks2);
console.log(
  "Titulo removido: ",
  removeBook(listOfBooks2, "Imutabilidade em JS")
);
console.log("Original: ", books);
