import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";
import { Button } from "./Button.js";

document.addEventListener("DOMContentLoaded", () => {
  // Criar o formulário
  const form = new Form();
  form.element.id = "pizza-order-form";

  // Adicionar campos/filhos ao formulário
  const nameLabel = new Label("Nome: ");
  const nameInput = new Input("text", "Digite o seu nome");
  nameInput.element.id = "name";

  form.addChild(nameLabel);
  form.addChild(nameInput);

  const pizzaLabel = new Label("Escolha seu sabor de pizza: ");
  const pizzaInput = new Input("text", "Ex: Calabresa, Marguerita...");
  pizzaInput.element.id = "pizza";

  form.addChild(pizzaLabel);
  form.addChild(pizzaInput);

  const quantityLabel = new Label("Quantidade: ");
  const quantityInput = new Input("number", "Ex: 2, 3, 1/2...");
  quantityInput.element.id = "quantity";

  form.addChild(quantityLabel);
  form.addChild(quantityInput);

  //criar e adicionar botao de envio
  const submitButton = new Button("Fazer Pedido");
  form.addChild(submitButton);

  //evento de submissao do formulario
  form.element.addEventListener("submit", (event) => {
    event.preventDefault(); //evita o recarregamento da pagina
    const pedido = {
      nome: nameInput.element.value,
      pizza: pizzaInput.element.value,
      quantidade: quantityInput.element.value,
    };
    //salvar no localStorage
    localStorage.setItem("ultimoPedido", JSON.stringify(pedido));
    alert("Pedido salvo com sucesso!");
  });

  // Adicionar o formulário à página
  form.render(document.body);
});
