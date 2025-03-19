// 3. Classe Author:
// ○ Deve representar o autor de um post.
// ○ Deve conter os atributos: nome e uma lista de posts (objetos da classe Post).
// ○ Deve possuir um método chamado criarPost, que cria e retorna uma
// instância da classe Post, associando o autor à publicação e adicionando o post
// à lista do autor.

class Author {
  constructor(nome) {
    this.nome = nome;
    this.posts = []; // Lista de posts criado pelo autor
  }

  criarPost(titulo, conteudo) {
    const novoPost = new Post(titulo, conteudo, this); // O autor é asspciado ao post
    this.posts.push(novoPost); // Adicionar o post a lista do autor
  }

  listarPosts() {
    return this.posts.map((post) => post.titulo);
  }
}
