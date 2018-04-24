import AbstractView from '../views/abstract-view';

export default class LifebarView extends AbstractView {
  constructor(state) {
    super();
    this.lifesLeft = state.lifeCount;
  }

  get template() {
    return `
    <div class="main-mistakes">
      ${new Array(this.lifesLeft).fill(`
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}
    </div>
    `;
  }
}
