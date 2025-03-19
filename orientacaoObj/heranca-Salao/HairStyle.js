//Subclasse de Staff
import Staff from "./Staff.js";

export default class HairStyle extends Staff {
  constructor(name, monthlySalary, specialties) {
    super(name, "Cabeleiro(a)", monthlySalary);
    this.specialties = specialties; // Array de especialidades
  }

  #getSpecialties() {
    return `Especialidades: ${this.specialties.join(", ")}.`;
  } // método privado

  getInfo() {
    return `${super.getInfo()}, ${this.#getSpecialties()}`;
  }
}
