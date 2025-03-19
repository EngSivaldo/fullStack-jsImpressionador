// #
class Produto {
  #estoque; //Atributo Privado
  constructor(nome, preco, quantidadeInicial) {
    this.nome = nome; // Público
    this.preco = preco; // Público
    this.#estoque = quantidadeInicial;
  }

  //Método público para consultar o estoque
  consultarEstoque() {
    return `O produto ${this.nome} tem ${this.#estoque} unidades em estoque`;
  }

  //Método público para adicionar um valor ao estoque
  adicionarEstoque(quantidade) {
    if (quantidade > 0) {
      this.#estoque += quantidade;
      console.log(`Adicionando ${quantidade} unidades ao estoque do produto`);
    } else {
      console.log("A quantidade precisa ser maior que zero");
    }
  }

  //Método Privado
  #calcularDesconto(percentual) {
    return this.preco - (this.preco * percentual) / 100;
  }

  //Método público que utiliza o método #calcularDesconto
  obterPrecoComDesconto(percentual) {
    return `O preço com desconto de ${percentual}% é R$ ${this.#calcularDesconto(
      percentual
    ).toFixed(2)}`;
  }
}

const produto = new Produto("Notebook", 3000, 10);
// console.log(produto.quantidadeInicial); // Não temos acesso porque não é público.
// console.log(produto.consultarEstoque());
// produto.adicionarEstoque(15);
console.log(produto.obterPrecoComDesconto(10));
