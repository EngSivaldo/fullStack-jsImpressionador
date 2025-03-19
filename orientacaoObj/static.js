class Accounting {
  //Atributo estático
  static taxService = 200; // Taxa fixa

  constructor(clientName, serviceType, hoursWorked) {
    this.clientName = clientName;
    this.serviceType = serviceType;
    this.hoursWorked = hoursWorked;
    this.totalCost = hoursWorked * Accounting.taxService; // Calcula com uma informção estática
  }

  //Método estático
  static showTaxService() {
    console.log(`A taxa fixa de serviço é R$${Accounting.taxService}`); // Não precisa de instância - não utiliza o this
  }
}

//Acessar o método estático sem criar uma isntância
Accounting.showTaxService();

const contract = new Accounting("Empresa X", "  Consultoria Tributária", 10);
console.log(contract.totalCost);
console.log(Accounting.taxService);
