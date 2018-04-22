import {gameData} from '../data/data';
import AbstractView from './abstract_view';

export default class WelcomeView extends AbstractView {
  get template() {
    return `
    <section class="main main--welcome">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <button class="main-play">Начать игру</button>
      <h2 class="title main-title">Правила игры</h2>
      <p class="text main-text">
        Правила просты&nbsp;— за&nbsp;${gameData.timeCount} минут ответить на все вопросы.<br>
        Ошибиться можно ${gameData.lifeCount} раза.<br>
        Удачи!
      </p>
    </section>
    `;
  }

  onPlayClick() {
    // start game
  }

  bind() {
    const playButton = this.element.querySelector(`.main-play`);
    playButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onPlayClick();
    });
  }
}
