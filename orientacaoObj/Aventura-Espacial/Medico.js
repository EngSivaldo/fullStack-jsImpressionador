import { Personagem } from "./Personagem.js";

export class Medico extends Personagem {
  constructor(nome, energia, poderAtaque, poderDefesa, habilidadeCura) {
    super(nome, energia, poderAtaque, poderDefesa);
    this.habilidadeCura = habilidadeCura;
  }

  atacar(alvo) {
    const cura = this.habilidadeCura;
    alvo.energia += cura;
    console.log(`${this.nome} curou ${alvo.nome} com ${cura} de energia`);
  }
}
