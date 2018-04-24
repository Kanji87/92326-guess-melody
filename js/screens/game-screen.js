import TimerView from '../views/timer-view';
import LifebarView from '../views/lifebar-view';
import ArtistView from '../views/artist-view';
import GenreView from '../views/genre-view';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.timer = new TimerView(this.model.state);
    this.lifebar = new LifebarView(this.model.state);
    this.content = this.model.state.level % 2 !== 0 ? new ArtistView(this.model.state) : new GenreView(this.model.state);

    this.gameContent = document.createElement(`div`);
    this.gameContent.classList.add(`main`);
    this.gameContent.appendChild(this.content.element);
    this.gameContent.appendChild(this.timer.element);
    this.gameContent.appendChild(this.lifebar.element);

    this._interval = null;
  }

  get element() {
    return this.gameContent;
  }

  stopGame() {
    clearInterval(this._interval);
  }

  startGame() {
    this.changeLevel();
    this._interval = setInterval(() => {
      this.model.runOneTick();
      this.updateTimer();
    }, 1000);
  }

  restartGame() {
    this.model.restart();
    this.startTimer();
  }

  updateTimer() {
    const timer = new TimerView(this.model.state);
    this.gameContent.replaceChild(timer.element, this.timer.element);
    this.timer = timer;
  }

  answer(answer) {
    this.stopGame();
    this.model.goToNextLevel();
    this.startGame();
  }

  changeLevel() {
    const level = this.model.state.level % 2 !== 0 ? new ArtistView(this.model.state) : new GenreView(this.model.state);
    console.log(level);
    level.onAnswer = this.answer.bind(this);
    this.changeView(level);
  }

  changeView(view) {
    this.gameContent.replaceChild(view.element, this.content.element);
    this.content = view;
  }
}
