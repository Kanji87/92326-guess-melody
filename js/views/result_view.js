import AbstractView from "./abstract_view";
import showPlayerResult from '../player_result/player_result';

const testResults1 = [20, 15, 1, 6, 12, 18];

export default class ResultView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  
      <h2 class="title">Вы настоящий меломан!</h2>
      <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
        <br>вы&nbsp;набрали ${this.data.points} баллов (${this.data.fastAnswerCount} быстрых)
        <br>совершив ${3 - this.data.lifeCount} ошибки</div>
      <span class="main-comparison">${showPlayerResult(testResults1, this.data)}</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>
  `;
  }

  onReplayClick() {
  }

  bind() {
    const replay = this.element.querySelector(`.main-replay`);
    replay.addEventListener(`click`, () => {
      this.onReplayClick();
    });
  }
}
