import createTemplate from './create_template';
import timerTemplate from './timer';
import {gameData, levels, goToNextLevel} from '../data/data';
import {initAudioPlayer} from '../utils/utils';

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
      gameData.answerCount++;
      gameData.points += gameData.answerReward;
    } else {
      if (gameData.points === 0) {
        gameData.points = gameData.points;
        gameData.lifeCount -= 1;
      } else {
        gameData.points -= 1;
        gameData.lifeCount -= 1;
      }
    }

    gameData.level++;
    goToNextLevel(levels[`level-${gameData.level}`].levelType);
  });

  initAudioPlayer();
};
