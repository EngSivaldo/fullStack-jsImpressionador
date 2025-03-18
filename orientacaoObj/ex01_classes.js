class Member {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  authenticate(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login bem-sucedido");
    } else {
      console.log("Falha no login. Email ou senha incorretos");
    }
  }
}

class Item {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantityAvailable = 0;
  }

  addToInventory(quantity) {
    this.quantityAvailable += quantity; // quantityAvailable = quantityAvailable + quantity;
  }

  applyOffer(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

// Testa as nossas classes
//Criar um membro
const alice = new Member("Alice Johson", "alice@email.com", "passwaord123");
console.log(alice instanceof Member);

alice.authenticate("alice@email.com", "passwaord123"); // Login sucedido!
alice.authenticate("alice@email.co", "passwaord123"); // Falha!

//Criar Item
const chair = new Item(
  "Cadeira de Escritório",
  "Cadeira confortável Preta",
  120
);
console.log(chair instanceof Item);
console.log(chair instanceof Member);

chair.addToInventory(50);
console.log(chair.quantityAvailable);
chair.addToInventory(50);
console.log(chair.quantityAvailable);

console.log(chair.applyOffer(20));
console.log(chair.applyOffer(10));
