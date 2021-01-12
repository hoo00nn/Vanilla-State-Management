import Component from "../lib/component.js";
import store from "../store/index.js";

export default class Count extends Component {
  constructor() {
    super({
      store,
      element: document.createElement("div"),
      className: "count",
    });
  }

  template() {
    const ALL = store.state.items.length;
    const DOING = store.state.items.filter((v) => v.done === false).length;
    const DONE = store.state.items.filter((v) => v.done === true).length;

    return `
      <small>All : ${ALL}</small>
      <small> || </small>
      <small>Doing : ${DOING}</small>
      <small> || </small>
      <small> Done : ${DONE}</small>
	`;
  }
}
