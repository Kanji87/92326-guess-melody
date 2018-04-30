import AbstractView from '../views/abstract-view';
import App from '../app/app';

export default class TimoutView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }
  get template() {
    return `
      <section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    
        <h2 class="title">Увы и ах!</h2>
        <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
        <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
      </section>
    `;
  }

  bind() {
    const replay = this.element.querySelector(`.main-replay`);
    replay.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      App.runGame(this.data);
    });
  }
}
