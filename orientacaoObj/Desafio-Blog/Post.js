// 1. Classe Post:
// ○ Deve representar uma publicação no blog.
// ○ Deve conter os atributos: título, conteúdo, data de publicação, e autor (que será
// uma instância da classe Author).
// ○ Deve conter um array de comentários (objetos da classe Comment).
// ○ Deve possuir um método chamado adicionarComentario, que recebe uma
// instância da classe Comment e a adiciona à lista de comentários.

class Post {
  constructor(titulo, conteudo, autor) {
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.autor = autor; // Instância da classe Author - objeto
    this.comentarios = []; // Lista de comentários do post
    this.data = new Date();
  }

  adicionarComentario(comentario) {
    this.comentarios.push(comentario); // Adicionar um comentário a lista
  }

  listaComentarios() {
    return this.comentarios.map(
      (comentario) => `${comentario.autor}: ${comentario.conteudo}`
    );
  }
}
