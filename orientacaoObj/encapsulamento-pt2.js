class Processo {
  #numeroProcesso; // Atributo Privado - proteger esse dado
  constructor(cliente, numero) {
    this.cliente = cliente;
    this.#numeroProcesso = this.#validarNumero(numero) ? numero : null; //Privado
  }

  //Método privado para validar o número do processo
  #validarNumero(numero) {
    const regex = /^[0-9]{6}-[0-9]{4}$/; // Exemplo de formata: 123456-7890 (6digitos-4digitos)
    if (regex.test(numero)) {
      return true;
    } else {
      console.log("Número de processo inválido");
      return false;
    }
  }

  //Método público para acessar o número do processo
  obterNumeroProcesso() {
    return this.#numeroProcesso
      ? `Número do processo: ${this.#numeroProcesso}`
      : `Número do processo está indisponível`;
  }
}

//Exemplo de uso
const processo = new Processo("Maria Silva", "120987-7800");
// console.log(processo.obterNumeroProcesso());

// const processo2 = new Processo("Augusto Lima", "876543-0987");
// console.log(processo2.obterNumeroProcesso());
processo.numeroProcesso = 10;
console.log(processo.obterNumeroProcesso());
