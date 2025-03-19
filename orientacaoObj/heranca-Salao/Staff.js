// Superclasse - caracteristicas em comum
export default class Staff {
  constructor(name, role, monthlySalary) {
    this.name = name;
    this.role = role;
    this.monthlySalary = monthlySalary;
  }

  getMonthlySalary() {
    return this.monthlySalary;
  }

  getInfo() {
    return `${this.name} trabalha como ${this.role}`;
  }
}
