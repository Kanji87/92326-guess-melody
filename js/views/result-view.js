import AbstractView from './abstract-view';
import GameModel from '../model/game-model';
import App from '../app/app';

export default class ResultView extends AbstractView {
  constructor(state, data) {
    super();
    this.state = state;
    this.data = data;
    this._testResults1 = [20, 15, 1, 6, 12, 18];
  }

  get template() {
    return `
      <section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    
        <h2 class="title">Вы настоящий меломан!</h2>
        <div class="main-stat">За&nbsp;${4 - this.state.minutesCount}&nbsp;минуты и ${60 - this.state.secondsCount}&nbsp;секунд
          <br>вы&nbsp;набрали ${this.state.points} баллов (${this.state.fastAnswerCount} быстрых)
          <br>совершив ${3 - this.state.lifeCount} ошибки</div>
        <span class="main-comparison">${GameModel.showPlayerResult(this._testResults1, this.state)}</span>
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
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
