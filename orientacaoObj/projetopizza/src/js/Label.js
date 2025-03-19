import { Component } from "./Component.js";

export class Label extends Component {
  constructor(text) {
    super("label");
    this.build();
    this.element.textContent = text;
  }
}
