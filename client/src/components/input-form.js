import Component from "../lib/component.js";
import store from "../store/index.js";

export default class InputForm extends Component {
  constructor() {
    super({
      store,
      element: document.createElement("div"),
      className: "input-form",
    });

    this.setEvent();
  }

  setEvent() {
    this.element.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.id === "add-button") {
        const value = document.querySelector("#item-input").value.trim();

        store.dispatch("addItem", { item: value, done: false });
      }
    });
  }

  template() {
    return `
      <input id="item-input" type="text">
      <button id="add-button">ADD ITEM</button>
    `;
  }
}
