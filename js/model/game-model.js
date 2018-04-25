import levels from '../data/data';

const INITIAL_STATE = Object.freeze({
  lifeCount: 3,
  timeCount: 5 * 60, // 5 минут
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
    return !this._state.timeCount;
  }

  get currentLevel() {
    return this._state.level;
  }

  get isLifeEnd() {
    return this._state.lifeCount <= 0;
  }

  timerTick() {
    this._state.timeCount -= 1;
  }
}
