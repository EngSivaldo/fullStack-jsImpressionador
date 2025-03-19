import { Personagem } from "./Personagem.js";

export class Engenheiro extends Personagem {
  constructor(nome, energia, poderAtaque, poderDefesa, habilidadeConserto) {
    super(nome, energia, poderAtaque, poderDefesa);
    this.habilidadeConserto = habilidadeConserto;
  }

  atacar(alvo) {
    const cura = this.habilidadeConserto;
    alvo.energia += cura;
    console.log(
      `${this.nome} curou ${alvo.nome} restaurando ${cura} de energia`
    );
  }
}

//terceiro / herda de Personagem
