import AbstractView from "./abstract_view";
import {gameData, levels} from '../data/data';

export default class GenreView extends AbstractView {
  get template() {
    return `
      <section class="main main--level main--level-genre">
        <div class="main-wrap">
          <h2 class="title">Выберите ${levels[gameData.level - 1].correctAnswerGenre} треки</h2>
          <form class="genre">
            ${GenreView._renderGenreItems(4)}
            <button class="genre-answer-send" type="submit" disabled="disabled">Ответить</button>
          </form>
        </div>
      </section>
    `;
  }

  onGenreSelect() {
  }

  onSubmit() {
  }

  bind() {
    const correctGenre = levels[gameData.level - 1].correctAnswerGenre;
    const checkboxesNode = this.element.querySelector(`.genre`);
    const submitButton = this.element.querySelector(`.genre-answer-send`);

    checkboxesNode.addEventListener(`change`, () => {
      this.onGenreSelect();
    });

    submitButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onSubmit(correctGenre);
    });
  }

  static _renderGenreItems(itemsNum) {
    const genreAnswerItem = (genreNum) => `
      <div class="genre-answer">
        <div class="player-wrapper">
          <div class="player">
            <audio src="${levels[gameData.level - 1].genreList[genreNum].src}"></audio>
            <button class="player-control"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <input type="checkbox" name="answer" value="${levels[gameData.level - 1].genreList[genreNum].genre}" id="a-${genreNum + 1}">
        <label class="genre-answer-check" for="a-${genreNum + 1}"></label>
      </div>
    `;
    let genresNode = ``;
    for (let i = 0; i < itemsNum; i++) {
      genresNode += genreAnswerItem(i);
    }
    return genresNode;
  }
}
