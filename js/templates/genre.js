import createTemplate from './create_template';
import renderTemplate from './render_template';
import result from './result';
import resultTimeout from './result_timeout';
import resultLose from './result_lose';
import timerTemplate from './timer';
import {gameData, artistsData} from '../data/data';
import renderLifebar from './lifebar';
import artist from './artist';

const createGenreTitle = () => {
  // const randomGenre = Math.floor(Math.random() * artistsData.length);
  return `<h2 class="title">Выберите ${artistsData[0].genre} треки</h2>`;
};

const genreAnswerItem = (genreNum) => `
  <div class="genre-answer">
    <div class="player-wrapper">
      <div class="player">
        <audio src="${artistsData[genreNum].src}"></audio>
        <button class="player-control"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>
    <input type="checkbox" name="answer" value="${artistsData[genreNum].genre}" id="a-${genreNum + 1}">
    <label class="genre-answer-check" for="a-${genreNum + 1}"></label>
  </div>
`;

const renderGenreItems = (itemsNum) => {
  let genres = ``;
  for (let i = 0; i < itemsNum; i++) {
    genres += genreAnswerItem(i);
  }
  return genres;
};

const genre = createTemplate(`
  <section class="main main--level main--level-genre">
    ${timerTemplate}
    <div class="main-wrap">
      ${createGenreTitle()}
      <form class="genre">
        ${renderGenreItems(4)}
        <button class="genre-answer-send" type="submit" disabled="disabled">Ответить</button>
      </form>
    </div>
  </section>
`);

const results = [
  result,
  resultTimeout,
  resultLose
];

const randomInt = (max) => Math.floor(Math.random() * max);

document.addEventListener(`click`, (answerEvt) => {
  if (answerEvt.target.classList.contains(`genre-answer-check`)) {
    const answerButton = document.querySelector(`.genre-answer-send`);
    const checkbox = answerEvt.target.closest(`.genre-answer`).querySelector(`input`);
    checkbox.checked = !checkbox.checked;

    let isChecked = false;
    const checkboxes = document.querySelectorAll(`.genre-answer input`);
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        isChecked = true;
        i = checkboxes.length - 1;
      }
    }
    if (isChecked) {
      answerButton.removeAttribute(`disabled`);
    } else {
      answerButton.disabled = true;
    }
  }
});

document.addEventListener(`click`, (submitEvt) => {
  submitEvt.preventDefault();
  if (submitEvt.target.classList.contains(`genre-answer-send`)) {
    renderTemplate(artist);
    renderLifebar();
  }
});

export default genre;
