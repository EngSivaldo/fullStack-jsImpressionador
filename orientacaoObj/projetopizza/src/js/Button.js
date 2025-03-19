import { Component } from "./Component.js";

export class Button extends Component {
  constructor(text) {
    super("button");
    this.build();
    this.element.type = "submit";
    this.element.textContent = text;
  }
}
