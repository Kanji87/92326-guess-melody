import AbstractView from './abstract-view';
import App from '../app/app';

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
        <span role="button" tabindex="0" class="main-replay">Попробовать еще раз</span>
      </section>
    `;
  }

  bind() {
    const startButton = this.element.querySelector(`.main-replay`);
    startButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      App.loadGame();
    });
  }
}
