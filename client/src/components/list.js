import Component from "../lib/component.js";
import store from "../store/index.js";

export default class List extends Component {
  constructor() {
    super({
      store,
      element: document.createElement("div"),
      className: "list",
    });

    this.setEvent();
  }

  setEvent() {
    this.element.addEventListener("click", (e) => {
      if (e.target.id === "check-button") {
        const index = e.target.dataset.idx;

        store.dispatch("updateItem", index);
      }

      if (e.target.id === "delete-button") {
        const index = e.target.dataset.idx;

        store.dispatch("clearItem", { index });
      }
    });
  }

  template() {
    const status = store.state.status;
    let list = store.state.items.map((item, idx) => ({ ...item, idx }));

    if (status === "DOING") {
      list = list.filter((v) => v.done === false);
    }

    if (status === "DONE") {
      list = list.filter((v) => v.done === true);
    }

    if (list.length === 0) {
      return `<p class="no-items">You've done nothing yet &#x1f622;</p>`;
    }

    return `
      <ul class="items">
        ${list
          .map(({ item, done, idx }) => {
            return `
            <li class="item ${
              done && "line-through"
            }">${item}<button id="check-button" aria-label="Delete this item" data-idx=${idx}>✔️</button><button id="delete-button" aria-label="Delete this item" data-idx=${idx}>🗑️</button></li>
          `;
          })
          .join("")}
      </ul>
    `;
  }
}
