import levels from '../data/data';

const INITIAL_STATE = Object.freeze({
  lifeCount: 3,
  timeCount: {
    minutes: 5,
    seconds: `0${0}`
  },
  level: 1,
  points: 0,
  answerCount: 0,
  fastAnswerCount: 0
});

export default class GameModel {
  constructor() {
    this._state = Object.assign({}, INITIAL_STATE);
  }

  get hasNextLevel() {
    return levels[this._state.level] !== void 0;
  }

  increaseLevel() {
    return this._state.level++;
  }

  get state() {
    return this._state;
  }

  get isTimeEnd() {
    return !this._state.timeCount.minutes && this._state.timeCount.seconds === `00`;
  }

  get currentLevel() {
    return this._state.level;
  }

  get isLifeEnd() {
    return this._state.lifeCount <= 0;
  }

  timer() {
    if (this._state.timeCount.seconds > 0) {
      this._state.timeCount.seconds = this._state.timeCount.seconds < 10 ? `0${this._state.timeCount.seconds - 1}` : this._state.timeCount.seconds - 1;
    } else {
      this._state.timeCount.seconds = 59;

      if (this._state.timeCount.minutes > 0) {
        this._state.timeCount.minutes--;
      } else {
        this._state.timeCount.minutes = 0;
      }
    }
  }
}
