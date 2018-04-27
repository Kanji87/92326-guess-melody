import AbstractView from './abstract-view';
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
        <span class="main-comparison">${ResultView._showPlayerResult(this._testResults1, this.state)}</span>
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </section>
    `;
  }

  static _playerPlaceEndings(num) {
    let ending;
    if (num % 100 === 13) {
      ending = `-ое`;
    } else if (num % 10 === 3) {
      ending = `-е`;
    } else {
      ending = `-ое`;
    }
    return ending;
  }

  static _showPlayerResult(arr, playerResult) {
    if (playerResult.lifeCount === 0) {
      return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
    } else if (playerResult.timeCount === 0) {
      return `Время вышло! Вы не успели отгадать все мелодии`;
    } else {
      const results = [...arr];
      results.push(playerResult.points);
      results.sort((a, b) => {
        return b - a;
      });
      const playersCount = results.length;
      const playerPlace = results.indexOf(playerResult.points) + 1;
      const playerRating = Math.floor((playersCount - playerPlace) / playersCount * 100);
      return `Вы заняли ${playerPlace}${ResultView._playerPlaceEndings(playerPlace)} место из ${playersCount} игроков. Это лучше, чем у ${playerRating}% игроков`;
    }
  }

  bind() {
    const replay = this.element.querySelector(`.main-replay`);
    replay.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      App.runGame(this.data);
    });
  }
}
