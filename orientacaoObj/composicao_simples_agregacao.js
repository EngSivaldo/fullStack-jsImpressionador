// Composição - Simples
class Pagina {
  constructor(numero) {
    this.numero = numero;
  }
}

class Livro {
  constructor(titulo) {
    this.titulo = titulo;
    this.paginas = []; // Composição páginas
  }

  adicionarPagina(numero) {
    const pagina = new Pagina(numero);
    this.paginas.push(pagina);
  }
}

const livro = new Livro("Javascript Básico");
livro.adicionarPagina(1);
livro.adicionarPagina(2);
console.log(`O livro ${livro.titulo} tem ${livro.paginas.length} páginas`);

// Associação 1: Muitos (N)
class Pedido {
  constructor(descricao) {
    this.descricao = descricao;
  }
}

class Cliente {
  constructor(nome) {
    this.nome = nome;
    this.pedidos = [];
  }

  adicionarPedido(pedido) {
    this.pedidos.push(pedido);
  }

  listarPedidos() {
    return this.pedidos.map((pedido) => pedido.descricao);
  }
}

const cliente = new Cliente("João");
cliente.adicionarPedido(new Pedido("Pedido #1"));
cliente.adicionarPedido(new Pedido("Pedido #2"));
console.log(`Pedidos de ${cliente.nome}:`, cliente.listarPedidos());
