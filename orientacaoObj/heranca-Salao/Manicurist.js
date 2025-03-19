import Staff from "./Staff.js";

export default class Manicurist extends Staff {
  constructor(name, monthlySalary, nailDesigns) {
    super(name, "Manicure", monthlySalary);
    this.nailDesigns = nailDesigns; // Array de designs disponíveis
  }

  getNailDesigns() {
    return `Oferece os desgins: ${this.nailDesigns.join(", ")}.`;
  }

  getInfo() {
    return `${super.getInfo()}. Cria desgins de unha como: ${this.nailDesigns.join(
      ", "
    )}`;
  }
}
