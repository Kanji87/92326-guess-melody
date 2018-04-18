import createTemplate from './create_template';
import renderTemplate from './render_template';
import timerTemplate from './timer';
import {gameData, levels} from '../data/data';
import {initAudioPlayer} from '../utils/utils';
import {artist, initArtistEvents} from './artist';
import renderLifebar from './lifebar';

const renderGenreItems = (itemsNum) => {
  const genreAnswerItem = (genreNum) => `
    <div class="genre-answer">
      <div class="player-wrapper">
        <div class="player">
          <audio src="${levels[`level-` + gameData.level].genreList[genreNum].src}"></audio>
          <button class="player-control"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <input type="checkbox" name="answer" value="${levels[`level-` + gameData.level].genreList[genreNum].genre}" id="a-${genreNum + 1}">
      <label class="genre-answer-check" for="a-${genreNum + 1}"></label>
    </div>
  `;
  let genresNode = ``;
  for (let i = 0; i < itemsNum; i++) {
    genresNode += genreAnswerItem(i);
  }
  return genresNode;
};

export const genre = () => createTemplate(`
  <section class="main main--level main--level-genre">
    ${timerTemplate}
    <div class="main-wrap">
      <h2 class="title">Выберите ${levels[`level-` + gameData.level].correctAnswerGenre} треки</h2>
      <form class="genre">
        ${renderGenreItems(4)}
        <button class="genre-answer-send" type="submit" disabled="disabled">Ответить</button>
      </form>
    </div>
  </section>
`);

export const initGenreEvents = () => {
  const correctGenre = levels[`level-` + gameData.level].correctAnswerGenre;
  const checkboxes = document.querySelectorAll(`.genre-answer input`);
  const submitButton = document.querySelector(`.genre-answer-send`);
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener(`change`, () => {
      let selectedCheckboxes = document.querySelectorAll(`.genre-answer input:checked`).length;
      if (selectedCheckboxes) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    });
  });

  submitButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    const answers = document.querySelectorAll(`.genre-answer input:checked`);
    let isCorrect = false;
    answers.forEach((answer) => {
      if (answer.value === correctGenre) {
        isCorrect = true;
      } else {
        isCorrect = false;
      }
    });
    if (isCorrect) {
      gameData.points += gameData.answerReward;
    } else {
      gameData.points -= 1;
      gameData.lifeCount -= 1;
    }
    gameData.level++;
    renderTemplate(artist());
    renderLifebar();
    initArtistEvents();
  });

  initAudioPlayer();
};

// document.addEventListener(`click`, (submitEvt) => {
//   submitEvt.preventDefault();
//   if (submitEvt.target.classList.contains(`genre-answer-send`)) {
//     renderTemplate(artist);
//     renderLifebar();
//   }
// });
