const objectA = {
  id: 0,
  name: "João",
  lastName: "Lira",
};

const listA = [10, 2, 3, 456, 23, 1, 2, 34];

const listB = [...listA];

const objectB = { ...objectA, saldoBancario: 1_000_000_000_000 };

lista[2] = 652;
console.log(listB[2]);
console.log(listA[2]);

console.log(objectA);
console.log(objectB);

function sum(...list) {
  console.log([...list]);
}
