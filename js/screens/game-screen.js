import TimerView from '../views/timer-view';
import LifebarView from '../views/lifebar-view';
import ArtistView from '../views/artist-view';
import GenreView from '../views/genre-view';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.timer = new TimerView(this.model.state);
    this.lifebar = new LifebarView(this.model.state);
    this.content = this.isArtistLevel !== 0 ? new ArtistView(this.model.state) : new GenreView(this.model.state);

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

  goToNextLevel() {
    this.changeLevel();
    this._interval = setInterval(() => {
      this.model.runOneTick();
      this.updateTimer();
    }, 1000);
  }

  restartGame() {
    this.model.restart();
    this.goToNextLevel();
  }

  updateTimer() {
    const timer = new TimerView(this.model.state);
    this.gameContent.replaceChild(timer.element, this.timer.element);
    this.timer = timer;
  }

  checkAnswer(answer) {
    this.stopGame();
    this.model.increaseLevel();
    this.goToNextLevel();
    console.log(answer);
    console.log(this.model.state);
  }

  changeLevel() {
    const level = this.isArtistLevel ? new ArtistView(this.model.state) : new GenreView(this.model.state);
    level.onAnswer = this.checkAnswer.bind(this);
    this.changeView(level);
  }

  changeView(view) {
    this.gameContent.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  get isArtistLevel() {
    return this.model.state.level % 2 !== 0;
  }
}
