//Lista inicial de contatos
// const contacts = [{ name: "Ana", phone: "1234-5678" }];
const contacts = [];

//Adicionar novos contatos
const addContact = (contacts, name, phone) => {
  return [...contacts, { name, phone }]; // name: name, phone: phone -> {name, phone}
};

// Atualizar o telefone de um contato existente
const updateContact = (contacts, name, newPhone) => {
  return contacts.map((contact) =>
    contact.name === name ? { ...contact, phone: newPhone } : contact
  );
};

const listaCompleta = addContact(contacts, "Pedro", "8765-4321");

//Remover um contato
const removeContact = (contacts, name) => {
  return contacts.filter((contact) => contact.name !== name);
};

//Teste
console.log(
  "Adicionando contato: ",
  addContact(contacts, "Pedro", "8765-4321")
);
// console.log(
//   "Lista atualizando telefone: ",
//   updateContact(contacts, "Pedro", "0000-0000")
// );

console.log(
  "Lista atualizando telefone: ",
  updateContact(listaCompleta, "Pedro", "0000-0000")
);

console.log("Remove do Original: ", removeContact(contacts, "Pedro"));
console.log(
  "Remove da lista completa: ",
  removeContact(listaCompleta, "Pedro")
);

console.log("Lista Original: ", contacts);

// addContact([{ name: 'Ana', phone: '1234-5678' }], 'Pedro', '8765-4321')
//[{ name: 'Ana', phone: '1234-5678' }, { name: 'Pedro', phone: '8765-4321' }]

//updateContact([{ name: 'Ana', phone: '1234-5678' }], 'Ana', '0000-0000')
//[{ name: 'Ana', phone: '0000-0000' }]

// removeContact([{ name: 'Ana', phone: '1234-5678' }], 'Ana')
// []
