import circles from "./circles";
import lines from "./lines";

class CanvasView {
  _parentElement = document.querySelector("canvas");
  _current = "lines";

  constructor() {
    this.addHandlerRender();
    this._animate();
  }

  _animate() {
    if (!this._parentElement) return;
    // lines().animate(true);
    if (this._current === "circles") {
      lines().animate(false);
      circles().animateDots(true);
      this._current = "lines";
    } else {
      circles().animateDots(false);
      lines().animate(true);
      this._current = "circles";
    }
  }

  addHandlerRender() {
    if (!this._parentElement) return;
    this._parentElement.addEventListener("click", this._animate.bind(this));
  }
}

export default new CanvasView();
