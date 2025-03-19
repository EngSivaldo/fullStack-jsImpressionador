import { Author } from "./Author.js";
import { Comment } from "./Comment.js";

// Criar um autor
const autor1 = new Author("Marcos Silva");
// console.log(autor1);

// Criar posts para o autor
const post1 = autor1.criarPost(
  "Introduçaõ ao Javascript",
  "Este é um conteúdo sobre fundamentos do Javascript"
);

const post2 = autor1.criarPost(
  "Dicas de CSS",
  "Aqui estão algumas dicas úteis de estilização"
);

//Adicionar comentários ao post
const comentario1 = new Comment("Ana", "Javascript é incrível mesmo!");
const comentario2 = new Comment("José", "Uau adorei o conteúdo!");

// console.log(post1 instanceof Author);

post1.adicionarComentario(comentario1);
post1.adicionarComentario(comentario2);

// Exibir os posts do autor
console.log(`Post de ${autor1.nome}: `, autor1.listarPosts());

//Exibir os comentários do primeiro post1
console.log(`Comentários do post: ${post1.listaComentarios()}`);
