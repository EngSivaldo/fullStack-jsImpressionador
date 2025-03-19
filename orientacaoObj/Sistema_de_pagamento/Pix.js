import { Pagamento } from "./Pagamento.js";

export class Pix extends Pagamento {
  constructor(valor, chavePix) {
    super(valor);
    this.chavePix = chavePix;
  }

  realizarPagamento() {
    console.log(
      `Pagamento realizado via pix no valor de
       R$${this.valor} da chave ${this.chavePix}`
    );
  }
}
//quarto
