const produto = {
  nome: "Caneta",
  preco: 2.5,
  detalhes: {
    categoria: "Material Escolar",
    estoque: 100,
    // info: {
    //     chave: {

    //     }
    // }
  },
};

// Congelamento Superficial
Object.freeze(produto); // Congelamento o objeto no primeiro nível
console.log("Objeto congelado: ", produto);

// Tentar modificar os valores
produto.nome = "Lápis";
produto.detalhes.estoque = 50;

console.log("Tentativa de alteração após congelamento");
console.log("Produto: ", produto);

// Congelamento Produndo - Função
function deepFreeze(objeto) {
  Object.keys(objeto).forEach((key) => {
    if (typeof objeto[key] === "object" && objeto[key] !== null) {
      deepFreeze(objeto[key]); //detalhes
    }
  });

  return Object.freeze(objeto);
}

// console.log(Object.keys(produto));
const produtoCongelado = deepFreeze(produto); //Produto Original
produtoCongelado.detalhes.estoque = 30;
produtoCongelado.detalhes.novoCampo = "teste";
console.log("Tentando alterar congelamento profundo: ", produto);
