import AbstractView from './abstract-view';

export default class GenreView extends AbstractView {
  constructor(state, data) {
    super();
    this.levels = data;
    this.level = state.level;
  }

  get template() {
    return `
      <section class="main main--level main--level-genre">
        <div class="main-wrap">
          <h2 class="title">Выберите ${this.levels[this.level - 1].correctAnswerGenre} треки</h2>
          <form class="genre">
            ${this.levels[this.level - 1].genreList.map((level, index) => GenreView._genreAnswerItem(level, index)).join(``)}
            <button class="genre-answer-send" type="submit" disabled="disabled">Ответить</button>
          </form>
        </div>
      </section>
    `;
  }

  onAnswer() {}

  bind() {
    const correctGenre = this.levels[this.level - 1].correctAnswerGenre;
    const checkboxesNode = this.element.querySelector(`.genre`);
    const submitButton = this.element.querySelector(`.genre-answer-send`);

    checkboxesNode.addEventListener(`change`, () => {
      let selectedCheckboxes = this.element.querySelectorAll(`.genre-answer input:checked`).length;
      submitButton.disabled = selectedCheckboxes ? false : true;
    });

    submitButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const answers = this.element.querySelectorAll(`.genre-answer input:checked`);
      let isCorrect = false;
      answers.forEach((answer) => {
        isCorrect = answer.value === correctGenre ? true : false;
      });

      this.onAnswer(isCorrect);
    });
  }

  static _genreAnswerItem(level, index) {
    return `
      <div class="genre-answer">
        <div class="player-wrapper">
          <div class="player">
            <audio src="${level.src}"></audio>
            <button class="player-control"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <input type="checkbox" name="answer" value="${level.genre}" id="a-${index + 1}">
        <label class="genre-answer-check" for="a-${index + 1}"></label>
      </div>
    `;
  }
}
