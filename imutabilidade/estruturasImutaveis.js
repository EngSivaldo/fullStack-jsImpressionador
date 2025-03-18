//Array Original
const lista = [1, 2, 3];

//Adicionar itens
const listaCopia = [...lista, 5];
listaCopia.push(4);
console.log("Copia:", listaCopia);
console.log("Original:", lista);

// Remover
const filtroElemento2 = lista.filter((item) => item !== 2);
console.log("Novo array:", filtroElemento2);
console.log("Original:", lista);

//Atualizar item
const updateArray = lista.map((item) => (item === 2 ? 20 : item));
console.log("Atualização", updateArray);
console.log("Original:", lista);

// Array com objeto
const produtos = [
  { id: 1, nome: "Produto A", preco: 10 },
  { id: 2, nome: "Produto B", preco: 15 },
  { id: 3, nome: "Produto C", preco: 10 },
];
//Adicionou
const novoPorduto = { id: 4, nome: "Produto D", preco: 20 };
const adicionarProduto = [...produtos, novoPorduto];
console.log("Novo:", adicionarProduto);
console.log("Original", produtos);

//Remover
const removerProduto = produtos.filter((produto) => produto.id !== 3);
console.log("Remover Produto:", removerProduto);
console.log("Original", produtos);

//Atualizar com Map
const updateProduto = produtos.map((produto) =>
  produto.id === 1 ? { ...produto, preco: 70 } : produto
);
console.log("Update:", updateProduto);
