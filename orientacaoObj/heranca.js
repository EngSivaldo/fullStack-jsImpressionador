// Classe Pai - classe filha
// SuperClasse - subclasse - extends

//Classe base (superclasse)

class Employee {
  constructor(name, role, baseSalary) {
    this.name = name;
    this.role = role;
    this.baseSalary = baseSalary;
  }

  getAnnualSalary() {
    return this.baseSalary * 12;
  }
}

//Classe subclasse : Desenvolvedor
class Developer extends Employee {
  constructor(name, baseSalary, programmingLanguage) {
    super(name, "Developer", baseSalary); // this.name = name
    this.programmingLanguage = programmingLanguage;
  }

  getInfo() {
    return `${this.name} trabalha como Desenvolvedor e programa em ${this.programmingLanguage}`;
  }
}

const desenvolvedor = new Developer("Thiago", 3000, "Javascript");
const desenvolvedor2 = new Developer("Ana", 5000, "Python");
// console.log(desenvolvedor.getInfo());
// console.log(desenvolvedor2.getInfo());

// Subclasse - Gerente
class Manager extends Employee {
  constructor(name, baseSalary, teamSize) {
    super(name, "Manager", baseSalary);
    this.teamSize = teamSize;
  }

  getInfo() {
    return `${this.name} é Gerente e lidera uma equipe de ${this.teamSize} pessoas`;
  }
}

const gerente1 = new Manager("Carlos", 2500, 15);
console.log(gerente1.getInfo());
console.log(gerente1.getAnnualSalary());

console.log(gerente1 instanceof Manager);
console.log(gerente1 instanceof Employee);