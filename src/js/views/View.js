export default class View {
  render(data) {
    this._data = data;

    this.clearMarkUp();

    const markup = this.createMarkUp(this._data);

    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  clearMarkUp() {
    this.parentElement.innerHTML = "";
  }
}

// export default new View();

