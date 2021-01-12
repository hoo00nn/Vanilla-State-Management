import Component from "../lib/component.js";
import store from "../store/index.js";

export default class Status extends Component {
  constructor() {
    super({
      store,
      element: document.createElement("div"),
      className: "status",
    });

    this.setEvent();
  }

  setEvent() {
    this.element.addEventListener("click", (e) => {
      if (e.target.classList.contains("status-button")) {
        const { status } = e.target.dataset;

        store.dispatch("updateStatus", status);
      }
    });
  }

  template() {
    return `
      <button class="status-button" data-status="ALL">All</button>
      <button class="status-button" data-status="DOING">Doing</button>
      <button class="status-button" data-status="DONE">Done</button>
    `;
  }
}
