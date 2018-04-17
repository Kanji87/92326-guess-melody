import createTemplate from './create_template';
import renderTemplate from './render_template';
import timerTemplate from './timer';
import genre from './genre';
import {gameData, artistsData} from '../data/data';
import getRandomItems from '../utils/utils';
import renderLifebar from './lifebar';

const artists = getRandomItems(3, artistsData);
const winArtist = artists[0];

const renderArtistItems = (itemsNum) => {
  const artistAnswerItem = (artistNum) => `
    <div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${artistNum + 1}" name="answer" value="val-${artistNum + 1}"/>
      <label class="main-answer" for="answer-${artistNum + 1}">
        <img class="main-answer-preview" src="${artists[artistNum].image}"
            alt="${artists[artistNum].artist}" width="134" height="134">
        ${artists[artistNum].artist}
      </label>
    </div>
  `;
  let artistsNode = ``;
  for (let i = 0; i < itemsNum; i++) {
    artistsNode += artistAnswerItem(i);
  }
  return artistsNode;
};

const artist = createTemplate(`
  <section class="main main--level main--level-artist">
    ${timerTemplate}
    <div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${winArtist.src}"></audio>
          <button class="player-control"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
        ${renderArtistItems(artists.length)}
      </form>
    </div>
  </section>
`);

document.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`main-answer-preview`)) {
    if (evt.target.getAttribute(`alt`) === winArtist.artist) {
      gameData.points = gameData.points + gameData.answerReward;
    } else {
      gameData.points -= 1;
      gameData.lifeCount -= 1;
    }

    gameData.level++;

    renderTemplate(genre);
    renderLifebar();
    document.querySelectorAll(`.genre-answer input`).forEach((input) => {
      input.checked = false;
    });
    document.querySelector(`.genre-answer-send`).disabled = true;
  }
});

export default artist;
