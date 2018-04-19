import createTemplate from './create_template';
import timerTemplate from './timer';
import {gameData, levels, goToNextLevel} from '../data/data';
import {initAudioPlayer} from '../utils/utils';

const renderArtistItems = (itemsNum) => {
  const artistAnswerItem = (artistNum) => `
    <div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${artistNum + 1}" name="answer" value="val-${artistNum + 1}"/>
      <label class="main-answer" for="answer-${artistNum + 1}">
        <img class="main-answer-preview" src="${levels[gameData.level - 1].artistList[artistNum].image}"
            alt="${levels[gameData.level - 1].artistList[artistNum].artist}" width="134" height="134">
        ${levels[gameData.level - 1].artistList[artistNum].artist}
      </label>
    </div>
  `;
  let artistsNode = ``;
  for (let i = 0; i < itemsNum; i++) {
    artistsNode += artistAnswerItem(i);
  }
  return artistsNode;
};

export const artist = () => createTemplate(`
  <section class="main main--level main--level-artist">
    ${timerTemplate}
    <div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${levels[gameData.level - 1].correctAnswerSrc}"></audio>
          <button class="player-control"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
        ${renderArtistItems(3)}
      </form>
    </div>
  </section>
`);

export const initArtistEvents = () => {
  const answers = document.querySelectorAll(`.main-answer-preview`);
  answers.forEach((answer) => {
    answer.addEventListener(`click`, () => {
      if (answer.getAttribute(`alt`) === levels[gameData.level - 1].correctAnswerArtist) {
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
      goToNextLevel(levels[gameData.level - 1].levelType);
    });
  });

  initAudioPlayer();
};
