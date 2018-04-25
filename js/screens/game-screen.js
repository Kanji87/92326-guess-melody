import TimerView from '../views/timer-view';
import LifebarView from '../views/lifebar-view';
import ArtistView from '../views/artist-view';
import GenreView from '../views/genre-view';
import LoseView from '../views/lose-view';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this._answerReward = 1;

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

  get isArtistLevel() {
    return this.model.state.level % 2 !== 0;
  }

  stopGame() {
    clearInterval(this._interval);
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

  updateLifebar() {
    const lifebar = new LifebarView(this.model.state);
    this.gameContent.replaceChild(lifebar.element, this.lifebar.element);
    this.lifebar = lifebar;
  }

  checkAnswer(answer) {
    console.log(this.model.isLifeEnd);
    if (this.model.isLifeEnd) {
      const result = new LoseView();
      this.changeView(result);
      return;
    }
    if (this.model.hasNextLevel) {
      if (answer) {
        this.model.state.points += this._answerReward;
      } else {
        this.model.state.points -= 1;
        this.model.state.lifeCount -= 1;
      }
      this.stopGame();
      this.model.increaseLevel();
      this.goToNextLevel();
      console.log(answer);
      console.log(this.model.state);
    } else {
      console.log(`you win`);
      return;
    }
  }

  goToNextLevel() {
    this.changeLevel();
    this.updateLifebar();
    this._interval = setInterval(() => {
      this.model.runOneTick();
      this.updateTimer();
    }, 1000);
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
}
