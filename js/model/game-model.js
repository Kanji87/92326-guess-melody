import {
  levels
} from '../data/data';

const INITIAL_STATE = {
  lifeCount: 3,
  timeCount: 5 * 60, // 5 минут
  level: 1,
  points: 0,
  answerCount: 0,
  fastAnswerCount: 0
};

export default class GameModel {
  constructor() {
    this._state = INITIAL_STATE;
  }

  hasNextLevel() {
    return levels[this._state.level] !== void 0;
  }

  goToNextLevel() {
    return this._state.level++;
  }

  restart() {
    this._state = INITIAL_STATE;
  }

  get state() {
    return this._state;
  }

  get currentLevel() {
    return this._state.level;
  }

  get currentLevelData() {
    return levels[this._state.level - 1];
  }

  isLifeLeft() {
    return this._state.lifeCount > 0;
  }

  tick(stateObj) {
    const timeLeft = stateObj.timeCount--;
    return Object.assign({}, stateObj, timeLeft);
  }

  runOneTick() {
    this._state = this.tick(this._state);
  }
}
