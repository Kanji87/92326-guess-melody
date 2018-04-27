import AbstractView from "./abstract-view";

export default class ErrorView extends AbstractView {
  constructor(error) {
    super();
    this._error = error;
  }
  get template() {
    return `
      <section class="main main--welcome">
        <h2 class="title main-title">Ошибка</h2>
        <p class="text main-text">${this._error}</p>
      </section>
    `;
  }
}
