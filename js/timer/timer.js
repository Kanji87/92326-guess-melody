export default class Timer {
  constructor(gameTime) {
    this.timeNum = gameTime;
  }

  tick() {
    return this.timeNum < 0 ? -1 : this.timeNum--;
  }
}
