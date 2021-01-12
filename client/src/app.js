import InputForm from "./components/input-form.js";
import List from "./components/list.js";
import Count from "./components/count.js";
import Status from "./components/status.js";

class App {
  constructor() {
    this.target = document.querySelector("#root");
    this.render();
  }

  render() {
    this.target.appendChild(new InputForm().render());
    this.target.appendChild(new List().render());
    this.target.appendChild(new Count().render());
    this.target.appendChild(new Status().render());
  }
}

new App();
