"use strict";

// x = 10;
// let x = 10;
// /console.log(x);

// function myFunction() {
//      "use strict";
//   b = 10;
//   console.log(b);
//   return b;
// }

// let somar = myFunction() + 5; // 15
// console.log(somar);

let objeto = {};
Object.defineProperty(objeto, "chave", {
  value: 42,
  enumerable: true, // descritores de propriedades
  writable: true, // propriedade que permite alteração quando true - se false não pode modificar
});

objeto.chave = 9;
console.log(objeto);
