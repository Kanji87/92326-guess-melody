import AbstractView from './abstract-view';
import App from '../app/app';

export default class WelcomeView extends AbstractView {
  constructor(state, data) {
    super();
    this.state = state;
    this.data = data;
  }

  get template() {
    return `
      <section class="main main--welcome">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        <button class="main-play">Начать игру</button>
        <h2 class="title main-title">Правила игры</h2>
        <p class="text main-text">
          Правила просты&nbsp;— за&nbsp;${this.state.minutesCount} минут ответить на все вопросы.<br>
          Ошибиться можно ${this.state.lifeCount} раза.<br>
          Удачи!
        </p>
      </section>
    `;
  }

  bind() {
    const playButton = this.element.querySelector(`.main-play`);
    playButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      App.runGame(this.data);
    });
  }
}
