class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

const produto = new Product("Notebook", 3000, 10);
const carro = new Car("Toyota", 30000);

console.log(produto instanceof Product);
console.log(produto instanceof Car);
console.log(carro instanceof Car);

class Eletronic extends Product {
  constructor(name, price, quantity, brand) {
    super(name, price, quantity);
    this.brand = brand;
  }
}

const laptop = new Eletronic("Laptop", 5000, 5, "Dell");
console.log(laptop instanceof Eletronic);
console.log(laptop instanceof Product);
console.log(laptop instanceof Car);

//ADICIONAR MÉTODOS NA CLASSE JÁ PRONTA - incomum
Product.prototype.getPrice = function () {
  console.log(this.price);
};

produto.getPrice();
console.log(produto);
console.log(Product.getPrice);

// Exibindo o protótipo para ver os métodos
console.log(Object.getPrototypeOf(produto));
