import Manicurist from "./Manicurist.js";
import HairStyle from "./HairStyle.js";

//Exemplo de uso
const stylist = new HairStyle("Ana", 3000, ["Corte", "Coloração", "Penteados"]);
const manicurist = new Manicurist("Beatriz", 2000, [
  "Francesinha",
  "Degrade",
  "Unha Artística",
]);

console.log(stylist.getInfo());
console.log(manicurist.getInfo());
console.log(stylist.getMonthlySalary());

console.log(manicurist.getNailDesigns());
