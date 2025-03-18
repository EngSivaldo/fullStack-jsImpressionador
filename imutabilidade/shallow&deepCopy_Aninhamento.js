const originalFinanceiro = {
  mes: "Janeiro",
  receitas: 10000,
  despesas: 7000,
  detalhes: {
    clientesAtendidos: 50,
    filial: "Centro",
  },
  //   detalhes: {
  //     clientesAtendidos: 50,
  //     filial: "Centro",
  //   },
  //   detalhes: {
  //     clientesAtendidos: 50,
  //     filial: "Centro",
  //   },
};

// Shallow Copy - Cópia Rasa- Superficial
// const copiaRasaFinanceiro = { ...originalFinanceiro };
// copiaRasaFinanceiro.mes = "Fevereiro";
// copiaRasaFinanceiro.detalhes.filial = "Zona Sul";

// console.log("Original: ", originalFinanceiro);
// console.log("Cópia Rasa: ", copiaRasaFinanceiro);

// Deep Copy - Cópia Profunda
const copiaProfundaFinanceiro = JSON.parse(JSON.stringify(originalFinanceiro));

copiaProfundaFinanceiro.mes = "Março";
copiaProfundaFinanceiro.detalhes.filial = "Zona Norte";

console.log("Profunda: ", copiaProfundaFinanceiro);
console.log("Original: ", originalFinanceiro);
