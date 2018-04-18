import createTemplate from './create_template';
import {artist, initArtistEvents} from './artist';
import {gameData, levels} from '../data/data';
import renderLifebar from './lifebar';
import renderTemplate from './render_template';

export const welcome = (data) => createTemplate(`
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;${data.timeCount} минут ответить на все вопросы.<br>
      Ошибиться можно ${data.lifeCount} раза.<br>
      Удачи!
    </p>
  </section>
`);

export const initWelcomeEvents = () => {
  const playButton = document.querySelector(`.main-play`);
  playButton.addEventListener(`click`, () => {
    renderTemplate(artist());
    initArtistEvents();
    renderLifebar();
  });
};
