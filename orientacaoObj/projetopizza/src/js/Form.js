import { Component } from "./Component.js";

export class Form extends Component {
  constructor() {
    super("form");
    this.build();
  }

  addChild(component) {
    if (component instanceof Component) {
      this.element.appendChild(component.element);
    }
  }
}
