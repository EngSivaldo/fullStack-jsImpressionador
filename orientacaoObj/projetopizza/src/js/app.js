import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

document.addEventListener("DOMContentLoaded", () => {
  // Criar o formulário
  const form = new Form();
  form.element.id = "pizza-order-form";

  // Adicionar campos/filhos ao formulário
  const nameLabel = new Label("Nome: ");
  const nameInput = new Input("text", "Digite o seu nome");

  form.addChild(nameLabel);
  form.addChild(nameInput);

  const pizzaLabel = new Label("Escolha seu sabor de pizza: ");
  const pizzaInput = new Input("text", "Ex: Calabresa, Marguerita...");

  form.addChild(pizzaLabel);
  form.addChild(pizzaInput);

  const quantityLabel = new Label("Quantidade: ");
  const quantityInput = new Input("number", "Ex: 2, 3, 1/2...");

  form.addChild(quantityLabel);
  form.addChild(quantityInput);

  // Adicionar o formulário à página
  form.render(document.body);
});
