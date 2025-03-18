// Operador de Coalescência Nula (??) vs. Operador OR (||)

// Valores "Falsy": false, 0, "", null, undefined, NaN

let a = 0 || "default";
console.log(a);

let b = null ?? "default"; // undefined
console.log(b);

let contador = 0;
let padraoComOr = contador || 10;
let padraoComCoalesce = contador ?? 10;
console.log(padraoComOr);
console.log(padraoComCoalesce);

let nome = "";
let nomeUsuario = nome || "Usuário padrão";
console.log(nomeUsuario);

let nomeUsuario2 = nome ?? "Usuário padrão";
console.log(nomeUsuario2);

let idade = 0;
let idadeUsuario = idade ?? 18;
console.log(idadeUsuario);
