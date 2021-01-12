import Store from "../store/store.js";

export default class Component {
  constructor(props = {}) {
    this.render = this.render || function () {}; // 방어 로직

    if (props.store instanceof Store) {
      // 방어로직
      props.store.events.subscribe("stateChange", () => this.render());
    }

    if (props.hasOwnProperty("element")) {
      this.element = props.element;

      if (props.hasOwnProperty("className")) {
        this.element.className = props.className;
      }
    }
  }

  template() {
    return ``;
  }

  render() {
    this.element.innerHTML = this.template();

    return this.element;
  }
}
