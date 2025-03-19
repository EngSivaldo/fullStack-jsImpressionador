import { Soldado } from "./Soldado.js";
import { Engenheiro } from "./Engenheiro.js";
import { Piloto } from "./Piloto.js";
import { Medico } from "./Medico.js";

const soldado = new Soldado("Maximus", 100, 30, 20, 10);
const engenheiro = new Engenheiro("Dr.Smith", 80, 25, 15, 20);
const piloto = new Piloto("Apollo", 90, 35, 10, 15);
const medico = new Medico("Sara", 70, 20, 10, 25);

soldado.atacar(engenheiro);
soldado.atacar(piloto);
medico.atacar(piloto);
engenheiro.atacar(piloto);
piloto.atacar(soldado);

console.log(soldado.energia);

//classe principal
