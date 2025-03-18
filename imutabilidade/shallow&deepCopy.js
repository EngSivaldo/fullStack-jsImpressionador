// Shallow Copy - Cópia Superficial

//Objeto Original
const produto = {
  nome: "Caderno",
  preco: 15.5,
  categoria: "Papelaria",
};

//Copia do Objeto
const produto2 = { ...produto };
produto2.nome = "Agenda";

console.log("Original: ", produto);
console.log("Cópia: ", produto2);

// Deep Copy - Cópia Profunda
const produto3 = JSON.parse(JSON.stringify(produto));
console.log("Produto Cópia profunda", produto3);
produto3.preco = 20.0;
console.log("Produto Cópia profunda", produto3);
console.log("Original: ", produto);