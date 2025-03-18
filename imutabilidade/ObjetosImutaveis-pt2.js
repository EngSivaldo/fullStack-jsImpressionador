//Exemplo - Representar Produto
const produto = {
  nome: "Notebook",
  preco: 2500,
  estoque: 30,
  //   detalhes: {
  //     categoria: "Computação",
  //   },
};

// const produto2 = { ...produto };
// produto2.detalhes.categoria = "TI";
// console.log(produto, produto2);

// Adicionar propriedade
const produtoCategoria = { ...produto, categoria: "Computação" };
console.log("Adicionar: ", produtoCategoria);

//Remover propriedade
const { estoque, ...produtoSemEstoque } = produtoCategoria;
console.log("Sem estoque: ", produtoSemEstoque);

//Atualizar propriedade
const produtoAtualizadoEstoque = { ...produtoCategoria, estoque: 50 };
console.log("Atualizar estoque: ", produtoAtualizadoEstoque);
const produtoAtualizadoPreco = { ...produto, preco: 3000 };
console.log("Atulizar preço:", produtoAtualizadoPreco);

console.log("Original: ", produto);

//Nova abordagem - Object.assign
//Criar uma cópia e atualizar propriedades
const produtoModificadoAssign = Object.assign({}, produto, {
  nome: "Tablet",
  preco: 2000,
});
console.log("produto modificado: ", produtoModificadoAssign);
console.log("Original: ", produto);
