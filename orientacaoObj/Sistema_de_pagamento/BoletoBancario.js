import { Pagamento } from "./Pagamento.js";

export class Boleto extends Pagamento {
  constructor(valor, codigoBarras) {
    super(valor);
    this.codigoBarras = codigoBarras;
  }

  realizarPagamento() {
    console.log(
      `Pagamento realizado com boleto bancario no valor de
       R$${this.valor} com codigo de barras ${this.codigoBarras}`
    );
  }
}

//terceiro
