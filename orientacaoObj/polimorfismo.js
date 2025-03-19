class Animal {
  fazerSom() {
    console.log("O animal fez um som");
  }
}

class Cachorro extends Animal {
  //Sobrescrita do método
  fazerSom() {
    console.log("O cachorro latiu");
  }
}

class Gato extends Animal {
  miadoDoGato() {
    console.log("O gato miou!");
  }
}

//Usa o Polimorfismo
const animal = new Animal();
const cachorro = new Cachorro();
const gato = new Gato();

// animal.fazerSom();
// cachorro.fazerSom();
// gato.fazerSom();
// gato.miadoDoGato();

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  calcularPrecoFinal() {
    return this.preco;
  }
}

class Livro extends Produto {
  constructor(nome, preco, autor) {
    super(nome, preco);
    this.autor = autor;
  }

  //Sobrescrita complexa
  calcularPrecoFinal() {
    let desconto = 0.1; // desconto de 10%
    let precoFinal = this.preco - this.preco * desconto;
    console.log(
      `${this.nome} (autor: ${this.autor}) custa R$${precoFinal.toFixed(2)}`
    );
    return precoFinal;
  }
}

class Eletronico extends Produto {
  constructor(nome, preco, marca) {
    super(nome, preco);
    this.marca = marca;
  }

  calcularPrecoFinal() {
    let taxaImposto = 0.2; // imposto será 20%
    let precoFinal = this.preco + this.preco * taxaImposto;
    console.log(
      `${this.nome} (marca: ${this.marca}) custa R$${precoFinal.toFixed(2)}`
    );
    return precoFinal;
  }
}

//Polimorfismo - mais complexo
const livro = new Livro("Javascript para inciantes", 50, "João Silva");
const eletronico = new Eletronico("Smartphone XYZ", 1200, "MarcaX");
livro.calcularPrecoFinal();
eletronico.calcularPrecoFinal();
