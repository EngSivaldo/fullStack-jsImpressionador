import { Component } from "./Component.js";

export class Input extends Component {
  constructor(type = "text", placeholder = "") {
    super("input");
    this.build();
    this.element.type = type;
    this.element.placeholder = placeholder;
  }
}
