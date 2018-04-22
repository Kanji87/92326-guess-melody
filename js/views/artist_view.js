import AbstractView from "./abstract_view";
import {levels} from '../data/data';

const artistAnswerItem = (level, index) => `
  <div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${index + 1}" name="answer" value="val-${index + 1}"/>
    <label class="main-answer" for="answer-${index + 1}">
      <img class="main-answer-preview" src="${level.image}"
          alt="${level.artist}" width="134" height="134">
      ${level.artist}
    </label>
  </div>
`;

export default class ArtistView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `
      <section class="main main--level main--level-artist">
        <div class="main-wrap">
          <h2 class="title main-title">Кто исполняет эту песню?</h2>
          <div class="player-wrapper">
            <div class="player">
              <audio src="${levels[this.level - 1].correctAnswerSrc}"></audio>
              <button class="player-control"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <form class="main-list">
            ${levels[this.level - 1].artistList.map((level, index) => artistAnswerItem(level, index)).join(``)}
          </form>
        </div>
      </section>
    `;
  }

  onAnswerClick() {
  }

  bind() {
    const answersNode = this.element.querySelector(`.main-list`);
    answersNode.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const answer = evt.target.closest(`.main-answer-wrapper`).querySelector(`.main-answer-preview`);
      const answerText = answer.getAttribute(`alt`);
      this.onAnswerClick(answerText);
    });
  }
}
