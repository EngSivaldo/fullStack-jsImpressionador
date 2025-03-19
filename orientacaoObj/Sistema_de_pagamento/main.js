import { CartaoDeCredito } from "./CartaoDeCredito.js";
import { Pix } from "./Pix.js";
import { Boleto } from "./BoletoBancario.js";

const cartaoDecredito = new CartaoDeCredito(
  150,
  "1234 5678 9012",
  "João Silva"
);
const pix = new Pix(200, "123.456.789-00");
const boletoBancario = new Boleto(100, "12345678 890123 234567 0 24456");

cartaoDecredito.realizarPagamento();
pix.realizarPagamento();
boletoBancario.realizarPagamento();

//quinto - principal cria as instancias das outras classes
