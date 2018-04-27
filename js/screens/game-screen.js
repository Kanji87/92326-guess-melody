import TimerView from '../views/timer-view';
import LifebarView from '../views/lifebar-view';
import ArtistView from '../views/artist-view';
import GenreView from '../views/genre-view';
import ResultView from '../views/result-view';
import LoseView from '../views/lose-view';
import TimeoutView from '../views/timeout-view';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this._answerReward = 0;

    this.timer = new TimerView(this.model.state);
    this.lifebar = new LifebarView(this.model.state);
    this.content = this.isArtistLevel ? new ArtistView(this.model.state, this.model.levels) : new GenreView(this.model.state, this.model.levels);

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
    return this.model.levels[this.model.state.level - 1].type === `artist`;
    // return this.model.state.level % 2 !== 0;
  }

  stopGame() {
    clearInterval(this._interval);
  }

  updateTimer() {
    if (this.model.isTimeEnd) {
      this.stopGame();
      const result = new TimeoutView(this.model.levels);
      this.gameContent.innerHTML = ``;
      this.gameContent.appendChild(result.element);
      return;
    }
    const timer = new TimerView(this.model.state);
    this.gameContent.replaceChild(timer.element, this.timer.element);
    this.timer = timer;
  }

  updateLifebar() {
    const lifebar = new LifebarView(this.model.state);
    this.gameContent.replaceChild(lifebar.element, this.lifebar.element);
    this.lifebar = lifebar;
  }

  static _initAudioPlayer(element) {
    const playButtons = element.querySelectorAll(`.player-control`);
    playButtons.forEach((playButton) => {
      playButton.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        const audio = evt.target.closest(`.player`).querySelector(`audio`);
        const audioPlayers = element.querySelectorAll(`audio`);
        if (audio.paused) {
          audioPlayers.forEach((audioPlayer) => {
            audioPlayer.pause();
            audioPlayer.closest(`.player`).querySelector(`.player-control`).classList.remove(`player-control--pause`);
          });
          audio.play();
          playButton.classList.add(`player-control--pause`);
        } else {
          audio.pause();
          playButton.classList.remove(`player-control--pause`);
        }
      });
    });
  }

  checkAnswer(answer) {
    if (answer) {
      this.model.state.points += this._answerReward;
    } else {
      this.model.state.points -= 1;
      this.model.state.lifeCount -= 1;
    }

    if (this.model.isLifeEnd) {
      this.stopGame();
      const result = new LoseView(this.model.levels);
      this.gameContent.innerHTML = ``;
      this.gameContent.appendChild(result.element);
      return;
    }

    if (this.model.hasNextLevel) {
      this.stopGame();
      this.model.increaseLevel();
      this.goToNextLevel();
    } else {
      this.stopGame();
      const result = new ResultView(this.model.state, this.model.levels);
      this.gameContent.innerHTML = ``;
      this.gameContent.appendChild(result.element);
    }
  }

  goToNextLevel() {
    this._answerReward = 2;
    setTimeout(() => {
      this._answerReward = 1;
    }, 30000);
    this.changeLevel();
    this.updateLifebar();
    GameScreen._initAudioPlayer(this.content.element);
    this._interval = setInterval(() => {
      this.model.timer();
      this.updateTimer();
    }, 1000);
  }

  changeLevel() {
    const level = this.isArtistLevel ? new ArtistView(this.model.state, this.model.levels) : new GenreView(this.model.state, this.model.levels);
    level.onAnswer = this.checkAnswer.bind(this);
    this.changeView(level);
  }

  changeView(view) {
    this.gameContent.replaceChild(view.element, this.content.element);
    this.content = view;
  }
}
