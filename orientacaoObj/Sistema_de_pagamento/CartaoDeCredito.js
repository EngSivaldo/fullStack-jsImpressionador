import { Pagamento } from "./Pagamento.js";

export class CartaoDeCredito extends Pagamento {
  constructor(valor, numeroCartao, nomeTitular) {
    super(valor);
    this.numeroCartao = numeroCartao;
    this.nomeTitular = nomeTitular;
  }

  //Aplicar Poliformofismo sobrescrita
  realizarPagamento() {
    console.log(
      `Pagamento de R$${this.valor} realizado com o cartão de número 
      ${this.numeroCartao} que pertence ao titular ${this.nomeTitular}`
    );
  }
}
//segundo
