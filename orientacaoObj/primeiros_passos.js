class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`${this.nome} está falando e mandando um Oi`);
  }
}

const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Patricia", 25);

console.log(pessoa1);
console.log(pessoa2);

pessoa1.falar();
pessoa2.falar();

console.log(pessoa1.idade);
console.log(pessoa2.nome);
